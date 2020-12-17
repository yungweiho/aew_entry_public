import request from '@/utils/request';
import { validAlias } from '@/utils/validate';

/**
 * AEW HumanResourceCategories API
 */

export function ListHumanResourceCategories(project) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/humanResourceCategories',
    method: 'get',
  });
}

export function CreateHumanResourceCategory(project, data) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/humanResourceCategories',
    method: 'post',
    data,
  });
}

export function GetHumanResourceCategory(project, id) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/humanResourceCategories/' + id,
    method: 'get',
  });
}

export function UpdateHumanResourceCategory(project, id, data) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/humanResourceCategories/' + id,
    method: 'put',
    data,
  });
}

export function DeleteHumanResourceCategory(project, id) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/humanResourceCategories/' + id,
    method: 'delete',
  });
}

