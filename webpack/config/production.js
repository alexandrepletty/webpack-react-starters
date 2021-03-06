// --- Dependency
const path = require('path')
const {merge} = require('webpack-merge')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const common = require('./common')

// --- Modules
module.exports = merge(common, {
	mode: 'production',
	output: {
		filename: '[name]-[chunkhash].js',
		path: path.resolve('dist'),
		chunkFilename: 'vendor-[id]-[contenthash].js',
		assetModuleFilename: 'images/[hash][ext][query]'
	},
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					format: {
						comments: false
					}
				},
				extractComments: false
			})
		]
	},
	plugins: [
		new CleanWebpackPlugin()
	]
})