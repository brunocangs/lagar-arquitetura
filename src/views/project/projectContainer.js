import React from 'react';
import {connect} from 'react-redux';
import {getProject} from '../../actions';
import ProjectView from './projectView';

class ProjectContainer extends React.Component {
  componentWillMount () {
    if (!this.props.project || !this.props.project.id) {
      this.props.getProject({id: this.props.match.params.id});
    }
  }
  render() { 
    return <ProjectView project={this.props.project} />;
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const project = stateProps.item || (ownProps.location.state.project);
  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    project
  };
};

const mapDispatchToProps = {
  getProject
};

const mapStateToProps = ({projectsReducer}) => ({...projectsReducer});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ProjectContainer);