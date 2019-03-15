import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
const Wrapper = styled.div`
    padding-top: 64px;
    text-align: center;
    width: 90%;
    margin: auto;
    flex: 1;
    min-height: calc(100vh - 90px);
`;

const LinkToMain = styled(Link)`
    color: ${props => props.theme.secondary};
    &:hover {
        text-decoration: underline;
    }
`;

const Auth = (props) => {
  return (
    <Wrapper>
        hi
    </Wrapper>
  );
};

export default Auth;