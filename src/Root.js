import React from 'react';

export default class Root extends React.Component {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}
