import React from 'react';

export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.element
  };

  render() {
    return (
      <section className="lab">
        <section className="nav">
          Navigation
        </section>
        {this.props.children}
      </section>
    );
  }
}
