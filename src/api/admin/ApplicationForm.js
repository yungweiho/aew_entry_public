import request from '@/utils/request';
import { validAlias } from '@/utils/validate';
/**
 * AEW ApplicationForm API
 */

export function ListApplicationForms(project, page) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/applicationForms',
    method: 'get',
    params: page,
  });
}

export function CreateApplicationForm(project, data) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/applicationForms',
    method: 'post',
    data,
  });
}

export function GetApplicationForm(project, id) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/applicationForms/' + id,
    method: 'get',
  });
}

export function UpdateApplicationForm(project, id, data) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/applicationForms/' + id,
    method: 'put',
    data,
  });
}

export function DeleteApplicationForm(project, id) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/applicationForms/' + id,
    method: 'delete',
  });
}
