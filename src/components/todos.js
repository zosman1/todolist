import React, { Component } from "react";

export default class Todos extends React.Component{
	// constructor(props) {
	// 	super(props);
	// 	this.handleChange = this.handleChange.bind(this);
	// }
	render () {
		return (
        <div>
            {
                this.props.todos.map((element) => {return (<div>{element.title}</div>);})
            }
        </div>
		);
	}
}

