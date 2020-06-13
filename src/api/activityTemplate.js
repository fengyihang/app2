import { authRequest } from '@/utils/request'
// 俱乐部的活动模板列表
export function getActivityTemplates(id, data) {
  return authRequest('activity_templates/' + id + '/index', {
    data: data
  })
}
// 获取模板信息
export function getActivityTemplate(id, data) {
  return authRequest('activity_templates/' + id, {
    data: data
  })
}
// 发布活动模板
export function createActivityTemplate(data) {
  return authRequest('activity_templates', {
    method: 'POST',
    data: data
  })
}
// 编辑活动模板
export function updateActivityTemplate(id, data) {
  return authRequest('activity_templates/' + id, {
    method: 'PUT',
    data: data
  })
}
export function deleteActivityTemplate(id, data) {
  return authRequest('activity_templates/' + id, {
    method: 'DELETE',
    data: data
  })
}
