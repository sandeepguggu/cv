import React from 'react';
import classnames from 'classnames';

import './diagonal-background.scss';
export default class DiagonalBackground extends React.Component {
  static propTypes = {
    invert: React.PropTypes.bool
  };

  render() {
    let { invert } = this.props;

    let classes = classnames({
      'diagonal-background': true,
      invert: invert
    });

    return (
      <div className={classes} />
    );
  }
}
