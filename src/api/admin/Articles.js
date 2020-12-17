import request from '@/utils/request';
import { validAlias } from '@/utils/validate';

/**
 * AEW Articles API
 */

export function ListArticlesOfCategory(project, id, page) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/articleCategories/' + id + '/articles',
    method: 'get',
    params: page,
  });
}

export function ListArticles(project, page) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/articles',
    method: 'get',
    params: page,
  });
}

export function CreateArticle(project, data) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/articles',
    method: 'post',
    data,
  });
}

export function GetArticle(project, id) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/articles/' + id,
    method: 'get',
  });
}

export function UpdateArticle(project, id, data) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/articles/' + id,
    method: 'put',
    data,
  });
}

export function DeleteArticle(project, id) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/articles/' + id,
    method: 'delete',
  });
}

export function AskJudgement(project, id) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/articles/' + id + '/judgement/ask',
    method: 'put',
  });
}

export function CancelJudgement(project, id) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/articles/' + id + '/judgement/cancel',
    method: 'put',
  });
}
