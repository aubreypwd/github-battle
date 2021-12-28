import React from 'react'; // Builds UI, but is agnostic to environment e.g. iOS, etc.
import ReactDOM from 'react-dom'; // Web UI.

import './index.css';

class App extends React.Component {
	render () {
		return (
			<div>
				Hello World!
			</div>
		);
	}
}

ReactDOM.render(
	<App />, // class App (jsx)
	document.getElementById( 'app' )
);
