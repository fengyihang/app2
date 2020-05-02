import { request, authRequest } from '@/utils/request'

export function joinActivity(id, data) {
  return authRequest('activities/' + id + '/activityUsers', {
    method: 'POST',
    data: data
  })
}

export function pay(id) {
  return authRequest('pay/' + id + '/weappPay', {
    method: 'POST'
  })
}

export function cancelActivityUser(id, data) {
  return authRequest('activities/' + id + '/refund', {
    method: 'POST',
    data: data
  })
}
