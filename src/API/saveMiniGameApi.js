import api from './index';

export const saveScore = async (clickCount, productName) => {
    const MiniGame = {
        count: clickCount,
        productName: productName,
        user: localStorage.getItem('user')
    }
    try {
        const response = await api.post('/games/saveMiniGame', MiniGame);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
};