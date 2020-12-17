import request from '@/utils/request';

/**
 * AEW Auth API
 */

export function login(data) {
  return request({
    url: 'api/admin/auth/login',
    method: 'post',
    data: data,
  });
}

export function getInfo() {
  return request({
    url: 'api/admin/auth/me',
    method: 'get',
  });
}

export function logout() {
  return request({
    url: 'api/admin/auth/logout',
    method: 'post',
  });
}
