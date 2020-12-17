import request from '@/utils/request';
import { validAlias } from '@/utils/validate';

/**
 * AEW Client ApplicationForm API
 */

export function ListApplicationForms(project, page) {
  return request({
    url: '/api/projects/' + validAlias(project) + '/applicationForms',
    method: 'get',
    params: page,
  });
}

export function GetApplicationForm(id) {
  return request({
    url: '/api/applicationForms/' + id,
    method: 'get',
  });
}

export function downloadFile(url) {
  return request({
    url: url,
    method: 'get',
    responseType: 'blob',
  });
}
