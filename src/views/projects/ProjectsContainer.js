import React from 'react';
import ProjectsList from './ProjectsView';
import {connect} from 'react-redux';

class ProjectsContainer extends React.Component {
  render() {
    return <ProjectsList projects={this.props.items} />;
  }
}

const mapStateToProps = ({projectsReducer}) => ({...projectsReducer});

export default connect(mapStateToProps)(ProjectsContainer);