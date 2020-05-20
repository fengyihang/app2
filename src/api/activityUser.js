import { request, authRequest } from '@/utils/request'
// 报名活动
export function joinActivity(id, data) {
  return authRequest('activities/' + id + '/activityUsers', {
    method: 'POST',
    data: data
  })
}
// 支付
export function pay(id) {
  return authRequest('pay/' + id + '/weappPay', {
    method: 'POST'
  })
}
// 取消报名
export function cancelActivityUser(id, data) {
  return authRequest('activities/' + id + '/refund', {
    method: 'POST',
    data: data
  })
}
// ios端报名,确认
export function confirm(id) {
  return authRequest('activity_users/' + id + '/confirm', {
    method: 'PUT'
  })
}
// 编辑报名
export function editActivityUser(id, data) {
  return authRequest('activity_users/' + id + '/update', {
    method: 'PUT',
    data: data
  })
}
