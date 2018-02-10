import React, {Component} from 'react';

export default class TodoComponent extends React.Component{
constructor(){
    super();
    this.state={
        todoItems: []
    }
}

handleClick(){
    const item = this.state.todoItems;
    item.push(this.textbox.value);

    this.setState({
        todoItems:item
    });
}

handleRemClick(e){
 var array = this.state.todoItems;
  var index = array.indexOf(e)
  array.splice(index, 1);
  this.setState({todoItems: array });
}

    render(){
        return(
            <div className="App">
                <input type="text" ref={textbox => this.textbox = textbox}/>
                <button onClick={this.handleClick.bind(this)}> Add Item </button>
                <p> Todo Items </p>
                <ul>{this.state.todoItems.map(item=><li>{item} <button onClick={this.handleRemClick.bind(this,item)}> Remove </button></li>)} 
                
                </ul>
            </div>
        );

    }
}