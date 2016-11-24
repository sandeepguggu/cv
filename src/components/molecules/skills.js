import React from 'react';

import ProgressCircle from 'atoms/progress-circle';

import './skills.scss';
export default class Skills extends React.Component {
  render() {
    return (
      <div className="skills">
        <ProgressCircle title="React" percentage={90} />
        <ProgressCircle title="Javascript" percentage={85} />
        <ProgressCircle title="Redux" percentage={80} />
        <ProgressCircle title="HTML 5 / CSS 3" percentage={75} />
        <ProgressCircle title="Webpack" percentage={70} />
        <ProgressCircle title="D3" percentage={60} />
      </div>
    );
  }
}
