import React, { Component } from 'react';
import './App.css';
import styled, {keyframes} from 'styled-components';

const slideOut = props => keyframes`
  0% {
    min-width: ${props => props.initalSize};
  }
  100% {
    min-width: 50%;
  }

`

const fadeOut = keyframes`
  from {
    border-color: rgba(0,0,0,1);
  }
  to {
    border-color: rgba(0,0,0,0);
  }
`

const fadeIn = keyframes`
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`

const Logo = styled.div`
    height: 80px;
    min-width: ${(props) => props.size}px;
    position: relative;
    text-align: center;
    display: flex;
    align-items: center;
    padding: 16px;
    animation: ${(props) => slideOut(props.size)} 1s ease-out both;

    &::before {
      content: ' ';
      border-top: 8px solid black;
      border-right: 8px solid black;
      height: 70%;
      width: ${(props) => props.size * 0.70}px;
      position: absolute;
      top: 0;
      right: 0;
      transition: all ease-in-out 1s;
      animation: ${fadeOut} 0.4s 0.2s linear both;
    }

    &::after {
      content: ' ';
      border-bottom: 8px solid black;
      border-left: 8px solid black;
      height: 100%;
      width: ${(props) => props.size}px;
      position: absolute;
      bottom: 0;
      left: 0;
      transition: all ease-in-out 1s;
      animation: ${fadeOut} 0.4s 0.2s linear both;
    }
`

const FadeInText = styled.p`
    animation: ${fadeIn} 0.6s ease-in-out both;
    display: flex;
    width: 100%;
    justify-content: center;
    font-size: 18px;
`

class FadeTitle extends Component {
  render() {
    return (
        <Logo size={80}>
          <FadeInText>
            {this.props.children}
          </FadeInText>
        </Logo>
    );
  }
}

export default FadeTitle;
