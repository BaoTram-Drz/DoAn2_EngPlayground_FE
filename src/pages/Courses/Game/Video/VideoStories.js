import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getDownloadURL } from 'firebase/storage';
import { ref } from 'firebase/storage'
import { storage } from '../../../../firebase/firebase'
import {getVideos} from '../../../../API/videoApi';
import {BackHome, BigText, VideoContainer, Video} from './VideoStories.styled'

const ListenStory = () => {
  const [productName, setProductName] = useState('Product A');
  const [video, setVideo] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.productname) {
      setProductName(location.state.productname);
    } else {
      const storedProductName = localStorage.getItem('productName');
      if (storedProductName) {
        setProductName(storedProductName);
      }
    }
  }, [location.state]);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const videos = await getVideos();
        const linkVideo = videos.find((video) => video.name === productName);
        
        if (linkVideo) {
          const path = 'video/' + linkVideo.link;
          const downloadURL = await getDownloadURL(ref(storage, path));
          console.log(downloadURL);
          setVideo(downloadURL);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchVideo();
  }, [productName]);

  return (
    <>
      <Link to="/cardList"><BackHome /></Link>
      <BigText>Listen Story - {productName}</BigText>
      <VideoContainer>
        {video && <Video src={video} autoPlay controls />}
      </VideoContainer>
    </>
  );
};

export default ListenStory;