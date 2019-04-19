import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SimpleMenu from './menu/nav/simplemenu';
import TodoList from './todolist/TodoList';


import Cycle from './cycle/cylce';
import Ajax from './ajax/ajax';
import Table from './ajax/table/table';
import RefReact from './ajax/refreact/refreact';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">

        <SimpleMenu />



          <img src={logo} className="App-logo" alt="logo" />

         /* <TodoList />
          <Cycle />
          <Ajax />
          <Table />
          <RefReact />*/
        </header>

      </div>
    );
  }
}

export default App;
