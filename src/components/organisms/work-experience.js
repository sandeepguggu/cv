import React from 'react';

import Header from 'atoms/header';
import WorkList from 'molecules/work-list';

export default class WorkExperience extends React.Component {
  render() {
    return (
      <section className="my-education">
        <Header name="Work Experience" icon="work" />
        <WorkList />
      </section>
    );
  }
}
