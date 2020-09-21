const CracoAntDesignPlugin = require('craco-antd');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';

const isProd = NODE_ENV === 'production';
const isDev = NODE_ENV === 'development';

const webpackPlugins = [
  new MonacoWebpackPlugin({
    languages: ['json'],
    features: ['!colorDetector', '!iPadShowKeyboard', '!parameterHints', '!suggest'],
  })
];

if (isProd) {
  webpackPlugins.push(new BundleAnalyzerPlugin());
}

module.exports = {
  webpack: {
    plugins: webpackPlugins
  },
  plugins: [
    { 
      plugin: CracoAntDesignPlugin,
      options: {
        cssLoaderOptions: {
          modules: {
            localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64]',
            getLocalIdent: (context, localIdentName, localName, options) => {
              if (context.resourcePath.includes('node_modules')) {
                return localName;
              }
              return getCSSModuleLocalIdent(context, localIdentName, localName, options);
            }
          }
        },
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true
          }
        }
      }
    },
  ]
};
