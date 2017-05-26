import "../assets/stylesheets/base.scss";
import React, { Component } from "react";
import TodoList from "./todos";
import InputBox from "./InputBox";

const todos = [
	{
		title: "Dumbass"
	}, 
	{ 
		title: "Do your work"
	}, 
	{
		title: "Comp sci hmwk"
	}
];
class Hello extends React.Component{
	render() {
		function addTodo(todoName){
			console.warn(`function addTodo run with todoName: ${todoName}`);
			todos.push({
				title: todoName
			});
			console.warn(todos);
		}
		return(
      <div> 
        <h1>Hello, {this.props.name}!</h1>
        <InputBox addtodo={addTodo}/>
        <TodoList todos={todos}/>
      </div>
		);
	}
}
export default Hello;
