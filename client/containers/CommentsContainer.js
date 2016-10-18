import {connect} from 'react-redux';

import Comments from '../components/Comments';
import {addComment, removeComment} from '../action/creators';

const mapDispatchToProps = function (dispatch) {
  return {
    addDaComment: (postId, author, comment) => {
      dispatch(addComment(postId, author, comment));
    },
    removeDaComment: (postId, i) => {
      dispatch(removeComment(postId, i));
    }
  };
};

const CommentsContainer = connect(null, mapDispatchToProps)(Comments);

export default CommentsContainer;
