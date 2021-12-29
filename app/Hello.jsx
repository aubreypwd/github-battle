import React from 'react'; // Builds UI, but is agnostic to environment e.g. iOS, etc.
import PropTypes from 'prop-types';

export default function Hello ( { name } ) {
	return <h1>Hello, {name}</h1>;
}

Hello.propTypes = {
	name: PropTypes.string.isRequired,
};
