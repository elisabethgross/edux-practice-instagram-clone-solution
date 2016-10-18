import {combineReducers} from 'redux';

import {
  RECEIVE_POSTS,
  RECEIVE_COMMENTS,
  INCREMENT_LIKES,
  ADD_COMMENT,
  REMOVE_COMMENT
} from '../action/types';

function postsReducer (state = [], action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts;
    case INCREMENT_LIKES:
      const i = action.index;
      return [
        ...state.slice(0, i),
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1)
      ];
    default:
      return state;
  }
}

function commentsReducer (state = [], action) {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.comments;
    case ADD_COMMENT:
      const newComment = state[action.postId].concat({
          user: action.author,
          text: action.comment
        });
      console.log(newComment);
      return {
        ...state,
        [action.postId]: newComment
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  posts: postsReducer,
  comments:commentsReducer
});

export default rootReducer;
