const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: [],
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "assets": path.resolve(__dirname, "src/assets"),
        "common": path.resolve(__dirname, "src/common"),
        "components": path.resolve(__dirname, "src/components"),
        "network": path.resolve(__dirname, "src/network"),
        "img": path.resolve(__dirname, 'src/assets/img'),
        
      },
    },
  },
});
