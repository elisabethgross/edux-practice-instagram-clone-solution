import {connect} from 'react-redux';

import Single from '../components/Single';
import {fetchComments, incrementLikes} from '../action/creators';

const mapStateToProps = function (state) {
  return {
    posts: state.posts,
    comments: state.comments
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

const SingleContainer = connect(mapStateToProps, mapDispatchToProps)(Single);

export default SingleContainer;
