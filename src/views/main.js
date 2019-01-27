import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {getProjects} from '../actions';
import {
  Link,
  LagarLogo
} from '../components';
const Banner = styled.div`
  height: calc(100vh - 80px);
  width: 100%;
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class Main extends React.Component {
  componentDidMount() {
    if (!this.props.projects) {
      this.props.getProjects();
    }
  }
  render() {
    if (this.props.loading)     {
      return <div>loading...</div>;
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
          <div style={{height: 80, width: 80}}>
            <LagarLogo 
              classNameBottom={'fadeInSlideRight'}
              classNameTop={'fadeInSlideLeft'}
              style={{height: '100%'}}
            />
          </div>
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