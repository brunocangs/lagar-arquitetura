import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Input = styled.input`
    padding: 0;
    margin: 0;
    margin-bottom: 4px;
    margin-right: 6px;
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: row-reverse;
  justify-content: flex-end;
`;

const Label = styled.label``;

const Checkbox = props => {
  const [checked, setChecked] = useState(props.value);
  useEffect(() => {
    props.onChange({ target: { id: props.id, value: checked } });
  }, [checked]);
  const { style, label, ...inputProps } = props;
  return (
    <Wrapper style={style || {}}>
      <Label htmlFor={inputProps.id}>{label}</Label>
      <Input
        {...inputProps}
        checked={checked}
        onClick={(e) => {
          e.stopPropagation();
          setChecked(!checked);
        }}
      />
    </Wrapper>
  );
};

export default Checkbox;
