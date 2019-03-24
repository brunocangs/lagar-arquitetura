import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from '../../components';
const Wrapper = styled.div`
    min-height: calc(100vh - 90px);
    padding: 24px 12px;
    display: flex;
    @media screen and (max-width: 768px){
    ${props => props.hideIfSmall ? 'display: none;' : ''}
      flex-direction: column;
    }
    ${props => props.hideIfBig ? '@media screen and (min-width: 769px){ display: none; }' : ''}
`;

const Col = styled.div`
  flex: ${props => props.right ? 3 : 2};
  flex-direction: column;
  ${props => props.right ? 'margin-left: 6px' : 'margin-right: 6px'}
`;

const MediaItem = styled.div`
  flex: 1;
  margin: 36px 0 24px 0;
  height: 0;
  padding-top: ${props => 1 / props.dimension * 100}%;
  width: 100%;
  overflow: hidden;
  position: relative;
  transition: border-radius 0.2s ease-out;
  :hover {
    img {
      transform: scale(1.05);
    }
    border-radius: 8px;
    cursor: pointer;
  }
`;

const MediaImage = styled.img`
  width: 100%;
  height: auto;
  transition: all 0.2s ease-out;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const MediaTitle = styled.h3`
  font-weight: normal;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  font-size: 22px;
  ::after {
    margin-left: 0.3em;
    content: '- ${props => props.date}';
    font-size: 0.7em;
    vertical-align: middle;
  }
`;

const FullMediaItem = ({ item, key, onClick }) => {
  const [dimension, setDimension] = useState(0);
  const onLoad = (e) => {
    const { width, height } = e.target;
    setDimension(width / height);
  };
  return (
    <div onClick={onClick}>
      <MediaItem
        dimension={dimension}
        key={key}
      >
        <MediaImage
          onLoad={onLoad}
          src={item.images[0]}
        />
      </MediaItem>
      <MediaTitle date={`${monthMap[item.month]} de ${item.year}`}>{item.title}</MediaTitle>
    </div>
  );
};

const MediaView = (props) => {
  const [left, right] = props.media.reduce((prev, curr, index) => {
    prev[index % 2].push(curr);
    return prev;
  }, [[], []]);
  const [modalOpen, setModalOpen] = useState(false);
  const onRequestClose = () => {
    setModalOpen(false);
  };
  const onClick= () => {
    setModalOpen(true);
  };
  return (
    <>
      <Wrapper hideIfSmall>
        <Col>
          {left.map((item, i) => {
            return (
              <FullMediaItem
                item={item}
                key={i}
                onClick={onClick}
              />
            );
          })}
        </Col>
        <Col right>
          {right.concat(right.length !== left.length ? {} : []).map((item, i) => {
            if (!item.images) return <MediaItem />;
            return (
              <FullMediaItem
                item={item}
                key={i}
                onClick={onClick}
              />
            );
          })}
        </Col>
      </Wrapper>
      <Wrapper hideIfBig>
        <Col>
          {props.media.map((item, i) => {
            return (
              <FullMediaItem
                item={item}
                key={i}
                onClick={onClick}
              />
            );
          })}
        </Col>
      </Wrapper>
      <Modal
        onRequestClose={onRequestClose}
        open={modalOpen}
        transparent
      >
        Hi
      </Modal>
    </>
  );
};

const monthMap = {
  1: 'Janeiro',
  2: 'Fevereiro',
  3: 'Março',
  4: 'Abril',
  5: 'Maio',
  6: 'Junho',
  7: 'Julho',
  8: 'Agosto',
  9: 'Setembro',
  10: 'Outubro',
  11: 'Novembro',
  12: 'Dezembro'
};

export default MediaView;