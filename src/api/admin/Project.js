import request from '@/utils/request';
import { validAlias } from '@/utils/validate';
/**
 * AEW Project API
 */

export function ListProjects(page) {
  return request({
    url: 'api/admin/projects',
    method: 'get',
    params: page,
  });
}

export function CreateProject(data) {
  return request({
    url: 'api/admin/projects',
    method: 'post',
    data,
  });
}

export function GetProject(project) {
  return request({
    url: 'api/admin/projects/' + validAlias(project),
    method: 'get',
  });
}

export function UpdateProject(project, data) {
  return request({
    url: 'api/admin/projects/' + validAlias(project),
    method: 'put',
    data,
  });
}

export function DeleteProject(project) {
  return request({
    url: 'api/admin/projects/' + validAlias(project),
    method: 'delete',
  });
}
