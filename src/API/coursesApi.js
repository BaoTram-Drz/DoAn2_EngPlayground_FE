import api from './index';

export const getCoursesVocab = async () => {
  try {
    const response = await api.get('/courses/getCourses');
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getContinueCourses = async () => {
  const currentUser = JSON.parse(localStorage.getItem('user'));
  const user = currentUser._id;

  console.log(user);
  try {
    const response = await api.get('/users/getContinueCourses', { params: { user } });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};


export const getCoursesListen = async () => {
  try {
    const response = await api.get('/courses/getCourses');
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getCoursesUser = async () => {
  try {
    const response = await api.get('/courses/getCourses');
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const createCourse = async (courseData) => {
  try {
    const response = await api.post('/courses', courseData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};