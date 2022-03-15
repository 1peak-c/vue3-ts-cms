import yfRequest from '../index'
import type { IAccount } from './type'

export function accountLoginRequest(account: IAccount): any {
  return yfRequest.request({
    url: '/login',
    method: 'POST',
    data: account
  })
}
