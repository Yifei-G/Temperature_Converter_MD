function getStyleUse(bundleFilename) {
    return [
      {
        loader: 'file-loader',
        options: {
          name: bundleFilename,
        },
      },
      { loader: 'extract-loader' },
      { loader: 'css-loader' },
      {
        loader: 'sass-loader',
        options:{
            implementation: require('sass'),
            webpackImporter:false,
            sassOptions: {
                includePaths: ['./node_modules'],
              },
        },

      },
    ];
  }

  module.exports=[
    {
        entry: ['./scss/main.scss',"./js/main.js"],
        output:{
            filename:"bundle.js",
        },
        module:{
            rules:[
              {
                test:/main.scss$/,
                use:getStyleUse('bundle-main.css')
            },
            {
              test: /\.js$/,
              use: 'babel-loader',
            }
          ]
        },
    }




  ]