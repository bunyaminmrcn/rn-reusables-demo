
/*
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
*/

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
/*
const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
*/

const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
const { withNativeWind } = require('nativewind/metro');
const path = require('path');


const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    assetExts: assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...sourceExts, "svg"]
  }
};

const mergedConf = mergeConfig(defaultConfig, config);
module.exports = withNativeWind(mergedConf, { input: './global.css' });