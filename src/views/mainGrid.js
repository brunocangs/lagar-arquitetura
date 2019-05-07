import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { LagarLogo, Link } from '../components';
import cx from 'classnames';

const Title = styled.p`
  position: absolute;
  top: 0;
  left: 10%;
  right: 10%;
  bottom: 0;
  opacity: 0;
  transform: scale(0.8);
  color: ${props => props.theme.white};
  font-size: 32px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  text-align: center;
  transform-origin: center;
  @media screen and (max-width: 768px) {
    font-size: 19px;
  }
`;

const Container = styled.div`
  min-height: calc(100vh - 90px);
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const Row = styled.div`
  flex-basis: ${props => props.small ? 50 : 25}%;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  height: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  padding-top: ${props => 1 / props.dimension * 100}%;
  position: relative;
  &.hover-effect {
    ${Title} {
      opacity: 1;
      transform: scale(1);
      transition: opacity 0.4s 1.1s ease-in, transform 0.4s 1.1s ease-in;
    }
  }
  
`;

const ImageItem = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  filter: brightness(100%);
  transition: all 0.2s linear;
  &.hover-effect {
    filter: brightness(60%);
  }
`;

const Overlay = styled.div`
  position: absolute;
  pointer-events: none;
  color: white;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

const Image = (props) => {
  const [dimension, setDimension] = useState(16 / 9);
  const [isHovered, setIsHovered] = useState(false);
  const toggleHover = () => setIsHovered(!isHovered);
  const onLoad = (e) => {
    const { width, height } = e.target;
    setDimension(width / height);
  };
  return (
    <Link
      to={{
        pathname: `/projeto/${props.item.slug}`,
        state: { project: props.item }
      }}
    >
      <Wrapper
        className={cx({ 'hover-effect': isHovered })}
        dimension={dimension}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        onTouchEnd={toggleHover}
        onTouchStart={toggleHover}
      >
        <ImageItem
          className={cx({ 'hover-effect': isHovered })}
          onLoad={onLoad}
          src={props.src}
        />
        <Overlay>
          <LagarLogo
            classNameBottom={cx('fadeInSlideLeft', { 'hover-effect': isHovered })}
            classNameTop={cx('fadeInSlideRight', { 'hover-effect': isHovered })}
            size={80}
            style={{ height: '100%', zIndex: 2, overflow: 'visible' }}
          />
          <Title>{props.item.name}</Title>
        </Overlay>
      </Wrapper>
    </Link>
  );
};

const Column = (props) => props.row.map(item => (
  <Image
    item={item}
    src={item.photos[0].url}
  />
));

const MainGrid = (props) => {
  const [isSmall, setIsSmall] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const listener = () => {
      setIsSmall(window.innerWidth <= 768);
    };
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  });
  const { items } = props;
  const [small, big] = items.reduce((prev, curr, index) => {
    prev[0][index % 2].push(curr);
    prev[1][index % 4].push(curr);
    return prev;
  }, [[[], []], [[], [], [], []]]);
  return (
    <Container>
      {isSmall
        ? small.map((row) => {
          return (
            <Row small>
              <Column row={row} />
            </Row>
          );
        })
        : big.map(row => (
          <Row>
            <Column row={row} />
          </Row>
        ))}
    </Container>
  );
};

export default MainGrid;