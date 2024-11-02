module.exports = {
  presets: [['module:@react-native/babel-preset',{ jsxImportSource: 'nativewind' }], 'nativewind/babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '~': '.',
          '@rnr/reusables': './node_modules/@rnr/reusables/packages/reusables',
          '@Utils': './app/Utils',
          '@appRoot': './app'
        },
      },
    ],
    'react-native-reanimated/plugin',
  ]
};
