import styled from 'styled-components';

const Button = styled.button`
  font-size: 18px;
  padding: 8px 12px;
  background-color: ${props => props.theme.secondary};
  border-radius: 6px;
  color: white;
  margin: 4px 0;
  border: 0;
  cursor: pointer;
`;

export default Button;
