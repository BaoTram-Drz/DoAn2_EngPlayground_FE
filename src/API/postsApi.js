import api from "./index";

export const getPostData = async () => {
  try {
    const response = await api.get("/blog/posts");
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
export const createPost = async (postData) => {
  try {
    const response = await api.post("/blog/posts", postData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
export const addCommentToPost = async (postData) => {
  try {
    console.log("Im here");
    const response = await api.post("/blog/comments", postData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getCommentsData = async () => {
  try {
    const response = await api.get("/blog/comments");
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
export const deletePost = async (id) => {
  try {
    const response = await api.delete(`/blog/posts/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const deleteComment = async (id) => {
  try {
    const response = await api.delete(`/blog/comments/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
