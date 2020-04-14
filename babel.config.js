module.exports = {
  sourceType: 'unambiguous',
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', {'legacy': true}],
    [
      "module-resolver",
      {
          "root": ["./src"],
          "alias": {
              "@util": "./src/util",
              "@component": "./src/component",
              "@service": "./src/service",
              "@redux": "./src/redux",
              "@container": "./src/container"
          }
      }
    ]
  ]
};
