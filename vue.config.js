const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  css: {
    loaderOptions : {
      scss: {
        additionalData: '@import "~@/assets/styles.scss";',
      }
    }
  },
  transpileDependencies: true
});
