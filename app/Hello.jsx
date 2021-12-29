import React from 'react'; // Builds UI, but is agnostic to environment e.g. iOS, etc.

export default function Hello ( props ) {
	return <h1>Hello, {props.name}</h1>;
}
