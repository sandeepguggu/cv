import React from 'react';
import { render } from 'react-dom';
import Resume from 'templates/resume';

import './base.scss';
render(
  <div>
    <Resume />
  </div>,
  document.querySelector('#root')
);
