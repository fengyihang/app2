import { authRequest } from '@/utils/request'
// 获取活动信息
export function getActivityFeatures(id) {
  return authRequest('activityFeatures/' + id + '/index')
}
// 获取活动特色信息
export function getActivityFeature(id) {
  return authRequest('activityFeatures/' + id + '/edit')
}

export function createActivityFeature(data) {
  return authRequest('activityFeatures', {
    method: 'POST',
    data: data
  })
}

export function updateActivityFeature(id, data) {
  return authRequest('activityFeatures/' + id, {
    method: 'PUT',
    data: data
  })
}
