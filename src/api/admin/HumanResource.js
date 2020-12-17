import request from '@/utils/request';
import { validAlias } from '@/utils/validate';

/**
 * AEW HumanResource API
 */

export function ListHumanResourcesOfSpecialty(project, id, page) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/humanResourceSpecialties/' + id + '/humanResources',
    method: 'get',
    params: page,
  });
}

export function ListHumanResourcesOfCategory(project, id, page) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/humanResourceCategories/' + id + '/humanResources',
    method: 'get',
    params: page,
  });
}

export function ListHumanResources(project, page) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/humanResources',
    method: 'get',
    params: page,
  });
}

export function CreateHumanResource(project, data) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/humanResources',
    method: 'post',
    data,
  });
}

export function GetHumanResource(project, id) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/humanResources/' + id,
    method: 'get',
  });
}

export function UpdateHumanResource(project, id, data) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/humanResources/' + id,
    method: 'put',
    data,
  });
}

export function DeleteHumanResource(project, id) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/humanResources/' + id,
    method: 'delete',
  });
}
