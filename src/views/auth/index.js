import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { Input } from '../../components';
const Wrapper = styled.div`
    padding-top: 64px;
    text-align: center;
    width: 90%;
    margin: auto;
    min-height: calc(100vh - 90px);
`;

const LinkToMain = styled(Link)`
    color: ${props => props.theme.secondary};
    &:hover {
        text-decoration: underline;
    }
`;

const Title = styled.h2`
  font-weight: normal;
`;

const Form = styled.form`
  max-width: 400px;
  margin: auto;
`;

const Auth = (props) => {
  return (
    <Wrapper>
      <Title>Verifique sua identidade</Title>
      <Form>
        <Input
          id='email'
          label={'Email'}
          type='text'
        />
      </Form>
    </Wrapper>
  );
};

export default Auth;