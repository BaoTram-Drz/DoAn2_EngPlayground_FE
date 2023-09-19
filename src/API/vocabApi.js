import api from './index';

export const getVocab = async (topicCourse) => {
  try {
    const response = await api.post('/vocabulary/getVocab', topicCourse);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const saveLearn = async (learnData) => {
  try {
    const response = await api.post('/learn', learnData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};