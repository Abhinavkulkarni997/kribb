module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: ["react-native-reanimated/plugin"],
  };
};
// module.exports = function (api) {
//   api.cache(true);

//   return {
//     presets: [
//       ["babel-preset-expo", { jsxImportSource: "nativewind" }],
//     ],
//     plugins: [
//       "nativewind/babel",
//       "@babel/plugin-transform-class-properties",
//       "@babel/plugin-transform-private-methods",
//       "@babel/plugin-transform-private-property-in-object",
//       "react-native-reanimated/plugin",
//     ],
//   };
// };