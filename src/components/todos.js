import React, { Component } from "react";
const FontAwesome = require('react-fontawesome');

export default class Todos extends React.Component{
	// constructor(props) {
	// 	super(props);
	// 	this.handleChange = this.handleChange.bind(this);
	// }
	// shouldComponentUpdate(x, y) {
	// 	return true;
	// }

	render () {
		return (
        <div>
            {
                this.props.todos.map((element) => {
					return (<div>
						<FontAwesome name="fa-times-circle"/> {element.title}
						</div>);
					})
            }
        </div>
		);
	}
}

