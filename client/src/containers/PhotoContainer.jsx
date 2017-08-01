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
    console.log("mounted");
    const url = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1';

    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.onload = function() {
      if(request.status === 200) {

        let jsonString = request.responseText;
        let cleansedJson = jsonString.replace(/'/g, "/'");
        let photoData = JSON.parse(cleansedJson);
        this.setState({allPhotos: photoData.items});
      }
    }.bind(this);

    request.send();
  }



  render() {
     return (
      <div>
        <h2>Flickr Photo Stream</h2>
        <PhotoStream allPhotos={this.state.allPhotos}/>
      </div>
    );
  }

}

export default PhotoContainer;
