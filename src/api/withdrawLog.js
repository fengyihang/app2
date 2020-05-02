import { authRequest } from '@/utils/request'

export function getWithdrawLogs(data) {
  return authRequest('club_withdraw_logs', {
    data: data
  })
}
