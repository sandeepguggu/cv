import React from 'react';

export default function(components) {
  return class HOC extends React.Component {
    render() {
      let Comps = components.map(function(C, index) {
        return <C key={index}/>;
      });

      return (
        <div>{Comps}</div>
      );
    }
  };
}
