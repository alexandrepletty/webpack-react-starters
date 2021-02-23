// --- Dependency
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
	}
})