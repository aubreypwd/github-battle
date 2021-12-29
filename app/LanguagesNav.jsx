import React from 'react'; // Builds UI, but is agnostic to environment e.g. iOS, etc.

export default function LanguagesNav( {
	selectedLanguage,
	languages,
	updateLanguageCallback,
	switchLanguagesCallback
} ) {

	const color = ( language ) => {
		return language === selectedLanguage
			? { color: 'maroon' } // Active Language.
			: {}; // Not active.
	}

	return (
		<>
			<ul
				className="flex-center"
				onContextMenu={ () => switchLanguagesCallback() }>

				{ languages.map( ( language ) => (

					<li key={language}>
						<button
							className="btn-clear nav-link"
							onClick={ () => updateLanguageCallback( language ) }
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
