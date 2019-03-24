import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
`;
const FirstTimeBanner = () => {
  const [show, setShow] = useState(true);
  const onLoad = () => {
    setTimeout(() => {
      setShow(false);
    }, 6834);
  };
  if (process.env.NODE_ENV === 'development') return null;
  if (!show) return null;
  return (
    <Wrapper>
      <img
        onLoad={onLoad}
        src={require('../assets/images/loading.gif')}
      />
    </Wrapper>
  );
};

export default FirstTimeBanner;
