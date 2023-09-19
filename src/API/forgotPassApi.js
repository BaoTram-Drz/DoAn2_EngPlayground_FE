import api from './index';

export const getCode = async (userEmail) => {
  try {
    const response = await api.post('/users/getCode', userEmail);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const sendCode = async (userCode) => {
    try {
      const response = await api.post('/users/sendCode',userCode );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  };