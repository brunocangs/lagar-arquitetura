import React from 'react';
import {getMedia} from '../../actions';
import {connect} from 'react-redux';
import MediaView from './mediaView';

class MediaContainer extends React.Component {
  componentDidMount() {
    this.props.getMedia();
  }
  render() {
    return <MediaView media={this.props.items} />;
  }
}

const mapDispatchToProps = {
  getMedia
};

const mapStateToProps = ({mediaReducer}) => ({...mediaReducer});

export default connect(mapStateToProps,mapDispatchToProps)(MediaContainer);