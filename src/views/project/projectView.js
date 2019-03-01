import React from 'react';
import styled from 'styled-components';
import Swipeable from 'react-swipeable-views';
import { Link } from '../../components';

const Photo = styled.div`
    width: 100%;
    height: calc(100vw * 9 / 16);
    max-height: calc(100vh - 90px - 100px);
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
  z-index: 3;
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

const Content = styled.div`
  margin-top: 12px;
`;

const Title = styled.h1`
  font-size: 30px;
  text-align: center;
  padding-top: 18px;
  font-weight: normal;
  margin: 0 8px 30px;
`;

const Description = styled.p`
  max-width: 80%;
  text-align: center;
  margin: auto;
  font-size: 18px;
  padding-bottom: 16px;
`;

const Contact = styled.div`
    padding: 32px 12px;
    border: 1px solid #666;
    max-width: 40%;
    background-color: transparent;
    color: #666;
    font-size: 18px;
    text-transform: uppercase;
    text-align: center;
    cursor: pointer;
    margin: 8px auto;
    :active {
      background-color: rgba(50,50,50,0.1);
    }
    @media screen and (max-width: 768px){
      max-width: 85%;
    }
`;

const NextProject = styled.div`

`;

const NextTitle = styled.p`
  font-size: 16px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 6px;
  padding-top: 14px;
`;

export default class ProjectView extends React.Component {
  state = {
    index: 0
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.project.id !== this.props.project.id) {
      window.scrollTo(0, 0);
    }
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
          <Content>
            <Title>{project.name}</Title>
            <Description>{project.description}</Description>
          </Content>
          <Contact tabIndex={0}>
            Entrar em contato
          </Contact>
        </PhotoWrapper>
        {this.props.nextProject && <NextProject>
          <NextTitle>
              Próximo projeto
          </NextTitle>
          <Link to={{
            pathname: `/projeto/${this.props.nextProject.id}`,
            state: {
              project: this.props.nextProject
            }
          }}
          >
            <Photo url={this.props.nextProject.photos[0].url} />
          </Link>
        </NextProject>}
      </>
    );
  }
}