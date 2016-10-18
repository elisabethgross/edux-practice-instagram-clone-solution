import {connect} from 'react-redux';

import Photo from '../components/Photo';
import {fetchComments, incrementLikes} from '../action/creators';

const mapStateToProps = function (state) {
  return {
    comments: state.comments,
    posts: state.posts
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchDemComments: () => {
      dispatch(fetchComments());
    },
    increment: (posts, index) => {
      dispatch(incrementLikes(posts, index));
    }
  };
};

const PhotoContainer = connect(mapStateToProps, mapDispatchToProps)(Photo);

export default PhotoContainer;
