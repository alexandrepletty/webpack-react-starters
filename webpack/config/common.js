// --- Dependency
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// --- Modules
module.exports = {
	entry: './src/index.js',
	module: {
		rules: [
			{
				test: /\.(svg|png|jpe?g|gif)$/i,
				loader: 'file-loader',
				options: {
					name: 'assets/images/[name].[ext]',
				}
			},
			{
				test: /\.(s[ac]|c)ss$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {publicPath: ''}
					},
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [
									['postcss-preset-env', {
										browsers: ['last 2 version', 'ie > 8']
									}]
								]
							}
						}
					},
					'sass-loader'
				]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', ['@babel/preset-react', {runtime: 'automatic'}]]
					}
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin(
			{ template: './public/index.html' }
		),
		new MiniCssExtractPlugin()
	]
}