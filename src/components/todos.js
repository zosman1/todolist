import React, { Component } from "react";
const FontAwesome = require("react-fontawesome");

export default class Todos extends React.Component{
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event, title) {
		console.log("HandleSubmit for todos.js has been run. value: " + title);
		this.props.removeTodo(title);
	}


	render () {
		return (
        <div>
            {
				this.props.todos.map((element) => {
					return (
						<div>
							<button onClick={(event) => this.handleSubmit(event, element.title)}><FontAwesome name="times-circle"/></button> {element.title}
							</div>
					);
				})
			}
        </div>
		);
	}
}

