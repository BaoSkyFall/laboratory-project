module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/,
        loader: 'less-loader',
        options: {
          modifyVars: { // modify theme variable
            'primary-color': '#20818C',
            'link-color': '#20818C',
            'border-radius-base': '2px'
          },
          javascriptEnabled: true
        }
      }
    ]
  }
};
