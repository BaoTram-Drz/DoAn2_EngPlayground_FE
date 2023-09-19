import api from './index';
import { getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase/firebase';
import { ref } from 'firebase/storage'
export const getGamesData = async (courseName) => {
  try {
    courseName = localStorage.getItem('productName');
    const response = await api.get('/games/getGamesData', {
      params: {
        courseName: courseName
      }
    } );
    console.log(courseName);
    const topic = localStorage.getItem('productName').toLowerCase();
    const path = `${topic}/${response.data[1].image}`;
    const downloadURL = await getDownloadURL(ref(storage, path));
    response.data[1].image = downloadURL;
    
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const saveLearn = async (learnData) => {
  try {
    const response = await api.post('/learn', learnData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getVideo = async (courseName) => {
  try {
    const response = await api.post('/learn/getVideo', courseName);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};