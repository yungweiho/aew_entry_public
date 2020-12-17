import request from '@/utils/request';
import { validAlias } from '@/utils/validate';

/**
 * AEW PageCategory API
 */

export function ListPageCategories(project, page) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/pageCategories',
    method: 'get',
    params: page,
  });
}

export function CreatePageCategory(project, data) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/pageCategories',
    method: 'post',
    data,
  });
}

export function GetPageCategory(project, id) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/pageCategories/' + id,
    method: 'get',
  });
}

export function UpdatePageCategory(project, id, data) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/pageCategories/' + id,
    method: 'put',
    data,
  });
}

export function DeletePageCategory(project, id) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/pageCategories/' + id,
    method: 'delete',
  });
}

export function ListPageOfCategory(project, id, page) {
  return request({
    url: 'api/admin/projects/' + project + '/pageCategories/' + id + '/pages',
    method: 'get',
    params: page,
  });
}
