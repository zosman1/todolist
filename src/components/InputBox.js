import React, { Component } from "react";

export default class InputBox extends React.Component{
	constructor(props) {
		super(props);
		this.state = {value: ""};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
		// console.warn(this.state.value);
	}

	handleSubmit(event) {
		this.props.addtodo(this.state.value);
		// console.warn("A name was submitted: " + this.state.value);
		this.setState({value: ""});
		event.preventDefault();
	}

	render() {
		return (
        <form onSubmit={this.handleSubmit}>
            <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" onClick={this.handleSubmit}/>
        </form>
		);
	}
}
