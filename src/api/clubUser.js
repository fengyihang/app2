import { request, authRequest } from '@/utils/request'

export function getClubUsers(data) {
  return authRequest('club_users', {
    data: data
  })
}
export function getClubUser(id, data) {
  return authRequest('club_users/' + id, {
    data: data
  })
}

export function updateClubUser(id, data) {
  return authRequest('club_users/' + id, {
    method: 'PUT',
    data: data
  })
}

export function pass(id, data) {
  return authRequest('club_users/' + id, {
    method: 'PUT',
    data: data
  })
}

export function setAdmin(id) {
  return authRequest('club_users/' + id + '/setAdmin', {
    method: 'POST'
  })
}

export function addCount(id, data) {
  return authRequest('club_users/' + id + '/addCount', {
    method: 'PUT',
    data: data
  })
}

export function isMember(id) {
  return authRequest('club_users/' + id + '/is_member', {
    method: 'GET'
  })
}

export function deleteClubUser(id) {
  return authRequest('club_users/' + id, {
    method: 'DELETE'
  })
}
// 搜索俱乐部会员
export function searchClubUsers(id, data) {
  return authRequest('club_users/' + id + '/search', {
    method: 'POST',
    data: data
  })
}
