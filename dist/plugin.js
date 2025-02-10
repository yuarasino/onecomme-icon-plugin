const PLUGIN_NAME_JA = "枠ごとにアイコンを切り替えるプラグイン"
const PLUGIN_NAME = "iconswitcher"
const PLUGIN_UID = `net.yuarasino.${PLUGIN_NAME}`
const PLUGIN_VERSION = "1.0.0"
const PLUGIN_AUTHOR = "yuarasino"
const PLUGIN_AUTHOR_JA = "新篠ゆう"
const PLUGIN_URL = "https://github.com/yuarasino/onecomme-icon-plugin/tree/iconswitcher"
const PLUGIN_WEB_EP = `http://localhost:11180/plugins/${PLUGIN_UID}`

let m_api

module.exports = {
  name: PLUGIN_NAME_JA,
  uid: PLUGIN_UID,
  version: PLUGIN_VERSION,
  author: PLUGIN_AUTHOR_JA,
  url: PLUGIN_URL,
  permissions: ["filter.comment"],
  defaultState: {
    streamIcons: {
      "http://example.com/watch?v=fugu": "fugu.png",
      "http://example.com/watch?v=fugu2": "fugu2.png",
    }
  },

  init(api) {
    m_api = api
  },

  filterComment: async (comment) => {
    // ここのページにどんなデータが取れるかの情報があります
    // https://types.onecomme.com/interfaces/types_Plugin.OnePlugin#filterComment.filterComment-1
    const config = m_api.store.store
    const streamIcons = config.streamIcons
    for (const [stream, icon] of Object.entries(streamIcons)) {
      if (comment.url === stream) {
        comment.data.profileImage = `${PLUGIN_WEB_EP}/icons/${icon}`
        break
      }
    }
    return comment
  }
}
