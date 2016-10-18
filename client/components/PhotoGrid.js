import React, {Component} from 'react';
import PhotoContainer from '../containers/PhotoContainer';

class PhotoGrid extends Component{
  componentDidMount() {
    this.props.fetchDemPosts();
  }
  render() {
    if (!this.props.posts) return (<h1>Wait</h1>);
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, i) => <PhotoContainer {...this.props} post={post} i={i} key={post.id}/>)}
      </div>
    );``
  }
};

export default PhotoGrid;