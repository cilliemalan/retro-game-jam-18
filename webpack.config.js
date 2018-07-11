// this file exists because https://github.com/webpack-contrib/webpack-serve/issues/225

const configuration = {
    // put your webpack config here if you require anything
    // that webpack doesn't do by default.
};



const defaultMode = process.env.WEBPACK_SERVE ? "development" : undefined;
module.exports = (_, { mode = defaultMode } = {}) => ({
  mode,
  ...configuration
});
