const path = require('path');

module.exports = function override(config) {
  // Add styled-components support
  config.module.rules.push({
    test: /\.js$/,
    include: path.resolve(__dirname, 'src'),
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react'],
          plugins: [
            ['babel-plugin-styled-components', { displayName: true }],
          ],
        },
      },
    ],
  });

  // Add support for importing CSS files
  config.module.rules.push({
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
  });

  // Add support for importing font files
  config.module.rules.push({
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: ['file-loader'],
  });

  return config;
};
