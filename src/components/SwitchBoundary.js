import React from 'react';
import {Switch} from 'react-router-dom';
import styled from 'styled-components';

class SwitchBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
    
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
    
  componentDidCatch(error, info) {
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
    console.log(error);
    // logComponentStackToMyService(info.componentStack);
  }
  reload () {
    window.location.reload();
  }
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <NotFound />;
    }
    
    return (
      <Switch>
        {this.props.children}
      </Switch>
    ); 
  }
}


const Wrapper = styled.div`
    padding-top: 108px;
    text-align: center;
    font-size: 24px;
    flex: 1;
    width: 90%;
    margin: auto;
    min-height: calc(100vh - 90px);
`;

const LinkToMain = styled.span`
    color: ${props => props.theme.secondary};
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

const NotFound = () => (
  <Wrapper>
    Ocorreu um erro inesperado
    <br />
    Caso o erro persista, entre em contato conosco
    <br />
    <br />
    Clique <LinkToMain onClick={() => {
      window.location.reload();
    }}
    >aqui</LinkToMain> para recarregar a página
  </Wrapper>
);
export default SwitchBoundary;