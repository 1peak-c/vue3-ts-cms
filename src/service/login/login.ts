import yfRequest from '../index'
import type { IAccount } from './type'

export function accountLoginRequest(account: IAccount): any {
  return yfRequest.request({
    url: '/login',
    method: 'POST',
    data: account
  })
}
export function requestUserInfoById(id: number): any {
  return yfRequest.request({
    url: '/users/' + id,
    method: 'GET'
  })
}

export function requestUserMenusById(id: number): any {
  return yfRequest.request({
    url: '/role/' + id + '/menu',
    method: 'GET'
  })
}
