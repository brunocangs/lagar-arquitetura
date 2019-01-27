import React from 'react';
import styled, {withTheme} from 'styled-components';
import Link from './Link';
import {connect} from 'react-redux';
import {getProjects} from '../actions';

const Nav = styled.nav`
    height: 80px;
    padding: 20px 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    background-color: ${props => props.theme.gray};
`;
const Logo = styled.img`
  width: auto;
  height: 30px;
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
  flex: 1;
  margin-right: 20px;
  @media (max-width: 900px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  border-right: 1px solid black;
  padding: 6px 12px;
  font-size: 26px;
  text-transform: uppercase;
  text-align: center;
  flex: 1;
  &:last-child {
      border-right: none;
  }
  &:hover {
    background-color: ${props => props.theme.secondary}
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
            <Link to='/projetos'>
              projetos
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to='/sobre'>
              sobre
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to='/depoimentos'>
              depoimentos
            </Link>
          </MenuItem><MenuItem>
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