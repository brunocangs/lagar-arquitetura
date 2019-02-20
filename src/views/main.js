import React from 'react';
import styled, {keyframes} from 'styled-components';
import {connect} from 'react-redux';
import {getProjects} from '../actions';
import {
  Link,
  LagarLogo
} from '../components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const Banner = styled.div`
  height: calc(100vh - 90px);
  width: 100%;
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media screen and (max-width: 768px) {
    height: calc(100vw * 9 / 16);
  }
`;

const TitleWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0, 0.4);
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease-in-out;
  & * {
    fill: white;
  }
  &:hover {
    opacity: 1;
    * {
      animation-play-state: running;
    }
  }
`;
const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = styled.p`
  position: absolute;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  color: ${props => props.theme.white};
  font-size: 32px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  animation: ${fadeIn} 0.4s 1.1s ease-in paused both;
  transform-origin: center;
`;

class Main extends React.Component {
  componentDidMount() {
    if (!this.props.projects) {
      this.props.getProjects();
    }
  }
  render() {
    if (this.props.loading)     {
      return <div style={{}}>loading...</div>;
    }
    return this.props.items.map((project, i) => {
      const mainImage = project.photos.reduce((prev, curr) => {
        if (curr.order < prev.order) return curr;
        return prev;
      }, {
        url: '',
        order: Infinity
      }).url;
      return (
        <Banner 
          key={i}
          url={mainImage}
        >
          <Link to={{
            pathname: `/projeto/${project.id}`,
            state: {project}
          }}
          >
            <TitleWrapper>
              <Container>
                <LagarLogo 
                  classNameBottom={'fadeInSlideLeft'}
                  classNameTop={'fadeInSlideRight'}
                  size={80}
                  style={{height: '100%', zIndex: 22, overflow: 'visible'}}
                />
                <Title>{project.name}</Title>
              </Container>
            </TitleWrapper>
          </Link>
        </Banner>
      );
    });
  }
}

const mapDispatchToProps = {
  getProjects
};

const mapStateToProps = ({projectsReducer}) => ({...projectsReducer});

export default connect(mapStateToProps, mapDispatchToProps)(Main);