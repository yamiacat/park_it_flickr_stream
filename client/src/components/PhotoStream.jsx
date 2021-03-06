import React from 'react';
import Photo from './Photo.jsx';

class PhotoStream extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const photosToRender = this.props.allPhotos.map((photo, index) => {
        return(
          <Photo
            photo={photo}
            key={index}
          />
        )
    })

    return (
      <div id="photo-container">
        {photosToRender}
      </div>
    );
  }
}

export default PhotoStream;
