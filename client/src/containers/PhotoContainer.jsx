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

    const jsonFlickrFeed = (data) => {
      let photoData = data.items;
      this.setState({allPhotos: photoData});
    }

    const url = 'http://mr.jessica.tech/park_it_flickr_stream/flickrfeed';
    const request = new XMLHttpRequest();

    request.open('GET', url);
    request.onload = function() {

      if(request.status === 200) {
        let jsonpString = request.responseText;
        eval(jsonpString);
      }
    }
    request.send();
  }

  render() {
     return (
      <div>
        <h2 id="page-title">Flickr Photo Stream</h2>
        <PhotoStream allPhotos={this.state.allPhotos}/>
      </div>
    );
  }
}

export default PhotoContainer;
