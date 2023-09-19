import api from './index';

const getLeague = async () => {
  try {
    const user = JSON.parse(localStorage.getItem('user')).name;
    const response = await api.get('/games/getLeague',  { params: { user }});
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

const getLeagueThisCourse = async () => {
  try {
    const user = JSON.parse(localStorage.getItem('user')).name;
    const productName = localStorage.getItem('productName');
    const response = await api.get('/games/getLeagueThisCourse',{ params: { productName, user } });
    console.log(response.data);
  
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
const getLeagueMeAll = async () => {
  try {
    const user = JSON.parse(localStorage.getItem('user')).name;
    const response = await api.get('/games/getLeagueMeAll',  { params: { user } });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
const getLeagueMeThis =  async () => {
  try {
   
      const productName = localStorage.getItem('productName');
     const  user =  JSON.parse(localStorage.getItem('user')).name;
    const response = await api.get('/games/getLeagueMeThis', { params: { productName, user } });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
export { getLeague, getLeagueThisCourse, getLeagueMeAll, getLeagueMeThis };


