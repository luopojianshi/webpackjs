const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/index.js',
	plugins: [
		new HTMLWebpackPlugin({
			title: 'Caching 缓存'
		})
	],
	output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist')
	}
}

