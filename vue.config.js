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
  }
}