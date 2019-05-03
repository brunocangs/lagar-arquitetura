import React from 'react';
import { connect } from 'react-redux';
import { getProject } from '../../actions';
import ProjectView from './projectView';

class ProjectContainer extends React.Component {
  componentWillMount() {
    if (!this.props.project || !this.props.project.slug) {
      this.props.getProject({ slug: this.props.match.params.slug });
    }
  }
  render() {
    return (
      <ProjectView
        nextProject={this.props.nextProject}
        project={this.props.project}
      />
    );
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const project = ownProps.location.state.project || stateProps.item;
  let nextProject;
  if (stateProps.items) {
    const projectIndex = stateProps.items.findIndex(item => item.id === project.id);
    nextProject = stateProps.items[(projectIndex + 1) % stateProps.items.length];
  }
  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    project,
    nextProject
  };
};

const mapDispatchToProps = {
  getProject
};

const mapStateToProps = ({ projectsReducer }) => ({ ...projectsReducer });

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ProjectContainer);