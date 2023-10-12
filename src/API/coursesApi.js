import api from './index';

export const getCoursesData = async (courseType) => {
  try {
    // const response = await api.get('/courses/getCourses', {
    //   params: {
    //     courseName: courseType
    //   }
    // });
    const response = await api.get('/courses/getCourses');
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
export const getCoursesReading = async () => {
  try {
    const response = await api.get('/courses/getCourses'); //sửa lại đường link theo code BE
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
export const getCoursesForCoupleGame = async () => {
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
export const getHistoryCourses = async () => {
  const currentUser = JSON.parse(localStorage.getItem('user'));
  const user = currentUser._id;

  console.log(user);
  try {
    const response = await api.get('/users/getHistoryCourses', { params: { user } });
    console.log(response.data);
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


export const getCoursesVocab = async () => {
  try {
    const response = await api.get('/courses/getCourses');
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};