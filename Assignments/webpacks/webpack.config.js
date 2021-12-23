const path = require("path/posix");

module.exports = {
    entry: "./code/index.js",
    output: {
        path: path.join(__dirname, "build"),
        filename: "bundle.js"
    },
    mode: "development",
    module:{
        rules: [
            {
            test: /\.css$/,
              exclude:/node_modules/,
                use :["style-loader","css-loader"]
        }, {
            test: /\.(png|jpe?g|gif)$/i,
          exclude:/node_modules/,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
          exclude:/node_modules/,  
            loader: "url-loader",
            options: {
              publicPath: "./fonts/",
              name: "../fonts/[name].[ext]",
              limit:1000
        }
      },
    ]
    },
};