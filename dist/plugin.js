const PLUGIN_NAME_JA = "IconChanger"
const PLUGIN_NAME = "iconchanger"
const PLUGIN_UID = `net.yuarasino.${PLUGIN_NAME}`
const PLUGIN_VERSION = "1.0.0"
const PLUGIN_AUTHOR = "yuarasino"
const PLUGIN_AUTHOR_JA = "新篠ゆう"
const PLUGIN_URL = "https://github.com/yuarasino/onecomme-icon-plugin/tree/iconchanger"
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
    userIcons: {
      "テストユーザー": "fugu.png",
      "テストユーザー2": "fugu2.png"
    }
  },

  init(api) {
    m_api = api
  },

  async filterComment(comment) {
    const config = m_api.store.store
    const userIcons = config.userIcons
    for (const [user, icon] of Object.entries(userIcons)) {
      if (comment.data.displayName === user) {
        comment.data.profileImage = `${PLUGIN_WEB_EP}/icons/${icon}`
        break
      }
    }
    return comment
  }
}
