import React from 'react';
import { Router, browserHistory } from 'react-router';
import App from './app';
import HOC from './hoc';

function createRoutes(req, parent) {
  let dirs = {};
  return req.keys().map(function(key) {
    let path = parent + key.replace(/.js$/, '').replace(/^./, '');

    let index = path.lastIndexOf('/');
    let dir = path;
    while (index !== -1) {
      dir = dir.substr(0, index);
      if (!dirs[dir]) {
        dirs[dir] = [req(key).default];
      } else {
        dirs[dir].push(req(key).default);
      }
      index = dir.lastIndexOf('/');
    }

    return {
      path,
      component: HOC([req(key).default])
    };
  }).concat(
    Object.keys(dirs).map(function(path) {
      return {
        path,
        component: HOC(dirs[path])
      };
    })
  );
}

export default class Lab extends React.Component {
  constructor() {
    super();

    let atoms = require.context('atoms', true, /^(.*\.(js$))[^.]*$/igm);
    let molecules = require.context('molecules', true, /^(.*\.(js$))[^.]*$/igm);
    let organisms = require.context('organisms', true, /^(.*\.(js$))[^.]*$/igm);
    let templates = require.context('templates', true, /^(.*\.(js$))[^.]*$/igm);

    let routes = createRoutes(atoms, 'atoms')
      .concat(createRoutes(molecules, 'molecules'))
      .concat(createRoutes(organisms, 'organisms'))
      .concat(createRoutes(templates, 'templates'));

    this.routes = {
      path: '/',
      component: App,
      childRoutes: routes
    };
  }

  render() {
    return (
      <Router routes={this.routes} history={browserHistory} />
    );
  }
}
