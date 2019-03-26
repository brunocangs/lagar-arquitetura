import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Input } from '../../components';
/**
 * {
 *   'fieldName': 'fieldType',
 *   'fieldNam3': 'fieldType'
 * }
 * fieldType = 'text' | 'images' | 'area'
 * @param {Object} form Form object
 */
const startState = (form, values) => {
  const keys = Object.keys(form);
  const initialState = keys.reduce((prev, curr) => {
    const type = form[curr];
    switch (type) {
    case 'text':
      prev[curr] = values[curr] || '';
      break;
    case 'images':
      prev[curr] = values[curr] || [];
      break;
    case 'area':
      prev[curr] = values[curr] || '';
      break;
    default:
      prev[curr] = values[curr] || '';
    }
    return prev;
  }, {});
  let [state, setState] = useState(initialState);
  const alterState = ({ target: { id, value } }) => {
    setState({
      ...state,
      [id]: value
    });
  };
  return [state, alterState];

};

const FormBuilder = (props) => {
  const { form, labels, onStateChange, initialState } = props;
  let [formState, setFormState] = startState(form, initialState);
  useEffect(() => {
    onStateChange(formState);
  }, [formState]);
  const resolveField = (fieldName, fieldType, index) => {
    switch (fieldType) {
    case 'text':
      return (
        <Input
          id={fieldName}
          key={index}
          label={labels[fieldName]}
          onChange={setFormState}
          value={formState[fieldName]}
        />
      );
    default:
      return (
        <Input
          id={fieldName}
          key={index}
          label={labels[fieldName]}
          onChange={setFormState}
          value={formState[fieldName]}
        />
      );
    }
  };
  const fields = Object.keys(form);
  return fields.map((field, i) => {
    return resolveField(field, form[field], i);
  });
};

export default FormBuilder;