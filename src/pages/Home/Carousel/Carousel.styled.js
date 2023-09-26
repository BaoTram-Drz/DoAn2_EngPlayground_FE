
import 'react-slideshow-image/dist/styles.css';
import styled from 'styled-components';

export const SlideshowContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 6%;
  height: 600px;
  gap: 10px;

  @media (max-width: 768px) {
    gap: 5px;
  }
  @media (max-width: 480px) {
    gap: 3px;
  }
`;
export const Slideshow = styled.div`
  min-width: 15%;
  position: relative;
  flex: 1;
  border-radius: 1rem;
  background-color: #1697a6;
  background-image: url(${(props) => props.bgImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto 99%;
  transition: all 0.8s cubic-bezier(.25,.4,.45,1);

  &.active {
    transition: 1.8s;
    flex: 5;
    &::before {
      background-color: rgba(128, 128, 128, 0);
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(175, 175, 175, 0.3); /* Màu xám gần trong suốt */
    z-index: 1;
    border-radius: 1rem;
  }

  > div {
    position: relative;
    z-index: 2;
    border-radius: 0.5rem;
  }

  @media (max-width: 1300px) {
    height: 500px;
  }
  @media (max-width: 1200px) {
    height: 400px;
  }
  @media (max-width: 912px) {
    height: 350px;
  }
  @media (max-width: 768px) {
    height: 300px;
  }
  @media (max-width: 540px) {
    height: 250px;
  }
  @media (max-width: 480px) {
    height: 200px;
    border-radius: 0.5rem;
    &::before {      
      border-radius: 0.5rem;
    }
  }
  @media (max-width: 300px) {
    height: 150px;    
  }
`;