import request from '@/utils/request';
import { validAlias } from '@/utils/validate';
/**
 * AEW Page API
 */

export function ListPagesOfCategory(project, id, page) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/pageCategories/' + id + '/pages',
    method: 'get',
    params: page,
  });
}

export function ListPages(project, page) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/pages',
    method: 'get',
    params: page,
  });
}

export function CreatePage(project, data) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/pages',
    method: 'post',
    data,
  });
}

export function GetPage(project, id) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/pages/' + id,
    method: 'get',
  });
}

export function UpdatePage(project, id, data) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/pages/' + id,
    method: 'put',
    data,
  });
}

export function DeletePage(project, id) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/pages/' + id,
    method: 'delete',
  });
}
