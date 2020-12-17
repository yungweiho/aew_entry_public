import request from '@/utils/request';

/**
 * AEW Client Auth API
 */

export function login(data) {
  return request({
    url: 'api/auth/login',
    method: 'post',
    data: data,
  });
}

export function getInfo() {
  return request({
    url: 'api/auth/me',
    method: 'get',
  });
}

export function logout() {
  return request({
    url: 'api/auth/logout',
    method: 'post',
  });
}
