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
                use :["style-loader","css-loader"]
        }, 
    ]
    },
  module:{
     rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  }
};