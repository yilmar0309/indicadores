module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '@assets': './src/assets',
          '@hooks': './src/@core/hooks',
          '@utils': './src/@core/utils',
          '@screens': './src/app/screens',
          '@presenter': './src/@core/presenter',
          '@navigation': './src/app/navigation',
          '@components': './src/@core/components',
          '@nativeModules': './src/@core/nativeModules',
        }
      }
    ],
    'jest-hoist'
  ]
};
