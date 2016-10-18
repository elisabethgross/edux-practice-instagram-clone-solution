import React, { Component } from 'react';
import PhotoContainer from '../containers/PhotoContainer';
import CommentsContainer from '../containers/CommentsContainer';

class Single extends Component {
  componentDidMount() {
    this.props.fetchDemComments();
  }
  render() {
    if (!this.props.comments) return (<h1>Hello</h1>);
    const postId = this.props.params.postId;
    const i = this.props.posts.findIndex((post) => post.code === postId);
    const post = this.props.posts[i];
    const postComments = this.props.comments[postId] || [];
    return (
      <div className="single-photo">
        <PhotoContainer i={i} post={post} {...this.props} />
        <CommentsContainer postComments={postComments} {...this.props}/>
      </div>
    );
  }
};

export default Single;
