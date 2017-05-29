import React, { Component } from "react";
const FontAwesome = require("react-fontawesome");

export default class Todos extends React.Component{
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event, value) {
		console.log("HandleSubmit for todos.js has been run. value: " + value);
		this.props.removeTodo(value);
		// console.warn("A name was submitted: " + this.state.value);
		// this.setState({value: ""});
		// event.preventDefault();
	}


	render () {
		return (
        <div>
            {
                this.props.todos.map((element) => {
	return (
		<div>
						<a onClick={this.handleSubmit(element.title)}><FontAwesome name="times-circle"/></a> {element.title}
						</div>);
})
            }
        </div>
		);
	}
}

