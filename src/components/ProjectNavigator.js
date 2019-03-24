import React from 'react';
import styled from 'styled-components';
import { matchPath, withRouter } from 'react-router-dom';
import { Link } from '.';

const Wrapper = styled.nav`
  background-color: #f3f3f3;
  padding: 8px;
  position: sticky;
  z-index: 4;
  top: 90px;
  box-shadow: 0px 7px 5px -5px rgba(0, 0, 0, 0.2) inset;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuItemHelper = styled.li`
  background-color: ${props => {
    const match = matchPath(props.location.pathname, {
      path: props.path,
      exact: props.exact
    });
    return match ? props.theme.secondary : props.theme.gray;
  }};
  border-right: 1px solid black;
  padding: 0px 12px;
  font-size: 14px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  text-align: center;
  position: relative;
  padding-top: 4px;
  &::before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 0%;
    background-color: ${props => props.theme.secondary};
    transition: all 0.25s ease-in-out;
    z-index: -1;
  }
  &:hover {
    background-color: ${props => props.theme.secondary};
    > * {
      display: block;
    }
  }
  &:last-child {
    border-right: none;
  }
  transition: all 0.225s ease-in-out;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const MenuItem = withRouter(MenuItemHelper);

const ProjectNavigator = () => {
  return (
    <Wrapper>
      <MenuItem
        exact
        path="/projetos"
      >
        <Link to="/projetos">Todos</Link>
      </MenuItem>
      <MenuItem
        exact
        path="/projetos/comercial"
      >
        <Link to="/projetos/comercial">Comercial</Link>
      </MenuItem>
      <MenuItem
        exact
        path="/projetos/residencial"
      >
        <Link to="/projetos/residencial">residencial</Link>
      </MenuItem>
    </Wrapper>
  );
};

export default ProjectNavigator;
