module.exports = {
    entry: './src/javascript/app.jsx',
    output: {
        path: __dirname + "/js",
        filename: 'bundle.js' //this is the default name, so you can skip it
//        publicPath: 'http://localhost:8090/assets'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'jsx-loader?insertPragma=React.DOM&harmony'
            },
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}
