import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  background-color: #fbfbfb;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
  transition: all 0.3s ease-out, display 0.1s 0.3s ease-out;
  opacity: ${props => (props.show ? 1 : 0)};
  pointer-events: ${props => (props.show ? '' : 'none')};
`;

const Gif = styled.img`
  max-width: 85%;
`;

const GrayOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, ${11 / 255});
`;
const FirstTimeBanner = () => {
  const [show, setShow] = useState(true);
  const onLoad = () => {
    setTimeout(() => {
      setShow(false);
    }, 3200);
  };
  if (process.env.NODE_ENV === 'development') return null;
  return (
    <Wrapper show={show}>
      <GrayOverlay />
      <Gif
        onLoad={onLoad}
        src={require('../assets/images/CARREGADO.gif')}
      />
    </Wrapper>
  );
};

export default FirstTimeBanner;
