import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import me from './temple3.jpg';
import TodoItems from './TodoItems';

class App extends Component {
  
  constructor(){
    super();
    this.state={
      curTime : new Date().toLocaleString()
      }
}

    handleClick(data1,Event){   //data passed from parent
      //alert(data1);
      alert(data1 +  " I am clicked");
    }

  render() {
        const topics = ['HTML', 'Node','React']  // Array string
        const now = new Date();
        //setInterval(function(){
        //this.setState({curTime: new  Date().toLocaleString()});}.bind(this), 1000);
    return (
      <div className="App">
      <p>Date : {now.toDateString()}</p>
      <p>Time : {now.toDateString()}</p>
      <button onClick={this.handleClick.bind(this,"hey ")}> Click Me </button>
      <p> Topics to study </p>
      <ul>
      {/* loop thru Array List*/}
       {topics.map(item=><li>{item}</li>)}  
      </ul>
      <hr/>
        <Biography/>
        <Grocery/>
        <TodoItems/>
         <p> copyrights </p>
      </div>
    );
  }
}

class Biography extends React.Component {
  render() {
    return (
      <div>
        
        <img src={me} style={{width:100, height:100}} />
        <p>Name: Srinivas D </p>
        <p>Skill: Something </p>
        <hr/> 
      </div>
    );
  }
}



class Grocery extends React.Component {
  render() {
    const topics = ['Bananas', 'Cookies','Ice Cream']  // Array string
    return (
      // comment line
      <div >
        <div style={{bordered:1}}>
        <h1>Grocery List:</h1>
         {/*   --> this is to comment block inside java script
         <ul>
            <li>Bananas </li>
            <li>Cookies </li>
            <li>Ice creaam </li>
          </ul>*/}
          {topics.map(groclist => <li> {groclist} </li>)}
        </div>
       <hr/>
      </div>
    );
  }
}

export default App;
