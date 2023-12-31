import React, { useState, useEffect } from "react";
import { uploadBytes } from "firebase/storage";
import { AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from "sweetalert2";

import {
  Container,
  PageName,
  AddPostButton,
  NewsItem,
  Inform,
  AllComments,
  Comments,
  User,
  SpaceBetween,
  UserAvatar,
  UserName,
  Time,
  Titles,
  Description,
  Img,
  CommentDiv,
  Comment,
  CommentTime,
  CommentContent,
  NewComment,
  BoxComment,
  SendIcon,
  Cmt,
  AvaCmt,
} from "./News.styled";
import {
  AddPost,
  UserDiv,
  Content,
  InputStatus,
  ImageDiv,
  ButtonGroup,
  AddImage,
  AddButton,
  RemoveButton,
} from "./AddNew.styled";

import {
  getPostData,
  createPost,
  addCommentToPost as createComment,
  getCommentsData,
  deletePost,
  deleteComment,
} from "../../API/postsApi";
import { getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase/firebase";
import { ref } from "firebase/storage";
const moment = require("moment");
const convertPngToJpg = (pngFile) => {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      canvas.toBlob(
        (blob) => {
          resolve(blob);
        },
        "image/jpeg",
        0.9
      );
    };

    img.onerror = (error) => {
      reject(error);
    };
  });
};

