import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Input, Button } from '../../components';
import firebase from '../../firebase';
import { useForm } from '../../hooks';
import fbase from 'firebase/app';
import 'firebase/auth';

const Wrapper = styled.div`
    padding-top: 64px;
    text-align: center;
    width: 90%;
    margin: auto;
    min-height: calc(100vh - 90px);
    @media screen and (max-width: 768px){
      padding-top: 32px;
    }
`;

const Title = styled.h2`
  font-weight: normal;
`;

const Form = styled.form`
  max-width: 400px;
  margin: auto;
`;

const Error = styled.p`
  color: red;
`;

const Auth = () => {

  const [email, setEmail] = useForm('');
  const [password, setPassword] = useForm('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log(firebase.auth().currentUser);
      // window.location.reload();
    } catch (e) {
      console.log(e);
      setLoading(false);
      setError('Credenciais inválidas. Tente novamente');
    }
  };

  return loading
    ? <div>loading...</div>
    : (
      <Wrapper>
        <Title>Verifique sua identidade</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            id='email'
            label={'Email'}
            onChange={setEmail}
            type='email'
            value={email}
          />
          <br />
          <Input
            id='password'
            label='Senha'
            onChange={setPassword}
            style={{ marginBottom: 18 }}
            type='password'
            value={password}
          />
          {error && <Error>{error}</Error>}
          <Button
            onClick={handleSubmit}
            style={{ marginBottom: 18 }}
          >
            Log in
          </Button>
        </Form>
      </Wrapper>
    )
  ;
};

export default Auth;