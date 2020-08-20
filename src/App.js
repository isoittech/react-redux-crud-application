import React, { Component } from 'react';


const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  handlePlusButton = () => {
    // stateの値を変えたいときは
    // setStateを必ず呼ぶ
    this.setState({ count: this.state.count + 1 })
  }
  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 })
  }
  // setStateを実行するとコールバックとしてrender()が呼ばれる。
  render() {
    return (
      <React.Fragment>
        <div>count: {this.state.count} </div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}

export default App;
