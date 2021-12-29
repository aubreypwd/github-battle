import React from 'react'; // Builds UI, but is agnostic to environment e.g. iOS, etc.

export default class Popular extends React.Component {

	constructor( props ) {

		super( props );

		this.state = {
			selectedLanguage: 'All',
			languages: this.props.languages,
		}
	}

	switchLanguages = ( event ) => this.setState( {
		languages: [
			'Toki Pona',
			'Engrish',
			'Pirate',
		],
	} );

	updateLanguage = ( selectedLanguage ) => this.setState( {
		selectedLanguage
	} );

	render() {

		return (
			<>
				<ul className="flex-center" onContextMenu={this.switchLanguages}>

					{ this.state.languages.map( ( language ) => (

						<li key={language}>
							<button
								className="btn-clear nav-link"
								onClick={ () => this.updateLanguage( language ) }
								style={ language === this.state.selectedLanguage
									? { color: 'maroon' }
									: {}
								}
							>{language}</button>
						</li>

					) ) }

				</ul>
			</>
		);
	}
}
