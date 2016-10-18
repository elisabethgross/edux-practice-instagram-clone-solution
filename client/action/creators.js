import {
  INCREMENT_LIKES,
  ADD_COMMENT,
  REMOVE_COMMENT,
  RECEIVE_POSTS,
  RECEIVE_COMMENTS
} from './types';


export function increment (posts,index) {
  return {
    type: INCREMENT_LIKES,
    posts,
    index
  };
}

export function addComment (postId, author, comment) {
  return {
    type: ADD_COMMENT,
    postId,
    author,
    comment
  };
}

export function removeComment (postId, i) {
  return {
    type: REMOVE_COMMENT,
    postId,
    i
  };
}

export const receivePosts = function (posts) {
  return {
    type: RECEIVE_POSTS,
    posts: posts
  };
};

export const receiveComments = function (comments) {
  return {
    type: RECEIVE_COMMENTS,
    comments: comments
  };
};

export const fetchPosts = () => {
  return function (dispatch) {
    return fetch('/api/posts')
    .then(res => res.json())
    .then(posts => {
      dispatch(receivePosts(posts));
    }).catch(err => console.error(err.stack));
  };
};

export const fetchComments = () => {
  return function (dispatch) {
    return fetch('/api/comments')
    .then(res => res.json())
    .then(comments => {
      dispatch(receiveComments(comments));
    }).catch(err => console.error(err.stack));
  };
};

export const incrementLikes = (posts, index) => {
  return function (dispatch) {
    dispatch(increment(posts, index));
  };
};
