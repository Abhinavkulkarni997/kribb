// const { getDefaultConfig } = require("expo/metro-config");
// const { withNativeWind } = require("nativewind/metro");

// const config = getDefaultConfig(__dirname);

// module.exports = withNativeWind(config, {
//   input: "./global.css",
// });

// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

// Create config
const config = getDefaultConfig(__dirname);

// Configure Metro for modern JS features
config.transformer.minifierConfig = {
  compress: {
    drop_console: false,
    ecma: 2022,
    keep_classnames: true,
    keep_fnames: true,
  },
  mangle: {
    keep_classnames: true,
    keep_fnames: true,
  },
  output: {
    ecma: 2022,
  },
};

// Export with NativeWind
module.exports = withNativeWind(config, {
  input: './global.css',
}); 