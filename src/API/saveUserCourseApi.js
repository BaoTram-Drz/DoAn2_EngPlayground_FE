import api from './index';

export const saveUser_Course = async (user_course) => {
    console.log(user_course);
  try {
    const response = await api.post('/users/saveUserCourse', user_course);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};