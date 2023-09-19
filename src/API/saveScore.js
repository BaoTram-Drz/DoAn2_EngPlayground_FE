import api from './index';

export const saveScore = async (saveScore) => {
  try {
    const response = await api.post('/games/updateLeague', saveScore);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};