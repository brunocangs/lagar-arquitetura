import React, { useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 6;
  padding: 20px 0;
`;

const Content = styled.div`
  padding: 16px;
  border-radius: 4px;
  background-color: ${props => (props.transparent ? 'transparent' : '#f0f0f0')};
  flex: 1;
  position: relative;
  max-width: 85%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

const Close = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  height: 30px;
  width: 30px;
  cursor: pointer;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
`;

const Modal = props => {
  const { open, onRequestClose, children, transparent } = props;
  useEffect(() => {
    if (open) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [open]);
  if (!open) return null;
  return (
    <Wrapper onClick={onRequestClose}>
      <Content transparent={transparent}>
        <Close onClick={onRequestClose}>x</Close>
        {children}
      </Content>
    </Wrapper>
  );
};

export default Modal;
