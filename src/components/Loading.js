import React from 'react';
import styled from 'styled-components';
const LoadingImg = styled.img`
  max-width: 85%;
  justify-self: center;
  align-self: center;
`;
const LoadingWrapper = styled.div`
  min-height: calc(100vh - 90px);
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Loading = () => (
  <LoadingWrapper>
    <LoadingImg src={require('../assets/images/CARREGANDO.gif')} />
  </LoadingWrapper>
);
export default Loading;
