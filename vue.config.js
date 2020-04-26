module.exports = {
  lintOnSave: true,
  devServer: {
    port: 8080,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    before: require("./mock/mock-server.js")
  }
};
