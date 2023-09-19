import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const DataBubble = ({ data, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const springProps = useSpring({
    to: { opacity: 1, transform: 'translateY(0px)' },
    from: { opacity: 0, transform: 'translateY(-100px)' },
    config: { tension: 100, friction: 10 },
  });

  const handleClick = () => {
    setIsClicked(true);
    onClick(data);
  };

  return (
    <animated.div style={springProps}>
      <div className={`data-bubble ${isClicked ? 'clicked' : ''}`} onClick={handleClick}>
        {data}
      </div>
    </animated.div>
  );
};

export default DataBubble;
