import React from 'react';
import styled from 'styled-components';
import { Link } from '.';
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999999;
  background-color: #FAFAFA;
  transform: ${props => {
    if (props.open) {
      return 'translateY(0)';
    } else {
      return 'translateY(-100%)';
    }
  }};
  opacity: ${props => {
    if (props.open) {
      return '1';
    } else {
      return '0';
    }
  }};
  transition: transform 0.25s ease-in-out, opacity 0.15s ease-in-out;
`;

const MenuItem = styled.li`
  text-transform: uppercase;
  font-size: 20px;
  padding-bottom: 4px;
  margin-top: 10px;
  text-align: center;
  position: relative;
`;

const Content = styled.div`
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > ${MenuItem}::before {
    content: ' ';
    bottom: 0;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    border-bottom: 1px solid black;
    width: 20%;
    height: 1px;
  }
  & > ${MenuItem}:last-child {
    &::before {
      border-bottom: none;
    }
    padding-bottom: 10px;
  }
`;

const Close = styled.i`
  position: absolute;
  top: 10px;
  right: 18px;
  z-index: 2;
`;

const Expandable = styled.div`
  overflow: hidden;
  max-height: ${props => props.expanded ? '150px' : '0'};
  padding: ${props => props.expanded ? '8px 0' : '0'};
  transition: all 0.25s ease-in-out;
  box-shadow: 0 6px 4px -5px rgba(0,0,0,0.3) inset, 0 -6px 4px -5px rgba(0,0,0,0.3) inset;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CenterText = styled.div`
  text-align: center;
`;

class MobileDropdown extends React.Component {
  state = {
    expanded: false
  }
  toggleExpanded = () => {
    this.setState(state => ({
      expanded: !state.expanded
    }));
  }
  render() {
    return (
      <Wrapper
        open={this.props.open}
      >
        <Content>
          <Close 
            className='icon icon-close'
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              this.props.onClose();
            }}
            style={{fontSize: '1.8em'}}
          />
          <MenuItem>
            <CenterText onClick={this.toggleExpanded}>Projetos</CenterText>
          </MenuItem>
          <Expandable expanded={this.state.expanded}>
            <MenuItem>
              <Link to='/projetos'>
                Todos
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to='/projetos/comercial'>
              comercial
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to='/projetos/residencial'>
                Residencial
              </Link>
            </MenuItem>
          </Expandable>
          <MenuItem>Escritório</MenuItem>
          <MenuItem>Mídia</MenuItem>
          <MenuItem>Contato</MenuItem>
        </Content>
      </Wrapper>
    );
  }
}
export default MobileDropdown;