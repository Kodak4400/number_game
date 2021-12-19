const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  target: 'node',
  entry: {
    functions: path.resolve(__dirname, './src/functions/index.ts'),
  },
  // build時は`dependencies`だけを読み込むようにする
  externals: [
    nodeExternals({
      modulesFromFile: {
        includeInBundle: ['dependencies'],
        excludeFromBundle: ['devDependencies'],
      },
    }),
  ],

  output: {
    filename: '[name]/index.js',
    path: path.resolve(__dirname, './dist/'),
    libraryTarget: 'commonjs2', // ライブラリの形式 tsconfig.jsonのmoduleとほぼ同じ。commonjs2かクライアントサイドならumdを設定することが多い。
  },
  // source-mapの種類 => https://webpack.js.org/configuration/devtool/
  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: path.resolve(__dirname, './node_modules'),
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.ts', '.js'],
  },
}
