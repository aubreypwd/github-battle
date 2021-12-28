
// React.
import React from 'react'; // Builds UI, but is agnostic to environment e.g. iOS, etc.
import ReactDOM from 'react-dom'; // Web UI.

// Styles.
import './index.css';

// Components.
import Hello from './Hello.jsx';
import Tweets from './Tweets.jsx';

/**
 * Main App
 */
class App extends React.Component {

	render() {

		const name = 'Aubrey';

		return <>
			<Hello name={name} />

			<Tweets tweets={ [
				{
					id: 1,
					stars: 13,
					text: 'Turns out "git reset --hard HEAD^" was a terrible idea.',
				},
				{ id: 2, stars: 87, text: "Tech conferences are too expensive." },
				{
					id: 3,
					stars: 51,
					text: "Clean code is subjective. Optimize for deletion.",
				},
				{
					id: 4,
					stars: 19,
					text:
						"Maybe the real benefit of open source was the friendships we made along the way?",
				},
			] } />
		</>
	}
}

ReactDOM.render(
	<App />, // class App (jsx)
	document.getElementById( 'app' )
);
