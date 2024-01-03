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
} from "../../API/postsApi";
import { getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase/firebase";
import { ref } from "firebase/storage";

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
  const [comments, setComments] = useState([]);

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
  const handleRemoveNews = () => {
    //gọi hàm xóa tin, kiểm tra quyền của user, nếu user không có quyền xóa thì trả biến có quyền  hay không
    var enabled = false;
    if (enabled == false) {
      alert("You cannot delete this news!");
    } else if (enabled == true) {
      Swal.fire({
        title: "Do you want to remove the news?",
        showCancelButton: true,
        confirmButtonText: "Remove",
      }).then((result) => {
        if (result.isConfirmed) {
          //chỗ này gọi hàm xóa
          Swal.fire("Remove", "", "success");
        }
      });
    }
  };
  const handleRemoveComment = () => {
    //gọi hàm xóa comment, kiểm tra quyền của user, nếu user không có quyền xóa thì trả biến có quyền  hay không
    var enabled = false;
    if (enabled == false) {
      alert("You cannot delete this comment!");
    } else if (enabled == true) {
      Swal.fire({
        title: "Do you want to remove the news?",
        showCancelButton: true,
        confirmButtonText: "Remove",
      }).then((result) => {
        if (result.isConfirmed) {
          //chỗ này gọi hàm xóa
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
        await fetchComments(); // Fetch and update comments

        // Clear the input field after successfully adding the comment
        setCommentValues((prevValues) => {
          const updatedValues = [...prevValues];
          updatedValues[prevValues.length] = "";
          return updatedValues;
        });
      }
    } catch (error) {
      console.error("Error adding comment:", error);
      // Handle the error as needed
    }
  };
  const fetchComments = async () => {
    try {
      const commentsData = await getCommentsData();
      setComments(commentsData); // Update the state with the new comments
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };
  return (
    <Container>
      <PageName>News</PageName>

      {/* //add post */}
      <AddPostButton onClick={handleOpenAdd}>
        <AiOutlinePlus /> Add new item{" "}
      </AddPostButton>
      <AddPost isVisible={isVisible}>
        <UserDiv>
          {user.image !== null ? <UserAvatar bgImage={user.image} /> : null}
          <UserName>{user.name}</UserName>

          <RemoveButton>
            <RiDeleteBin5Line onClick={handleRemoveAddNews} />
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
        <NewsItem style={{ background: "white" }} key={item.post_id}>
          <Inform>
            {/* post  */}
            <User>
              {/* avatar + name  */}
              {item.author_img && item.author_img.trim() !== "" ? (
                <UserAvatar bgImage={item.author_img} alt={item.author_name} />
              ) : null}
              <UserName>{item.author_name}</UserName>
              <Time>{item.post_time}</Time>
              <RemoveButton onClick={handleRemoveNews}>
                <RiDeleteBin5Line />
              </RemoveButton>
            </User>
            <Titles>{item.post_title}</Titles>
            <Description>{item.post_content}</Description>
            {item.post_image && item.post_image.trim() !== "" ? (
              <Img bgImage={item.post_image} />
            ) : null}
          </Inform>

          <AllComments>
            <Comments>
              {" "}
              {/* other comment  */}
              {item.comments.map((comment) => (
                <CommentDiv key={comment.comment_id}>
                  {comment.commenter_img &&
                  comment.commenter_img.trim() != "" ? (
                    <AvaCmt>
                      <UserAvatar bgImage={comment.commenter_img} />
                    </AvaCmt>
                  ) : null}

                  <Comment>
                    {/* name + content */}
                    <CommentTime>
                      <UserName>{comment.commenter_name}</UserName>
                      <Time>{comment.comment_time}</Time>
                      <RemoveButton onClick={handleRemoveComment}>
                        <RiDeleteBin5Line />
                      </RemoveButton>
                    </CommentTime>
                    <CommentContent>{comment.comment_content}</CommentContent>
                  </Comment>
                </CommentDiv>
              ))}
            </Comments>

            <NewComment>
              {/* my cmt   */}
              {user.image && user.image.trim() !== "" ? (
                <AvaCmt>
                  <UserAvatar bgImage={user.image} />
                </AvaCmt>
              ) : null}
              {/* change to my avatar */}
              <Cmt>
                <BoxComment
                  placeholder="Comment...."
                  value={commentValues[index] || ""}
                  onChange={(event) => handleCommentChange(event, index)}
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
