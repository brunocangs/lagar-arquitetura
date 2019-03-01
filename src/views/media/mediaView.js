import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
    min-height: calc(100vh - 90px);
    padding: 24px 12px;
    display: flex;
    @media screen and (max-width: 768px){
      flex-direction: column;
    }
`;

const Col = styled.div`
  flex: ${props => props.right ? 3 : 2};
  flex-direction: column;
  ${props => props.right ? 'margin-left: 6px' : 'margin-right: 6px'}
`;

const MediaItem = styled.div`
  flex: 1;
  margin: 36px 0 24px 0;
`;

const MediaImage = styled.img`
  width: 100%;
  height: auto;
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
    font-size: 0.8em;
    vertical-align: middle;
  }
`;

const FullMediaItem = ({item, key}) => {
  return (
    <MediaItem key={key}>
      <MediaImage src={item.images[0]} />
      <MediaTitle date={`${monthMap[item.month]} de ${item.year}`}>{item.title}</MediaTitle>
    </MediaItem>
  );
};

const MediaView = (props) => {
  const [left, right] = props.media.reduce((prev, curr, index) => {
    prev[index % 2].push(curr);
    return prev;
  }, [[],[]]);
  console.log(left, right);
  return (
    <Wrapper>
      <Col>
        {left.map((item, i) => {
          return (
            <FullMediaItem item={item}
              key={i}
            />
          );
        })}
      </Col>
      <Col right>
        {right.concat(right.length !== left.length ? {} : []).map((item, i) => {
          if (!item.images) return <MediaItem />;
          return (
            <FullMediaItem item={item}
              key={i}
            />
          );
        })}
      </Col>
    </Wrapper>
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