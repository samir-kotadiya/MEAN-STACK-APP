// App.js
import React from 'react';
import ToDo from '../components/todo';
import Counter from '../containers/Counter';
import AddCounter from '../containers/AddCounter';
import RemoveCounter from '../containers/RemoveCounter';

const App = () => {
  return (
    <div className="container">
      <ToDo />
      <div className="container">
        <br />
        <AddCounter />
        <Counter />
        <RemoveCounter />
      </div>
    </div >
  )
}
export default App;