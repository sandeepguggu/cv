import React from 'react';

import './work.scss';
export default class Work extends React.Component {
  static propTypes = {
    from: React.PropTypes.string,
    to: React.PropTypes.string,
    link: React.PropTypes.string,
    employer: React.PropTypes.string,
    role: React.PropTypes.string,
    description: React.PropTypes.string
  }
  render() {
    let {from, to, employer, role, link, description } = this.props;

    return (
      <div className="work">
        <div className="timeline">{from} - {to}</div>
        <div className="wrap">
          <a target="_blank" className="employer" href={link}>{employer}</a>
          <div className="role">{role}</div>
          <p className="description">{description}</p>
        </div>
      </div>
    );
  }
}
