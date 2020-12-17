import request from '@/utils/request';
import { validAlias } from '@/utils/validate';
/**
 * AEW Search API
 */

export function SearchUsers(data, page) {
  return request({
    url: 'api/admin/search/users',
    method: 'post',
    data,
    params: page,
  });
}

export function SearchTags(data, page) {
  return request({
    url: 'api/admin/search/tags',
    method: 'post',
    data,
    params: page,
  });
}

export function SearchPages(project, data, page) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/search/pages',
    method: 'post',
    data,
    params: page,
  });
}

export function SearchArticles(project, data, page) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/search/articles',
    method: 'post',
    data,
    params: page,
  });
}

export function SearchHumanResources(project, data, page) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/search/humanResources',
    method: 'post',
    data,
    params: page,
  });
}

export function SearchLessons(project, data, page) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/search/lessons',
    method: 'post',
    data,
    params: page,
  });
}

