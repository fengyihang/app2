import { request, authRequest } from '@/utils/request'
// 附近的活动列表
export function getActivities(data) {
  return request('activities', {
    data: data
  })
}
// 俱乐部发布的活动
export function getClubActivities(clubId, data) {
  return authRequest('users/' + clubId + '/club_activities', {
    data: data
  })
}
// 获取活动信息
export function getActivity(id, data) {
  return request('activities/' + id, {
    data: data
  })
}
// 个人活动报名信息
export function getActivityUserInfo(uid, activityId, clubId) {
  return authRequest('activities/info/' + uid + '/' + activityId + '/' + clubId + '/activityUsers', {
  })
}

export function getUserActivities(userId, data) {
  return request('users/' + userId + '/activity_users', {
    data: data
  })
}
// 发布活动
export function createActivity(data) {
  return authRequest('activities', {
    method: 'POST',
    data: data
  })
}
// 取消活动
export function cancelActivity(id) {
  return authRequest('activities/' + id, {
    method: 'PUT'
  })
}
// 停止加入活动
export function stopJoinActivity(id, data) {
  return authRequest('activities/' + id + '/stop_join_activity', {
    method: 'PUT',
    data: data
  })
}
// 结算数据
export function cleanActivity(id, data) {
  return authRequest('activity_users/' + id + '/activity_user_info', {
    method: 'GET',
    data: data
  })
}
// 结算
export function confirmCleanActivity(id, data) {
  return authRequest('activity_users/' + id + '/clear_activity', {
    method: 'PUT',
    data: data
  })
}
// 继续报名
export function continueJoinActivity(id) {
  return authRequest('activities/' + id + '/continue_activity', {
    method: 'PUT'
  })
}
// 编辑活动
export function updateActivity(id, data) {
  return authRequest('activities/' + id, {
    method: 'PUT',
    data: data
  })
}
// 提现活动
export function withdrawActivity(id, data) {
  return authRequest('activities/' + id + '/withdraw', {
    method: 'POST',
    data: data
  })
}
export function deleteActivity(id, data) {
  return authRequest('activities/' + id, {
    method: 'DELETE',
    data: data
  })
}
