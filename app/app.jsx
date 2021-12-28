import React from 'react'; // Builds UI, but is agnostic to environment e.g. iOS, etc.
import ReactDOM from 'react-dom'; // Web UI.

import './index.css';

function isLoading() {
	return false;
}

class App extends React.Component {

	render() {

		const name = 'Aubrey';

		return (

			// Or <React.Fragment>
			<>
				<h1>Hello {name}</h1>
				<p>Hello World</p>
			</>
		);
	}
}

ReactDOM.render(
	<App />, // class App (jsx)
	document.getElementById( 'app' )
);
