import React from 'react';
import ReactDOM from 'react-dom';
import Resume from 'templates/resume';

import './base.scss';
const render = (Component) => {
  ReactDOM.render(
    <div>
      <Component />
    </div>,
    document.querySelector('#root')
  );
};
render(Resume);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('templates/resume', () => {
    render(Resume);
  });
}