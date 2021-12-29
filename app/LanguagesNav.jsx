import React from 'react'; // Builds UI, but is agnostic to environment e.g. iOS, etc.

export default function LanguagesNav( props ) {

	const color = ( language ) => {
		return language === props.selectedLanguage
			? { color: 'maroon' } // Active Language.
			: {}; // Not active.
	}

	return (
		<>
			<ul
				className="flex-center"
				onContextMenu={ () => props.switchLanguagesCallback() }>

				{ props.languages.map( ( language ) => (

					<li key={language}>
						<button
							className="btn-clear nav-link"
							onClick={ () => props.updateLanguageCallback( language ) }
							style={ color( language ) }
						>

						{language}

						</button>
					</li>

				) ) }

			</ul>
		</>
	);
}
