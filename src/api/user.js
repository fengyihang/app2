import { request, authRequest, uploadFile } from '@/utils/request'

export function getCurrentUser(data) {
  return authRequest('user')
  // return authRequest('user/info', {
  //   data: {include: 'club,activity_ing'}
  // })
}

export function getUserInfo() {
  return authRequest('user/info', {
    data: { include: 'firstClub' }
  })
}

export function updateUser(data) {
  return authRequest('user', {
    method: 'put',
    data: data
  })
}

export function updateAvatar(avatar, type = 'avatar') {
  return uploadFile('images', {
    method: 'POST',
    name: 'image',
    formData: {
      type: type
    },
    filePath: avatar
  })
}

export function getUser(id) {
  return request('users/' + id)
}

export function getPerms() {
  return authRequest('user/permissions')
}
