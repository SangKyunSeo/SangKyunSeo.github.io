const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath : '/sangkyun.github.io/',
  outputDir: 'docs'
})
