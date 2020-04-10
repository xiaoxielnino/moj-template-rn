const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const WebConfig = require('./web.config.json');
const DIST_PATH = path.resolve(__dirname, WebConfig.app.buildPath);
const CleanPlugin = require('clean-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const SOURCE_PATH = path.join(__dirname, './src');



module.exports = (env, argv) => {
  const mode = argv.mode || 'development';
  const PRODUCTION = mode === 'production';
  env = env || {};
  const appId = env.id;
  const buildProduction = env.prod
  const cdnPath = buildProduction ? '//s6.music.126.net' : '//cdntest.igame.163.com';
  const config =  {
    entry: {},
    output: {
      path: DIST_PATH,
      filename: PRODUCTION ? '[name].[hash:8].js' : '[name].js',
      publicPath: PRODUCTION ? (appId ? `${cdnPath}/static_public/${appId}/` : '/') : '/'
    },
    resolve: {
      extensions: ['.jsx', '.js', '.css', '.tsx', 'ts'],
      alias: {
        // native转web
        'react-native$': 'react-native-web'
      }
    },
    module: {},
    mode,
    devtool: PRODUCTION ? false : 'inline-source-map'
  }
  // 规则
  let rules = [
    {
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules(?!\/@music\/mobile)/,
      use: [
        {
          loader: 'babel-loader'
        }
      ]
    },
    {
      test: /\.(gif|jpg|png|svg|eot|ttf|woff)$/,
      loader: 'file-loader'
    }
  ];
  // 插件
  let plugins = [
    new CleanPlugin(),
    new webpack.DefinePlugin({
      IS_WEB: JSON.stringify(true)
    })
  ];

  if (!PRODUCTION) {
        const proxy = require('./proxy.config');
        const proxyTarget = argv.proxyTarget;
        if (proxyTarget) {
            proxy.forEach(p => {
                p.target = p.target.replace(/qa-\w+/, `qa-${proxyTarget}`)
            })
        }
        config.devServer = {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 7001,
            hot: false,
            hotOnly: true,
            historyApiFallback: true,
            proxy,
            open: true
        };
    }
  
    if (env.analysis) {
      plugins.push(new BundleAnalyzerPlugin());
    }

    // html
    WebConfig.pages.forEach((d) => {
      config.entry[d.name] = path.join(__dirname, d.js);
      plugins.push(new HtmlPlugin({
          title: `${d.title}`,
          template: path.join(__dirname, d.html),
          inject: true,
          hash: false,
          filename: `${d.name}.html`
      }))
  });


  // tree shaking in developmemt mode
  config.optimization = {
    usedExports: true,
    sideEffects: true,
    nodeEnv: 'development'
  }

  // optimization
  if (PRODUCTION) {
    config.optimization = {
      nodeEnv: 'production',
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true
        }),
        new OptimizeCSSAssetsPlugin({})
      ],
      splitChunks: {
        chunks: 'all'
      }
    }
  }

  // 设置 rules
  config.module.rules = rules;
  // 设置 插件
  config.plugins = plugins;
  return config;

}
