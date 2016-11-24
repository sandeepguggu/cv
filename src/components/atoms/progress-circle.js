import React from 'react';

import './progress-circle.scss';
export default class ProgressCircle extends React.Component {
  static propTypes = {
    percentage: React.PropTypes.number,
    title: React.PropTypes.string
  }
  render() {
    let { percentage, title } = this.props;

    let r = 7;
    let c = Math.PI * r * 2;

    return (
      <div className="progress-circle">
        <div className="wrap">
          <svg width="11rem" height="11rem">
            <circle cx="5.5rem" cy="5.5rem" r="5rem" fill="transparent" stroke="#FFF"
              strokeWidth="1rem"
              strokeDasharray={c + 'em'}
              strokeDashoffset={0 + 'em'} />
            <circle cx="5.5rem" cy="5.5rem" r="5rem" fill="transparent"
              stroke="rgba(26, 188, 156, 0.75)"
              strokeWidth="1rem"
              strokeDasharray={c + 'em'}
              strokeDashoffset={(c * percentage * 0.01) + 'em'} />
          </svg>
          <span className="percentage">{percentage}<small>%</small></span>
          <span className="title">{title}</span>
        </div>
      </div>
    );
  }
}
