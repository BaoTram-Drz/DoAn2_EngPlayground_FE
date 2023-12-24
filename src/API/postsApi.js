import api from './index';

export const getPostData= async () => {
  try {
    const response = await api.get('/blog/posts');
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
export const createPost= async (postData) => {
  try {
    const response = await api.post('/blog/posts', postData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}
