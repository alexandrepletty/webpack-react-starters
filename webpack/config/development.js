// --- Dependency
const ESLintPlugin = require('eslint-webpack-plugin')
const {merge} = require('webpack-merge')
const common = require('./common')

// --- Modules
module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		historyApiFallback: true,
		contentBase: './src',
		watchContentBase: true,
		port: 3000,
		open: true,
		hot: true,
		inline: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				enforce: 'pre',
				use: ['eslint-loader']
			},
		]
	},
	plugins: [
		new ESLintPlugin()
	]
})