import api from './index';

export const saveNewUser = async (newUser) => {
  try {
    const response = await api.post('/users/register', newUser);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const saveNewUserWithGG = async () => {
    try {
      const response = await api.post('/users/testVoice');
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  };