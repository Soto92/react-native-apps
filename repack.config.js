const { makeConfig } = require("@callstack/repack");
const rspack = require("@rspack/core");

module.exports = makeConfig({
  bundler: "rspack",
  context: __dirname,
  entry: {
    index: "./index.js",
  },

  sourceMap: true,

  configure: (config, { platform }, webpack) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
});
