import request from '@/utils/request';
import { validAlias } from '@/utils/validate';
/**
 * AEW Project API
 */

export function ListProjects(page) {
  return request({
    url: 'api/projects',
    method: 'get',
    params: page,
  });
}

export function GetProject(project) {
  return request({
    url: 'api/projects/' + validAlias(project),
    method: 'get',
  });
}
