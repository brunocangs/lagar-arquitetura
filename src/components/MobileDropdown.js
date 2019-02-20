import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 16px;
    z-index: 9999999;
    background-color: ${props => props.theme.white};
    transform: ${props => {
    if (props.open && props.display) {
      return 'translateY(0)';
    } else {
      return 'translateY(-100%)';
    }
  }};
    transition: all 0.3s ease-in-out;
`;
class MobileDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  render() {
    if (this.props.open !== this.state.props) {
      if (this.props.open && !this.state.open) { // Abrindo
        this.setState({open: this.props.open}); 
      } else if (!this.props.open && this.state.open) { // Fechando
        setTimeout(() => {
          this.setState({open: this.props.open}); 
        }, 300);
      }
      
    }
    return (
      <Wrapper display={this.state.open}
        open={this.props.open}
      >
        hi
      </Wrapper>
    );
  }
}
export default MobileDropdown;