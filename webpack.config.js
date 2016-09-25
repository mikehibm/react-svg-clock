const path=require('path');

module.exports = {
    context: path.join(__dirname, "src"),
    entry: "./index.tsx",
    output: {
        path: "./dist",
        filename: "bundle.js"
    },

    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            { test: /\.html$/, loader: "file?name=[path][name].[ext]"},
            { test: /\.css$/, loader: "style!css" }
        ]
    },

    devtool: "source-map",

    devServer: {
        inline: true,
        contentBase: "dist"
    },

    externals: {
        "moment": "moment",
        "pubsub-js" : "PubSub",
        "react": "React",
        "react-dom": "ReactDOM"
    }
};