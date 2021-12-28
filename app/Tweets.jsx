import React from 'react'; // Builds UI, but is agnostic to environment e.g. iOS, etc.

export default class Tweets extends React.Component {

	render() {

		return (
			<>
				<h2>Here are your tweets: </h2>

				<ul>
				{ this.props.tweets.map( ( tweet ) => (
					<li key={tweet.id}>{tweet.text}</li>
				) ) }
				</ul>
			</>
		);
	}
}
