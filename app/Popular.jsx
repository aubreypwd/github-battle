import React from 'react'; // Builds UI, but is agnostic to environment e.g. iOS, etc.

export default class Popular extends React.Component {

	constructor( props ) {

		super( props );

		this.state = {
			languages: this.props.languages,
		}
	}

	// Cool arrow function this magic!
	switchLanguages = ( event ) => {

		this.setState( {
			languages: [
				'Toki Pona',
				'Engrish',
				'Pirate',
			],
		} );
	}

	render() {

		return (
			<>
				<ul className="flex-center" onContextMenu={this.switchLanguages}>
					{ this.state.languages.map( ( language ) => (
						<li key={language}>
							<button className="btn-clear nav-link">{language}</button>
						</li>
					) ) }
				</ul>
			</>
		);
	}
}
