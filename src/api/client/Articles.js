import request from '@/utils/request';
import { validAlias } from '@/utils/validate';

/**
 * AEW Client Articles API For Index
 */

export function ListArticlesOfCategory(id, page) {
  return request({
    url: 'api/articleCategories/' + id + '/articles',
    method: 'get',
    params: page,
  });
}

export function ListTopArticlesOfCategory(id, page) {
  return request({
    url: 'api/articleCategories/' + id + '/topArticles',
    method: 'get',
    params: page,
  });
}

export function ListArticlesOfTag(id, page) {
  return request({
    url: 'api/tags/' + id + '/articles',
    method: 'get',
    params: page,
  });
}

/**
 * AEW Client Articles API For Project
 */

export function ListArticles(project, page) {
  return request({
    url: 'api/projects/' + validAlias(project) + '/articles',
    method: 'get',
    params: page,
  });
}

export function GetArticle(project, id) {
  return request({
    url: 'api/projects/' + validAlias(project) + '/articles/' + id,
    method: 'get',
  });
}

export function ListArticlesOfTagInProject(project, id, page) {
  return request({
    url: 'api/projects/' + validAlias(project) + '/tags/' + id + '/articles',
    method: 'get',
    params: page,
  });
}
