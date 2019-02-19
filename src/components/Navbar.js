import React from 'react';
import styled, {withTheme} from 'styled-components';
import Link from './Link';
import {connect} from 'react-redux';
import {getProjects} from '../actions';

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
`;
const Logo = styled.img`
  width: auto;
  height: 50px;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
`;

const Menu = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  margin-left: 30px;
  margin-right: 20px;
  @media (max-width: 900px) {
    display: none;
  }
`;

const MenuItem = styled.li`
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
`;

const Hamburger = styled.div`
  margin-right: 16px;
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  background-image: url(${require('../assets/images/bars-solid.svg')});
  @media (min-width: 901px) {
    display: none;
  }
`;

const Dropdown = styled.div`
 position: absolute;
 display: none;
 top: 100%;
 width: 100%;
 background-color: ${props => props.theme.white}
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
      <Nav {...this.props}>
        <Link to='/'>
          <Logo src={require('../assets/images/lagar_logo_horizontal.svg')} />
        </Link>
        <Menu>
          <MenuItem>
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
          <MenuItem>
            <Link to='/escritorio'>
              escritório
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to='/midia'>
              mídia
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to='/contato'>
              contato
            </Link>
          </MenuItem>
        </Menu>
        <Hamburger size={32} />
      </Nav>
    );
  }
}

const mapDispatchToProps = {
  getProjects
};

const mapStateToProps = ({projectReducer}) => ({...projectReducer});

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(Navbar));