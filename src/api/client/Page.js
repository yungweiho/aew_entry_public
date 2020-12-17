import request from '@/utils/request';
import { validAlias } from '@/utils/validate';
/**
 * AEW Client Page API For Index
 */

export function ListPagesOfTags(id, page) {
  return request({
    url: 'api/tags/' + id + '/pages',
    method: 'get',
    params: page,
  });
}

/**
 * AEW Client Page API For Project
 */

export function ListPages(project, page) {
  return request({
    url: 'api/projects/' + validAlias(project) + '/pages',
    method: 'get',
    params: page,
  });
}

export function ListPagesOfTagInProject(project, id, page) {
  return request({
    url: 'api/projects/' + validAlias(project) + '/tags/' + id + '/pages',
    method: 'get',
    params: page,
  });
}

export function GetPage(project, id) {
  return request({
    url: 'api/projects/' + validAlias(project) + '/pages/' + id,
    method: 'get',
  });
}

export function ListPagesOfCategory(id, page) { //
  return request({
    url: 'api/pageCategories/' + id + '/pages',
    method: 'get',
    params: page,
  });
}

