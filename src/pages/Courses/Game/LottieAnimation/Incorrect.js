import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import lottie from 'lottie-web';
import animationData from './animation_lk833r9u.json'; // Thay đổi đường dẫn tới tệp JSON

const Container = styled.div`
  width: 90%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 10%;
  z-index: 0;
`;

const Incorrect = () => {
  const animationContainer = useRef(null);

  useEffect(() => {
    const animationInstance = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: animationData,
    });

    // Dừng animation sau 2 giây và ẩn Container
    const timeout = setTimeout(() => {
      animationInstance.stop();
      animationContainer.current.style.display = 'none';
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return <Container ref={animationContainer}></Container>;
};

export default Incorrect;
