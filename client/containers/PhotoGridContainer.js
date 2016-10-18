import {connect} from 'react-redux';

import PhotoGrid from '../components/PhotoGrid';
import {fetchPosts} from '../action/creators';

const mapStateToProps = function (state) {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchDemPosts: () => {
    dispatch(fetchPosts());
    }
  };
};

const PhotoGridContainer = connect(mapStateToProps, mapDispatchToProps)(PhotoGrid);

export default PhotoGridContainer;
