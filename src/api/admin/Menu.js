import request from '@/utils/request';
import { validAlias } from '@/utils/validate';
/**
 * AEW Menu API
 */

export function GetMenus(project) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/menus',
    method: 'get',
  });
}

export function CreateMenuItem(project, data) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/menus',
    method: 'post',
    data,
  });
}

export function GetMenuItem(project, id) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/menus/' + id,
    method: 'get',
  });
}

export function UpdateMenuItem(project, id, data) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/menus/' + id,
    method: 'put',
    data,
  });
}

export function DeleteMenuItem(project, id) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/menus/' + id,
    method: 'delete',
  });
}
