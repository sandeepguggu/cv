import React from 'react';

import './school.scss';
export default class School extends React.Component {
  static propTypes = {
    from: React.PropTypes.string,
    to: React.PropTypes.string,
    status: React.PropTypes.string,
    degree: React.PropTypes.string,
    school: React.PropTypes.string,
    description: React.PropTypes.string
  }
  render() {
    let {from, to, status, degree, school } = this.props;

    return (
      <div className="school-wrap">
        <div className="timeline">
          <div className="time">{from} - {to}</div>
          <div className="status">{status}</div>
        </div>
        <div className="school">
          <div className="info">
            <div className="degree">{degree}</div>
            <div className="name">{school}</div>
          </div>
          <p className="description" hidden>
            This is Photoshop's version Lorem Ipsum. Well, the way they make shows is, they make one show.
          </p>
        </div>
      </div>
    );
  }
}
