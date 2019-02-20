import React from 'react';
import styled, {withTheme} from 'styled-components';
import Link from './Link';
import {connect} from 'react-redux';
import {getProjects} from '../actions';
import {withRouter, matchPath} from 'react-router-dom';
import MobileDropdown from './MobileDropdown';


const Nav = styled.nav`
    height: 90px;
    padding: 20px 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    background-color: ${props => props.theme.gray};
    z-index: 99999;
    @media screen and (max-width: 768px) {
      padding: 20px 16px
    }
`;
const Logo = styled.img`
  vertical-align: middle;
  width: auto;
  height: 50px;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  @media screen and (max-width: 768px) {
    height: 35px;
  }
`;

const Menu = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  margin-left: 30px;
  margin-right: 12px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuItem = withRouter(styled.li`
  background-color: ${props => {
    const match = matchPath(props.location.pathname, {
      path: props.path,
      exact: props.exact
    });
    return match ? props.theme.secondary : props.theme.gray ;
  }};
  border-right: 1px solid black;
  padding: 0px 12px;
  font-size: 16px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  text-align: center;
  flex: 1;
  position: relative;
  padding-top: 4px;
  &::before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 0%;
    background-color: ${props => props.theme.secondary};
    transition: all 0.25s ease-in-out;
    z-index: -1
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
`);

const Hamburger = styled.div`
  margin-right: 16px;
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  background-image: url(${require('../assets/images/bars-solid.svg')});
  background-repeat: no-repeat;
  background-position: cover;
  @media (min-width: 769px) {
    display: none;
  }
`;

const Dropdown = styled.div`
 position: absolute;
 display: none;
 top: 100%;
 width: 100%;
 background-color: ${props => props.theme.white};
 left: 50%;
 transform: translateX(-50%);
`;

const DropdownItem = styled.div`
  font-size: 0.75em;
  position: relative;
  padding: 8px 0;
  &::after {
    content: ' ';
    position: absolute;
    bottom: 2px;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    border-bottom: ${props => props.noBorder ? 'none' : '1px solid black'};
  }
  &:hover {
    background-color: #f0f0f0;
  }
`;

class Navbar extends React.Component {
  componentDidMount() {
    this.props.getProjects();
  }
  render () {
    return (
      <>
        <Nav {...this.props}>
          <Link to='/'>
            <Logo src={require('../assets/images/lagar_logo_horizontal.svg')} />
          </Link>
          <Menu>
            <MenuItem exact
              path='/projetos/:type?'
            >
              projetos
              <Dropdown>
                <Link to='/projetos'>
                  <DropdownItem>
                Todos
                  </DropdownItem>
                </Link>
                <Link to='/projetos/comercial'>
                  <DropdownItem>
                Comercial
                  </DropdownItem>
                </Link>
                <Link to='/projetos/residencial'>
                  <DropdownItem noBorder>
                Residencial
                  </DropdownItem>
                </Link>
              </Dropdown>
            </MenuItem>
            <MenuItem exact
              path='/escritorio'
            >
              <Link to='/escritorio'>
              escritório
              </Link>
            </MenuItem>
            <MenuItem exact
              path='/midia'
            >
              <Link to='/midia'>
              mídia
              </Link>
            </MenuItem>
            <MenuItem exact
              path='/contato'
            >
              <Link to='/contato'>
              contato
              </Link>
            </MenuItem>
          </Menu>
          <Hamburger size={32} />
        </Nav>
        <MobileDropdown open />
      </>
    );
  }
}

const mapDispatchToProps = {
  getProjects
};

const mapStateToProps = ({projectReducer}) => ({...projectReducer});

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(Navbar));