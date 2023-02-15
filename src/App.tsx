import { Component, ReactNode } from 'react';
import './App.css';
import { EmployeeListCC } from './classComponents/EmployeeList';
import ShiftListCC from './classComponents/ShiftList';
import EmployeeListFC from './functionalComponents/EmployeeList';
import { ShiftListFC } from './functionalComponents/ShiftList';

class App extends Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }

  render(): ReactNode {
    return (
      <div className="App">
        <div className="split left">
          <h1>Class Components</h1>
          <EmployeeListCC />
          <ShiftListCC />
        </div>
        <div className="split right">
          <h1>Functional Components</h1>
        </div>
      </div>
    );
  }
}

export default App;
