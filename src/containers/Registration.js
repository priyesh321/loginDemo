import React, { Component, } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <form style={{ marginTop: 15 }}>
          <input
            type="text"
            placeholder="First Name"
          />
          <br />
          <input
            type="text"
            placeholder="Last Name"
            style={{ marginTop: 10 }}
          />
          <br />
          <input
            type="text"
            placeholder="Contact Number"
            style={{ marginTop: 10 }}
            maxLength={10}
          />
          <br />
          <input
            type="email"
            placeholder="Email"
            style={{ marginTop: 10 }}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            style={{ marginTop: 10 }}
            security={true}
          />
        </form>

      </div>
    );
  }
}


export default App;