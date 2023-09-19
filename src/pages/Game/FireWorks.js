import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const FireworksContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;

const Particle = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  animation: ${({ duration }) => sparkleAnimation(duration)} ${({ duration }) => duration}s linear;
  animation-fill-mode: forwards;
  transform-origin: center center; // Đặt điểm bắt đầu của animation ở giữa pháo hoa
`;

const sparkleAnimation = (duration) => keyframes`
  0% {
    opacity: 1;
    transform: translate(0, 0) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(${Math.random() * window.innerWidth / 2}px, ${Math.random() * window.innerHeight / 2}px) scale(0);
  }
`;

const Fireworks = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const colors = ['#ff0000', '#ff00ff', '#ffff00']; // Mảng các màu sắc
    const newParticles = Array.from({ length: 100 }).map(() => ({
      duration: Math.random() * 2.4 + 3, // Thời gian bắn từ 0.6 đến 3 giây
      color: colors[Math.floor(Math.random() * colors.length)], // Chọn một màu ngẫu nhiên từ mảng colors
    }));
    setParticles(newParticles);

    const timer = setTimeout(() => {
      setParticles([]);
    }, 5000); // Sau 5 giây, tắt pháo hoa bằng cách xóa particles

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <FireworksContainer>
      {particles.map((particle, index) => (
        <Particle
          key={index}
          duration={particle.duration}
          style={{
            top: `${Math.random() * window.innerHeight}px`,
            left: `${Math.random() * window.innerWidth}px`,
            backgroundColor: particle.color, // Đặt màu sắc của particle
          }}
        />
      ))}
    </FireworksContainer>
  );
};

export default Fireworks;
