import api from './index';

export const getVideos = async () => {
  try {
    const response = await api.get('/courses/getVideos');
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};