import api from './index';

export const verifyChangePass = async (userNewPass) => {
  try {
    const response = await api.post('/users/changePass', userNewPass);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
