const path = require( 'path' );
const HtmlWebpackPlugin = require ( 'html-webpack-plugin' );

module.exports = {

	entry: './app/index.jsx',

	output: {
		path:      path.resolve( __dirname, 'dist' ),
		filename: 'index_bundle.js',
	},

	module: {
		rules: [

			// JS
			{
				test: /\.(js|jsx)$/,
				use:  'babel-loader',
			},

			// CSS
			{
				test: /\.(css)$/,
				use: [
					'style-loader', // Where we import index.css, etc.
					'css-loader',
				],
			}
		],
	},

	plugins: [
		new HtmlWebpackPlugin( {
			template: 'app/index.html',
		} ),
	],

	mode: 'development'
};
