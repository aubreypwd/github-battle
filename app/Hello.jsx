import React from 'react'; // Builds UI, but is agnostic to environment e.g. iOS, etc.

class Hello extends React.Component {
	render() {
		return (
			<h1>Hello, {this.props.name}</h1>
		);
	}
}

export default Hello;
