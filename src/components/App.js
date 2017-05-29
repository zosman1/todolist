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
		console.warn(this.state.todos);
		this.setState({
			todos: this.state.todos.concat({
				title: todoName
			})
		});

	}
	removeTodo(todoName) {
		let index = this.state.todos.indexOf({
			title: todoName
		});
		if (index > -1) {
			this.setState({
				todos: this.state.todos.splice(index, 1)
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
