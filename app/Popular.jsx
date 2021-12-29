import React from 'react'; // Builds UI, but is agnostic to environment e.g. iOS, etc.

export default class Popular extends React.Component {

	constructor( props ) {

		super( props );

		this.state = {
			languages: this.props.languages,
		}
	}

	/**
	 * If you right-click on the menu below, you can get these.
	 *
	 * This shows off how Arrow functions for some reason respect
	 * how you would expect `this` to work.
	 *
	 * @author Aubrey Portwood <aubrey@webdevstudios.com>
	 * @since  Wednesday, December 29, 2021
	 * @param  {Object} event Event Object.
	 */
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
