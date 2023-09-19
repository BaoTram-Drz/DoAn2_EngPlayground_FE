import api from './index';

export const getCourseDetail = async (courseId) => {
  try {
    const response = await api.post(`/courses/${courseId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const updateCourseDetail = async (courseId, courseData) => {
  try {
    const response = await api.put(`/courses/${courseId}`, courseData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};