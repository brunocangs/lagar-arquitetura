import React from 'react';
import styled from 'styled-components';
import { Link } from '.';

const Wrapper = styled.div`
    padding-top: 108px;
    text-align: center;
    font-size: 24px;
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
const NotFound = () => (
  <Wrapper>
    Esta página não existe
    <br />
    <br />
    Clique <LinkToMain to='/'>aqui</LinkToMain> para voltar para a página inicial
  </Wrapper>
);
export default NotFound;