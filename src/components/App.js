import "../assets/stylesheets/base.scss";
import React, { Component } from "react";
import TodoList from "./todos";
import InputBox from "./InputBox";


class Hello extends React.Component {
	constructor() {
		super();
		this.addTodo = this.addTodo.bind(this);
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
		this.setState({
			todos: this.state.todos.concat({
				title: todoName
			})
		});
	}

	render() {
		return (
			<div>
				<h1>Hello, {this.props.name}!</h1>
				<InputBox addtodo={this.addTodo} />
				<TodoList todos={this.state.todos} />
			</div>
		);
	}
}
export default Hello;
