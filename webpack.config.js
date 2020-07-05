const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.js$/, // expressao regular, \. quer dizer realmente o ponto, e $ termina a expressao
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' }, // precisa pra puxar css e colar no style do index
          { loader: 'css-loader' }, // precisa pra entender importacao de outros arquivos dentro do css
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i, // | = ou, letra e? = opcional, i= case insensitive
        use: {
          loader: 'file-loader'
        }
      }
    ]
  }
};
