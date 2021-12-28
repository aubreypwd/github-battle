import React from 'react'; // Builds UI, but is agnostic to environment e.g. iOS, etc.

export default class Popular extends React.Component {

	render() {

		return (
			<>
				<ul className="flex-center">
					{ this.props.languages.map( ( language ) => (
						<li key={language}>
							<button className="btn-clear nav-link">{language}</button>
						</li>
					) ) }
				</ul>
			</>
		);
	}
}
