import { Component, ReactNode, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

interface IState {
  count: number;
}

class App extends Component<{}, IState> {

  constructor(props: {}) {
    super(props);

    this.state = {
      count: 0
    };

    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter(): void {
    this.setState((prevState) => {
      prevState.count + 1
    });
  }

  render(): ReactNode {
    return (
      <div className="App">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={this.incrementCounter}>
            count is {this.state.count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
      </div>
    )
  }
}

export default App
