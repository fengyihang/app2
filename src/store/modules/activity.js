import wepy from '@wepy/core'
import { getActivityUserInfo} from '../../api/activity'

const state = {
  club: null
}

// 定义 getters
var getters = {
  club: state => state.club
}

// 定义 actions
const actions = {
  async getUserClub ({ commit, getters }, params = {}) {
    if (!getters.isLoggedIn) {
      return
    }

    const statsResponse = await getNotificationStats({}, false)

    commit('setUnreadCount', statsResponse.data.unread_count)
  }
}
// 定义 mutations
const mutations = {
  get(state, club) {
    state.club = club
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
