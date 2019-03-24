import React from 'react';
import styled, { withTheme } from 'styled-components';
import Link from './Link';
import { connect } from 'react-redux';
import { getProjects } from '../actions';
import { withRouter, matchPath } from 'react-router-dom';
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
  box-shadow: 0px -1px 4px 2px rgba(0, 0, 0, 0.2);
  z-index: 5;
  @media screen and (max-width: 768px) {
    padding: 20px 16px;
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
  font-size: 16px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  text-align: center;
  flex: 1;
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
`;

const MenuItem = withRouter(MenuItemHelper);

const Hamburger = styled.div`
  margin-right: 8px;
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  background-image: url(${require('../assets/images/bars-solid.svg')});
  background-repeat: no-repeat;
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
    content: " ";
    position: absolute;
    bottom: 2px;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    border-bottom: ${props => (props.noBorder ? 'none' : '1px solid black')};
  }
  &:hover {
    background-color: #f0f0f0;
  }
`;

const FAB = styled.div`
  position: fixed;
  bottom: 16px;
  right: 16px;
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.2);
  border-radius: 100%;
  padding: 14px;
  background-color: ${props => props.theme.secondary};
  display: flex;
  justify-content: center;
  z-index: 4;
  cursor: pointer;
  align-items: center;
  img {
    background-position: center center;
    background-size: contain;
    height: 32px;
    width: 32px;
    filter: invert(1);
  }
  @media screen and (max-width: 768px) {
    padding: 12px;
    img {
      height: 28px;
      width: 28px;
    }
  }
`;

class Navbar extends React.Component {
  state = {
    open: false
  };
  componentDidMount() {
    this.props.getProjects();
  }
  componentWillUnmount() {}
  toggleMenu = () => {
    this.setState(state => ({
      open: !state.open
    }));
  };
  scrollToInfo = e => {
    e.preventDefault();
    e.stopPropagation();
    window.scrollTo(0, document.body.scrollHeight);
  };
  render() {
    return (
      <>
        <FAB onClick={this.scrollToInfo}>
          <img
            alt="Ícone de conversa"
            src={require('../assets/images/comment-solid.svg')}
          />
        </FAB>
        <Nav {...this.props}>
          <Link to="/">
            <Logo
              alt="Logo da empresa Lagar Design e Arquitetura"
              src={require('../assets/images/lagar_logo_horizontal.svg')}
            />
          </Link>
          <Menu>
            <MenuItem
              exact
              path="/projetos/:type?"
            >
              <Link to="/projetos">projetos</Link>
              <Dropdown>
                <Link to="/projetos">
                  <DropdownItem>Todos</DropdownItem>
                </Link>
                <Link to="/projetos/comercial">
                  <DropdownItem>Comercial</DropdownItem>
                </Link>
                <Link to="/projetos/residencial">
                  <DropdownItem noBorder>Residencial</DropdownItem>
                </Link>
              </Dropdown>
            </MenuItem>
            <MenuItem
              exact
              path="/escritorio"
            >
              <Link to="/escritorio">escritório</Link>
            </MenuItem>
            <MenuItem
              exact
              path="/midia"
            >
              <Link to="/midia">mídia</Link>
            </MenuItem>
          </Menu>
          <Hamburger
            onClick={this.toggleMenu}
            size={32}
          />
        </Nav>
        <MobileDropdown
          onClose={this.toggleMenu}
          open={this.state.open}
        />
      </>
    );
  }
}

const mapDispatchToProps = {
  getProjects
};

const mapStateToProps = ({ projectReducer }) => ({ ...projectReducer });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTheme(Navbar));
