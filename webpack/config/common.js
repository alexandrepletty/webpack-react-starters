// --- Dependency
const HtmlWebpackPlugin = require('html-webpack-plugin')

// --- Modules
module.exports = {
	entry: './src/index.js',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env','@babel/preset-react']
					}
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin(
			{ template: './public/index.html' }
		)
	]
}