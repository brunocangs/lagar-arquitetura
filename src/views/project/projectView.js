import React from 'react';
import styled from 'styled-components';
import Swipeable from 'react-swipeable-views';

const Photo = styled.div`
    width: 100%;
    height: calc(100vh - 90px - 100px);
    background-image: url(${props => props.url});
    background-position: center center;
    background-size: cover;
`;

const PhotoWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const MarkerWrapper = styled.div`
  position: absolute;
  top: 15;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 99;
  padding-top: 12px;
`;

const Marker = styled.div`
  height: 15px;
  width: 15px;
  background-color: white;
  transition: all 0.2s ease-in-out;
  transform: scale(${props => Math.max(1 - Math.abs(props.current - props.self) * 0.15, 0.7)});
  opacity: ${props => props.current !== props.self ? 0.6 : 1};
  margin: 6px;
`;
export default class ProjectView extends React.Component {
  state = {
    index: 0
  }
  render () {
    const {project} = this.props;
    if (!project || !project.photos) return null;
    return (
      <>
        <PhotoWrapper>
          <MarkerWrapper>
            {
              project.photos.sort((a,b) => a.order - b.order).map((photo, i) => {
                return (
                  <Marker 
                    current={this.state.index}
                    key={i}
                    self={i}
                  />
                );
              })
            }
          </MarkerWrapper>
          <Swipeable 
            enableMouseEvents
            index={this.state.index}
            onChangeIndex={(index) => this.setState({index})}
          >
            {project.photos.map((photo, i) => {
              return (
                <Photo key={i}
                  url={photo.url}
                />
              );
            })}
          </Swipeable>
        </PhotoWrapper>
      </>
    );
  }
}