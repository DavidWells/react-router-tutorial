import React, { PropTypes } from 'react'

export default class ProgrammaticExample extends React.Component {

  constructor(props) {
    super(props);
    this.doRouting = this.doRouting.bind(this)
  }
  changeRouteOnClick (e) {
    e.preventDefault()
    var value = this.refs.input.value
    this.props.history.push('/query?test=' + value)
  }
  render() {
    console.log('props', this.props)
    return (
      <div>
        <h1>ProgrammaticExample</h1>
        <form>
          <input ref="input" placeholder='Add query param here' />
          <br />
          <button onClick={this.changeRouteOnClick}>Do routing on click!</button>
        </form>
      </div>
    );
  }
}
