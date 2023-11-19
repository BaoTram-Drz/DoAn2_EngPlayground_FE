import React, { useState, useEffect } from "react";
import data from "./data";
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
  Description,
  Img,
  CommentDiv,
  Comment,
  CommentTime,
  CommentContent,
  NewComment,
  BoxComment,
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

import { getPostData } from "../../API/postsApi";
import { getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase/firebase'
import { ref } from 'firebase/storage'
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
  const [imageUpload, setImageUpload] = useState(null);
  const [postText, setPostText] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await getPostData();
        setPosts(posts);
        for (let i = 0; i < posts.length; i++) {
          const path = 'users/' + posts[i].author_img;
          const downloadURL = await getDownloadURL(ref(storage, path));
          posts[i].author_img = downloadURL;
        }
        console.log(posts);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, []);

  const currentUser = JSON.parse(localStorage.getItem("user"));
  // const user = {
  //   name: currentUser.name,
  //   image: currentUser.image,
  // };
  const user = {
    name: "hiếu",
    image:
      "https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6e19.png",
  };
  const handleSetPostText = (e) => {
    setPostText((prev) => e.target.value);
  };

  const handleAddPostImage = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.addEventListener("change", () => {
      const selectedFile = fileInput.files[0];
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImageUpload(reader.result);
      });
      reader.readAsDataURL(selectedFile);
    });
    fileInput.click();
  };

  const handleOpenAdd = () => {
    setIsVisible((prev) => true);
  };
  const handleRemoveAddNews = () => {
    setIsVisible((prev) => false);
    setImageUpload((prev) => null);
    setPostText((prev) => "");
  };
  const handleRemoveImage = () => {
    setImageUpload((prev) => null);
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
  // Hàm tạo bài viết
  const handleCreatePost = () => {
    const post = {
      text: postText,
      image: imageUpload,
      date: new Date(),
    };
    console.log(post);
    // Gọi API tạo bài viết
    // createPostAPI(post)
    //   .then(() => {
    //     // Reset state
    //     setText('');
    //     setImage(null);
    //   })
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
          <RemoveButton>
            <RiDeleteBin5Line onClick={handleRemoveAddNews} />
          </RemoveButton>
        </UserDiv>
        <Content>
          <InputStatus
            placeholder="What's on your mind?"
            value={postText}
            onChange={handleSetPostText}
          />
          <ImageDiv bgImage={imageUpload}>
            <AddButton onClick={handleRemoveImage}>x</AddButton>
          </ImageDiv>
        </Content>
        <ButtonGroup>
          <AddButton onClick={handleAddPostImage}>Add Image</AddButton>
          <AddButton onClick={handleCreatePost}>Add to news</AddButton>
        </ButtonGroup>
      </AddPost>

      {posts.map((item, index) => (
        <NewsItem key={item.post_id}>
          <Inform>
            {" "}
            {/* post  */}
            <User>
              {" "}
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
            <Description>{item.post_content}</Description>
            {item.post_image && item.post_image.trim() !== "" ? (
              <Img bgImage={item.post_image} />
            ) : null}{" "}
            {/* if have img  */}
          </Inform>

          <AllComments>
            <Comments>
              {" "}
              {/* other comment  */}
              {item.comments.map((comment) => (
                <CommentDiv key={comment.comment_id}>
                  {comment.commenter_img &&
                  comment.commenter_img.trim() != "" ? (
                    <UserAvatar bgImage={comment.commenter_img} />
                  ) : null}

                  <Comment>
                    {" "}
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
              {" "}
              {/* my cmt   */}
              {user.image && user.image.trim() !== "" ? (
                <UserAvatar bgImage={user.image} />
              ) : null}{" "}
              {/* change to my avatar */}
              <BoxComment
                placeholder="Comment...."
                value={commentValues[index] || ""}
                onChange={(event) => handleCommentChange(event, index)}
              />{" "}
              {/* input there */}
            </NewComment>
          </AllComments>
        </NewsItem>
      ))}
    </Container>
  );
}

export default News;
