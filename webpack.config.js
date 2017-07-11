module.exports = {
    entry: './jsx/app.jsx',
    output: {
        filename: './js/app.js'
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node-modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-2', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: [
                    'style-loader',
                    'css-loader'
                    ]
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                    ]
            }
        ]
    }
}