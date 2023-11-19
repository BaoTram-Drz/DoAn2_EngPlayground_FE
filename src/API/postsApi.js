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
