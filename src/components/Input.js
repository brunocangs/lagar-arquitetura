import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    padding: 12px 8px; 
    border-radius: 6px;
    border: 1px solid;
    border-color:  #ccc;
    position: relative;
    font-size: 18px;
    :focus, :active {
      border-color: ${props => props.theme.secondary}
    }
    transition: border-color 0.2s ease-in;
    outline-width: 0;
    width: 100%;
`;
const Wrapper = styled.div`
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Label = styled.label`
    font-size: 0.9em;
`;

const TextInput = (props) => {
  const {label, ...inputProps} = props;
  return (
    <Wrapper>
      <Label htmlFor={inputProps.id}>{label}</Label>
      <Input {...inputProps} />
    </Wrapper>
  );
};

export default TextInput;