module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[contenthash].[ext]',
            outputPath: 'static',
            publicPath: '_next/static',
          },
        },
      ],
    })

    return config
  },
}
