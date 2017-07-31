import React from 'react';
import ReactDOM from 'react-dom';
import PhotoContainer from './containers/PhotoContainer.jsx';

window.onload = () => {
  ReactDOM.render(
    <PhotoContainer/>,
    document.getElementById('app')
  );
}
