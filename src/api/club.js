import { request, authRequest } from '@/utils/request'

export function getClubs(data) {
  return request('clubs', {
    data: data
  })
}

export function getClub(id, data) {
  return request('clubs/' + id, {
    data: data
  })
}

export function getUserClubs(userId, data) {
  return request('users/' + userId + '/clubs', {
    data: data
  })
}

export function createClub(data) {
  return authRequest('clubs', {
    method: 'POST',
    data: data
  })
}

export function updateClub(id, data) {
  return authRequest('clubs/' + id, {
    method: 'put',
    data: data
  })
}

export function deleteClub(id, data) {
  return authRequest('clubs/' + id, {
    method: 'DELETE',
    data: data
  })
}
// 加入俱乐部
export function joinClub(id, data) {
  return authRequest('club_users/' + id, {
    method: 'POST',
    data: data
  })
}
