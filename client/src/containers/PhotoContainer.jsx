import React from 'react';
import PhotoStream from '../components/PhotoStream.jsx';

class PhotoContainer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      allPhotos: []
    }
  }

  componentDidMount() {
    const url = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1';
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.onload = function() {
      if(request.status === 200) {
        let jsonString = request.responseText;
        let photoData = JSON.parse(jsonString);
        this.setState({allPhotos: photoData.items});
      }
    }.bind(this);
    
    request.send();
  }



  render() {
     return (
      <div>
        <h2>This is PhotoContainer</h2>
        <PhotoStream allPhotos={this.state.allPhotos}/>
      </div>
    );
  }

}

export default PhotoContainer;
