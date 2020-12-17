import request from '@/utils/request';
import { validAlias } from '@/utils/validate';
/**
 * AEW ArticleCategory API
 */

export function ListArticleCategories(project, page) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/articleCategories',
    method: 'get',
    params: page,
  });
}

export function CreateArticleCategory(project, data) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/articleCategories',
    method: 'post',
    data,
  });
}

export function GetArticleCategory(project, id) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/articleCategories/' + id,
    method: 'get',
  });
}

export function UpdateArticleCategory(project, id, data) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/articleCategories/' + id,
    method: 'put',
    data,
  });
}

export function DeleteArticleCategory(project, id) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/articleCategories/' + id,
    method: 'delete',
  });
}

