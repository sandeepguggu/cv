import React from 'react';
import ReactDOM from 'react-dom';
import Lab from './lab';
// const FOLDERS = ['atoms', 'molecules', 'organisms', 'templates'];

const render = (Component) => {
  ReactDOM.render(
    <Component />,
    document.querySelector('#root')
  );
};
render(Lab);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./lab', () => {
    render(Lab);
  });
}