function News() {
  const [commentValues, setCommentValues] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const [postText, setPostText] = useState("");
  const [titleText, setTitleText] = useState("");
  const [posts, setPosts] = useState([]);

  const [dataChange, setDataChange] = useState();

  const [imageShowInPost, setImageShowInPost] = useState(null);
  const [imageUpload, setImageUpload] = useState(null);
  const [postImageSave, setPostImageSave] = useState(
    "https://via.placeholder.com/200x200.png"
  );

  const fetchPosts = async () => {
    try {
      const postsData = await getPostData();

      const updatedPosts = await Promise.all(
        postsData.map(async (post) => {
          const path = "users/" + post.author_img;
          const path_img = "posts/" + post.post_image;

          try {
            const downloadURL = await getDownloadURL(ref(storage, path));
            const downloadURL_img = await getDownloadURL(
              ref(storage, path_img)
            );

            // Update post author_img and post_image
            const updatedPost = {
              ...post,
              author_img: downloadURL,
              post_image: downloadURL_img,
            };

            // Check if the comments array is not empty
            if (updatedPost.comments && updatedPost.comments.length > 0) {
              // Update commenter_img in each comment
              const updatedComments = await Promise.all(
                updatedPost.comments.map(async (comment) => {
                  const commentPath = "users/" + comment.commenter_img;

                  try {
                    const commentDownloadURL = await getDownloadURL(
                      ref(storage, commentPath)
                    );

                    return {
                      ...comment,
                      commenter_img: commentDownloadURL,
                    };
                  } catch (commentError) {
                    console.error(
                      "Error fetching comment download URL:",
                      commentError
                    );
                    return comment; // Return the original comment in case of an error
                  }
                })
              );

              updatedPost.comments = updatedComments;
            }

            return updatedPost;
          } catch (error) {
            console.error("Error fetching download URL:", error);
            return post; // Return the original post in case of an error
          }
        })
      );

      setPosts(updatedPosts);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [dataChange]);

  const user = {
    name: JSON.parse(localStorage.getItem("user")).name,
    image: JSON.parse(localStorage.getItem("user")).image,
  };
  console.log(user);
  const handleSetPostText = (e) => {
    setPostText((prev) => e.target.value);
  };
  const handleSetTitleText = (e) => {
    setTitleText((prev) => e.target.value);
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    setImageUpload(file);
    console.log(file);
    console.log(imageUpload);
    if (file) {
      const fileName = file.name; // Lấy trường 'name' của tệp ảnh
      console.log("Tên tệp ảnh:", fileName);

      if (file.type === "image/png") {
        try {
          const jpgFile = await convertPngToJpg(file);
          const imageUrl = URL.createObjectURL(jpgFile);
          console.log(imageUrl);
          setImageShowInPost(imageUrl);
          setPostImageSave(fileName);
        } catch (error) {
          console.error("Lỗi chuyển đổi PNG sang JPG:", error);
        }
      } else {
        const imageUrl = URL.createObjectURL(file);
        console.log(imageUrl);
        setImageShowInPost(imageUrl);
        setPostImageSave(fileName);
      }
    }
  };
  const handleAddPostImage = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.addEventListener("change", handleFileInputChange);
    fileInput.click();
  };

  const handleOpenAdd = () => {
    setIsVisible((prev) => true);
  };
  const handleRemoveAddNews = () => {
    setIsVisible((prev) => false);
    setImageShowInPost((prev) => null);
    setPostText((prev) => "");
    setTitleText((prev) => "");
  };
  const handleRemoveImage = () => {
    setImageShowInPost((prev) => null);
  };
  const handleRemoveNews = (user, post_id) => {
    //gọi hàm xóa tin, kiểm tra quyền của user, nếu user không có quyền xóa thì trả biến có quyền  hay không
    const role = JSON.parse(localStorage.getItem("user")).role;
    const currentUser = JSON.parse(localStorage.getItem("user"))._id;
    //Sửa chỗ post_id
    console.log(role, "postId", post_id);
    if (!["admin", "manager"].includes(role) && user != currentUser) {
      alert("You cannot delete this news!");
    } else {
      Swal.fire({
        title: "Do you want to remove the news?",
        showCancelButton: true,
        confirmButtonText: "Remove",
      }).then((result) => {
        if (result.isConfirmed) {
          const result = deletePost(post_id);
          setPosts((prev) => prev.filter((post) => post.post_id !== post_id));
          Swal.fire("Remove", "", "success");
        }
      });
    }
  };
  const handleRemoveComment = (author_id, commenter_id, comment_id) => {
    //gọi hàm xóa comment, kiểm tra quyền của user, nếu user không có quyền xóa thì trả biến có quyền  hay không
    var enabled = false;

    const currentUserRole = JSON.parse(localStorage.getItem("user")).role;
    const currentUser = JSON.parse(localStorage.getItem("user"))._id;

    console.log(
      currentUserRole,
      "author_id: ",
      author_id,
      "commenter_id: ",
      commenter_id
    );

    if (
      !["admin", "manager"].includes(currentUserRole) &&
      currentUser != author_id &&
      currentUser != commenter_id
    ) {
      alert("You cannot delete this comment!");
    } else {
      Swal.fire({
        title: "Do you want to remove the news?",
        showCancelButton: true,
        confirmButtonText: "Remove",
      }).then((result) => {
        if (result.isConfirmed) {
          const result = deleteComment(comment_id);

          const newData = posts.map((post) => {
            return {
              ...post,
              comments: post.comments.filter(
                (comment) => comment.comment_id !== comment_id
              ),
            };
          });

          setPosts(newData);
          Swal.fire("Remove", "", "success");
        }
      });
    }
  };
  const handleCommentChange = (event, index) => {
    const updatedCommentValues = [...commentValues];
    updatedCommentValues[index] = event.target.value;
    setCommentValues(updatedCommentValues);
  };
  const handleCreatePost = async () => {
    const currentUser = JSON.parse(localStorage.getItem("user"));

    try {
      let newPost = {
        title: titleText,
        description: postText,
        photo: postImageSave,
        user: currentUser._id,
      };

      if (postImageSave) {
        // Đặt tên tệp ảnh trên Firebase Storage
        const fileName = "posts/" + postImageSave;
        console.log(imageShowInPost);
        await uploadImageToFirebase(imageUpload, fileName);

        // Thêm trường image vào đối tượng changeInfo
      }

      const response = await createPost(newPost);
      reLoadData();
      removeNewPost();
    } catch (error) {
      console.error("Lỗi thay đổi thông tin:", error);
    }
  };

  const reLoadData = () => {
    setDataChange((prev) => !prev);
  };

  const removeNewPost = () => {
    setPostText("");
    setTitleText("");
    setIsVisible(false);
  };

  const uploadImageToFirebase = async (selectedFile, fileName) => {
    try {
      // Lấy tham chiếu đến Firebase Storage
      const storageRef = ref(storage);

      // Tên của tệp bạn muốn tải lên và dữ liệu tệp
      // Thay "image.jpg" bằng tên tệp thực tế
      const fileData = selectedFile;
      // Tạo tham chiếu đến tệp trên Firebase Storage
      const imageRef = ref(storageRef, fileName);

      // Lấy tham chiếu đến thư mục bạn muốn tải lên

      // Tạo tham chiếu đến tệp trên Firebase Storage
      uploadBytes(imageRef, fileData)
        .then((snapshot) => {
          console.log("Tải lên thành công:", snapshot);
        })
        .catch((error) => {
          console.error("Lỗi khi tải lên:", error);
        });
    } catch (error) {
      console.error("Lỗi khi tải ảnh lên Firebase Storage:", error);
      throw error; // Ném lỗi để xử lý ở nơi gọi hàm này nếu cần
    }
  };
  const handleAddComment = async (postId, newCommentContent) => {
    try {
      const response = await createComment({
        user: JSON.parse(localStorage.getItem("user"))._id,
        post: postId,
        content: newCommentContent,
        // Other comment properties you may have
      });

      if (response) {
        // await fetchComments(); // Fetch and update comments
        // await fetchPosts();

        const data = {
          comment_id: "",
          //comment_time: new Date().toLocaleTimeString(),
          comment_time: moment().format("DD/MM/YYYY HH:mm"),

          comment_content: newCommentContent,
          commenter_name: JSON.parse(localStorage.getItem("user")).name,
          commenter_img: JSON.parse(localStorage.getItem("user")).image,
        };

        console.log(data);

        const newData = posts.map((post) => {
          return post.post_id === postId
            ? { ...post, comments: [...post.comments, data] }
            : post;
        });

        setPosts(newData);

        // Clear the input field after successfully adding the comment
        setCommentValues("");
      }
    } catch (error) {
      console.error("Error adding comment:", error);
      // Handle the error as needed
    }
  };

  console.log(posts);
  return (
    <Container>
      <PageName>News</PageName>

      {/* //add post */}
      <AddPostButton onClick={handleOpenAdd}>
        <AiOutlinePlus /> Add new{" "}
      </AddPostButton>
      <AddPost isVisible={isVisible}>
        <UserDiv>
          {user.image !== null ? <UserAvatar bgImage={user.image} /> : null}
          <UserName>{user.name}</UserName>

          <RemoveButton>
            <RiDeleteBin5Line onClick={() => handleRemoveAddNews} />
          </RemoveButton>
        </UserDiv>
        <Content style={{ background: "white" }}>
          <InputStatus
            placeholder="Title?"
            value={titleText}
            onChange={handleSetTitleText}
          />
          <InputStatus
            placeholder="What's on your mind?"
            value={postText}
            onChange={handleSetPostText}
          />
          <ImageDiv bgImage={imageShowInPost}>
            <AddButton onClick={handleRemoveImage}>x</AddButton>
          </ImageDiv>
        </Content>
        <ButtonGroup>
          <AddButton onClick={handleAddPostImage}>Add Image</AddButton>
          <AddButton onClick={handleCreatePost}>Add to news</AddButton>
        </ButtonGroup>
      </AddPost>

      {posts.map((item, index) => (
        <NewsItem
          style={{ background: "white", display: "flex" }}
          key={item.post_id}
        >
          <Inform style={{ flex: "60%" }}>
            {/* post  */}
            <User
              style={{
                width: "100%",
                display: "flex",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  direction: "row",
                  width: "100%",
                  flexGrow: 1,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexGrow: 1,
                    justifyContent: "flex-start",
                  }}
                >
                  {/* avatar + name  */}
                  {item.author_img && item.author_img.trim() !== "" ? (
                    <UserAvatar
                      bgImage={item.author_img}
                      alt={item.author_name}
                      style={{
                        textWrap: "nowrap",
                        margin: 0,
                      }}
                    />
                  ) : null}
                  <UserName>{item.author_name}</UserName>
                  <Time>{item.post_time}</Time>
                </div>
                <RemoveButton
                  onClick={() => handleRemoveNews(item.author_id, item.post_id)}
                  style={{
                    marginRight: "16px",
                  }}
                >
                  <RiDeleteBin5Line />
                </RemoveButton>
              </div>
            </User>
            <Titles>{item.post_title}</Titles>
            <Description>{item.post_content}</Description>
            {item.post_image && item.post_image.trim() !== "" ? (
              <Img bgImage={item.post_image} />
            ) : null}
          </Inform>

          <AllComments
            style={{ flex: "40%", marginRight: "20px", padding: "10px" }}
          >
            <Comments>
              {/* other comment  */}
              {item.comments.map((comment, index) => (
                <CommentDiv key={index}>
                  {comment.commenter_img &&
                  comment.commenter_img.trim() != "" ? (
                    <AvaCmt key={user._id}>
                      <UserAvatar
                        bgImage={comment.commenter_img}
                        style={{
                          width: "24px",
                          height: "24px",
                        }}
                      />
                    </AvaCmt>
                  ) : null}

                  <Comment>
                    {/* name + content */}
                    <CommentTime>
                      <UserName
                        style={{
                          fontSize: "14px",
                        }}
                      >
                        {comment.commenter_name}
                      </UserName>
                      <Time
                        style={{
                          fontSize: "14px",
                        }}
                      >
                        {comment.comment_time}
                      </Time>
                      <RemoveButton
                        onClick={() =>
                          handleRemoveComment(
                            item.author_id,
                            comment.commenter_id,
                            comment.comment_id
                          )
                        }
                      >
                        <RiDeleteBin5Line />
                      </RemoveButton>
                    </CommentTime>
                    <CommentContent
                      style={{
                        fontSize: "14px",
                      }}
                    >
                      {comment.comment_content}
                    </CommentContent>
                  </Comment>
                </CommentDiv>
              ))}
            </Comments>

            <NewComment>
              {/* my cmt   */}
              {user.image && user.image.trim() !== "" ? (
                <AvaCmt key={user._id}>
                  <UserAvatar bgImage={user.image} />
                </AvaCmt>
              ) : null}
              {/* change to my avatar */}
              <Cmt>
                <BoxComment
                  placeholder="Comment...."
                  value={commentValues[index] || ""}
                  onChange={(event) => handleCommentChange(event, index)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" && !event.shiftKey) {
                      // Lưu chuỗi xuống dòng và gọi hàm xử lý khi không có "Shift" được nhấn
                      handleAddComment(item.post_id, commentValues[index]);
                    }
                  }}
                />
                {/* input there */}
                <SendIcon
                  onClick={() =>
                    handleAddComment(item.post_id, commentValues[index])
                  }
                />
                {/* Assuming postId is the ID of the post you are commenting on */}
              </Cmt>
            </NewComment>
          </AllComments>
        </NewsItem>
      ))}
    </Container>
  );
}

export default News;
