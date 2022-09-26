import { Component, ReactNode, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import EmployeeList from './EmployeeList';
import ShiftList from './ShiftList';
import ShiftListFromList from './ShiftListFromList';

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
    this.setState((prevState: IState) => ({
      count: prevState.count + 1
    }));
  }

  render(): ReactNode {
    return (
      <div className="App">
        <h1>React Sample using class components</h1>
        <EmployeeList />
        <ShiftList />
        <ShiftListFromList />
      </div>
    )
  }
}

export default App
