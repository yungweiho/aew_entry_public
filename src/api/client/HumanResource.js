import request from '@/utils/request';
import { validAlias } from '@/utils/validate';

/**
 * AEW Client HumanResource API For Index
 */

export function ListHumanResourcesOfSpecialty(id, page) {
  return request({
    url: 'api/humanResourceSpecialties/' + id + '/humanResources',
    method: 'get',
    params: page,
  });
}

export function ListHumanResourcesOfCategory(id, page) {
  return request({
    url: 'api/humanResourceCategories/' + id + '/humanResources',
    method: 'get',
    params: page,
  });
}

export function ListHumanResourcesOfTag(id, page) {
  return request({
    url: 'api/tags/' + id + '/humanResources',
    method: 'get',
    params: page,
  });
}

/**
 * AEW Client HumanResource API For Project
 */

export function ListHumanResources(project, page) {
  return request({
    url: 'api/projects/' + validAlias(project) + '/humanResources',
    method: 'get',
    params: page,
  });
}

export function GetHumanResource(project, id) {
  return request({
    url: 'api/projects/' + validAlias(project) + '/humanResources/' + id,
    method: 'get',
  });
}

export function ListHumanResourceOfTagInProject(project, id) {
  return request({
    url: 'api/projects/' + validAlias(project) + '/tags/' + id + '/humanResources',
    method: 'get',
  });
}

