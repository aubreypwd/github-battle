
// React.
import React from 'react'; // Builds UI, but is agnostic to environment e.g. iOS, etc.
import ReactDOM from 'react-dom'; // Web UI.

// Styles.
import './index.css';

// Components.
import Hello from './Hello.jsx';

/**
 * Main App
 */
class App extends React.Component {

	render() {

		const name = 'Aubrey';

		return <>
			<Hello name={name} />
		</>
	}
}

ReactDOM.render(
	<App />, // class App (jsx)
	document.getElementById( 'app' )
);
