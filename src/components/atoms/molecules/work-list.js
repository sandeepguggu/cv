import React from 'react';

import Work from 'atoms/work';

import './work-list.scss';
export default class WorkList extends React.Component {
  render() {
    return (
      <div className="work-list">
        <Work from="Nov 15" to="Nov 16"
          employer="Fybr"
          link="http://www.fybr-tech.com/"
          role="Lead UI Developer"
          description="Lead a team of 5 people to build the management console for an
            IoT platform. The app was build with SVG, D3, React, Redux and Webpack."
            />
        <Work from="Jun 13" to="Oct 15"
          employer="Calm.io"
          link="http://calm.io"
          role="Web UI Developer"
          description="Part of a 4 people team which build the UI for the
            flagship product - Epsilon, a run-book automation engine. The UI
            involved complex elements like code execution trees, streaming
            console output and fine grained access controls. Build a modern
            single page app for Calm.io - a complete application life cycle
            management tool for data centers with React, Flux, D3, SVG &
            Webpack." />
        <Work from="Oct 12" to="May 13"
          employer="iStream"
          role="UI Developer"
          description="Part of a 4 people team which build UI for video
          streaming website - iStream, VoD and Live stream service with PHP,
          Backbane and RequireJS" />
        <Work from="Jan 12" to="Sep 12"
          employer="Langoor"
          link="http://www.langoor.com/in/"
          role="UI Developer"
          description="Part of a 2 people team which build UI for an ERP system,
            responsible for billing and inventory management - Langoor.biz using
            PHP and Bootstrap" />
      </div>
    );
  }
}
