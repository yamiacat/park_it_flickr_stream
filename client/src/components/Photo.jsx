import React from 'react';

class Photo extends React.Component {

  render() {
    const fullAuthor = this.props.photo.author;
    const fullLink = this.props.photo.link;
    const trimmedAuthor = fullAuthor.slice(20, -2);
    const authorPage = fullLink.slice(0,-13);

    let renderTags = "";

    if(this.props.photo.tags) {
      renderTags = `Tags: ${this.props.photo.tags}`
    }


    return (
      <div className="stream-box">
        <div className="photo-box">
          <img src={this.props.photo.media.m}/>
        </div>
        <div className="photo-label">
          <a className="photo-title" href={this.props.photo.link} >{this.props.photo.title}</a>
          <p>by</p>
          <a className="author-label" href={authorPage}>{trimmedAuthor}</a>
        </div>
        <div className="descripton">
            {renderTags}
        </div>
      </div>
    );
  }
}

export default Photo;
