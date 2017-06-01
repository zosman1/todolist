import "../assets/stylesheets/base.scss";
import React, { Component } from "react";
import TodoList from "./todos";
import InputBox from "./InputBox";

class Hello extends React.Component {
	constructor() {
		super();
		this.addTodo = this.addTodo.bind(this);
		this.removeTodo = this.removeTodo.bind(this);
		this.state = {
			todos: [
				{
					title: "Dumbass"
				},
				{
					title: "Do your work"
				},
				{
					title: "Comp sci hmwk"
				}
			]};
	}
	addTodo(todoName) {
		if (todoName == ""){return;}
		this.state.todos.unshift({title:todoName});
		this.setState({
			todos: this.state.todos
		});

	}
	removeTodo(element) {
		let index = this.state.todos.indexOf(element);
		if (index == -1) {
			console.warn("The element to remove was not found in function removeTodo()"); 
			return;
		}
		this.state.todos.splice(index, 1);
		this.setState({
			todos: this.state.todos
		});
	}

	render() {
		return (
			<div>
				<h1>TodoList</h1>
				<div className="mainTodo">
					<InputBox addtodo={this.addTodo} />
					<TodoList todos={this.state.todos} removeTodo={this.removeTodo}/>
				</div>
			</div>
		);
	}
}
export default Hello;
