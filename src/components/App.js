import "../assets/stylesheets/base.scss";
import React, { Component } from "react";
import TodoList from "./todos";
import InputBox from "./InputBox";

function searchTitle(array, title) {
	for (var index = 0; index < array.length; index++) {
		// var element = array[index];
		if (array[index].title == title){
			console.warn('searchTitle has been run annd has returned index: '+ index);
			return index;
		}
	}
	return -1;
}
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
		// console.warn(this.state.todos);
		this.setState({
			todos: this.state.todos.concat({
				title: todoName
			})
		});

	}
	removeTodo(todoName) {
		let index = searchTitle(this.state.todos, todoName);
		if (index > -1) {
			this.state.todos.splice(index, 1);
			this.setState({
				todos: this.state.todos
			});
		} else {
			console.warn("on removeTodo the selected value to remove does not exist.");
		}
	}

	render() {
		return (
			<div>
				<h1>Hello, {this.props.name}!</h1>
				<InputBox addtodo={this.addTodo} />
				<TodoList todos={this.state.todos} removeTodo={this.removeTodo}/>
			</div>
		);
	}
}
export default Hello;
