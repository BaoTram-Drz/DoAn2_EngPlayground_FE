import api from './index';

export const loginUser = async (User) => {
  try {
    const response = await api.post('/users/login', User);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};