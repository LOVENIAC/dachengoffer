// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
// })

module.exports = {
  chainWebpack: config => {
    config.module
      .rule('images')
      .test(/\.(jpg|png|gif)$/)
      .set('parser', {
        dataUrlCondition: {
          maxSize: 1 // 10KiB
        }
      });
    // config.output
    // .filename('js/[name].[hash:8].js')
    // .chunkFilename('js/[name].[hash:8].js');
  }
};