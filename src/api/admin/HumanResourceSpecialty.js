import request from '@/utils/request';
import { validAlias } from '@/utils/validate';

/**
 * AEW HumanResourceSpecialties API
 */

export function ListHumanResourceSpecialties(project) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/humanResourceSpecialties',
    method: 'get',
  });
}

export function CreateHumanResourceSpecialty(project, data) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/humanResourceSpecialties',
    method: 'post',
    data,
  });
}

export function GetHumanResourceSpecialty(project, id) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/humanResourceSpecialties/' + id,
    method: 'get',
  });
}

export function UpdateHumanResourceSpecialty(project, id, data) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/humanResourceSpecialties/' + id,
    method: 'put',
    data,
  });
}

export function DeleteHumanResourceSpecialty(project, id) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/humanResourceSpecialties/' + id,
    method: 'delete',
  });
}

