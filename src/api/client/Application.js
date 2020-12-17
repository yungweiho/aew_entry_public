import request from '@/utils/request';

/**
 * AEW Client Application API
 */

export function ListApplications() {
  return request({
    url: '/api/applications',
    method: 'get',
  });
}

export function CreateApplication(id, data) {
  return request({
    url: '/api/applicationForms/' + id + '/applications',
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: data,
  });
}

export function GetApplication(id) {
  return request({
    url: '/api/applications/' + id,
    method: 'get',
  });
}

export function UpdateApplication(id, data) {
  return request({
    url: '/api/applications/' + id,
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: data,
  });
}

export function DeleteApplication(id) {
  return request({
    url: '/api/applications/' + id,
    method: 'delete',
  });
}

