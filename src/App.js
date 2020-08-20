import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return <div>Hello, World!! - with class</div>
//   }
// }

// JSX
// function App() {
//   return (
//     <div>Hello World!!!</div>
//   );
// }

// NO JSX
// function App() {
//   return React.createElement(
//     "div",
//     null,
//     "Hello, World - No jsx."
//   )
// }

// function App() {
//   return (
//     <h1>Hello World!!!</h1>
//   );
// }

// 下記、エラーになる。
// function App() {
//   return (
//     const val = <h1>haaaaai !!!</h1>;
//     return val;
//   );
// }

// class App extends Component {
//   render() {
//     // const target = "my self"
//     // const val = <h1 className="foooo">haaaaai {target} !!!</h1>;
//     // const val = <input type="button" value="Hi!" onClick={() => console.log('Yes?')}></input>;
//     const val = <input type="text" onChange={() => console.log('Yes?')}></input>;

//     return val;
//   }
// }

class App extends Component {
  render() {
    return (
      <div>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => console.log('Yes?')}></input>;
      </div>
    )
  }
}
export default App;
