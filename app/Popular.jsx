import React from 'react'; // Builds UI, but is agnostic to environment e.g. iOS, etc.

// Components
import LanguagesNav from './LanguagesNav.jsx';

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

		return <LanguagesNav
			languages={ this.state.languages }
			selectedLanguage={ this.state.selectedLanguage }
			updateLanguageCallback={ this.updateLanguage }
			switchLanguagesCallback={ this.switchLanguages }
		/>;
	}
}
