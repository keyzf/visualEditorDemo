/*
 * @Author: zengjian 
 * @Date: 2018-12-03 18:34:30 
 * @Last Modified by: yuanxy
 * @Last Modified time: 2018-12-16 18:02:41
 */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import connect from './redux/connect';
class App extends Component {

  onClickHandler=()=>{
    this.props.dispatch({type:'update',payload:123456})
  }

  componentDidMount(){
    this.props.dispatch({type:'update',payload:222})
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={this.onClickHandler}>测试</button>
        </header>
      </div>
    );
  }
}
export default connect()(App)
 