const PLUGIN_NAME = "わんコメアイコンプラグイン"
const PLUGIN_UID = "net.yuarasino.onecomme-icon-plugin"
const PLUGIN_VERSION = "1.0.0"
const PLUGIN_AUTHOR = "新篠ゆう"
const PLUGIN_URL = "https://github.com/yuarasino/onecomme-icon-plugin"
const PLUGIN_ROOT = `http://localhost:11180/plugins/${PLUGIN_UID}`

module.exports = {
  name: PLUGIN_NAME,
  uid: PLUGIN_UID,
  version: PLUGIN_VERSION,
  author: PLUGIN_AUTHOR,
  url: PLUGIN_URL,
  permissions: ["filter.comment"],
  defaultState: {},
  filterComment: async (comment) => {
    comment.data.profileImage = `${PLUGIN_ROOT}/icon.png`
    return comment
  }
}
