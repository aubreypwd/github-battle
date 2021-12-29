
// React.
import React from 'react'; // Builds UI, but is agnostic to environment e.g. iOS, etc.
import ReactDOM from 'react-dom'; // Web UI.

// Styles.
import './index.css';

// Components.
// import Hello from './Hello.jsx';
// import Tweets from './Tweets.jsx';
import Popular from './Popular.jsx';

/**
 * Main App
 */
class App extends React.Component {

	render() {
		return <>
			<div className="container">
				<Popular
					languages={ [
						'All',
						'JavaScript',
						'Ruby',
						'Java',
						'CSS',
						'Python'
					] } />
			</div>
		</>
	}
}

ReactDOM.render(
	<App />, // class App (jsx)
	document.getElementById( 'app' )
);
