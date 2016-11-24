import React from 'react';
import classnames from 'classnames';

const icons = {
  'about': require('images/user-shape.svg'),
  'skills': require('images/settings.svg'),
  'education': require('images/book.svg'),
  'work': require('images/business-briefcase.svg')
};

import './header.scss';
export default class Header extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
    icon: React.PropTypes.string,
    invert: React.PropTypes.bool
  }

  render() {
    let { name, icon, invert } = this.props;

    let classes = classnames({
      header: 'true',
      invert: invert
    });

    return (
      <header className={classes}>
        <div className="name">{name}</div>
        <div className="icon" dangerouslySetInnerHTML={{
          __html: icons[icon]
        }} />
      </header>
    );
  }
}
