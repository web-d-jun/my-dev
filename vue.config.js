module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  "pwa": {
    "name": "My Dev",
    "themeColor": "#4DBA87",
    "msTileColor": "#000000",
    "appleMobileWebAppCapable": "yes",
    "appleMobileWebAppStatusBarStyle": "black",
    "workboxPluginMode": "InjectManifest",
    "workboxOptions": {
      "swSrc": "public/service-worker.js"
    }
  },
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 10240 }))

  }
}