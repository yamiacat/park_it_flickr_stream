import React from 'react';
import PhotoStream from '../components/PhotoStream.jsx';

class PhotoContainer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      allPhotos: []
    }
  }

  render() {
     return (
      <div className="comment-box">
        <h2>This is PhotoContainer</h2>
        <PhotoStream/>
      </div>
    );
  }

}

export default PhotoContainer;
