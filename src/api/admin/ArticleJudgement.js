import request from '@/utils/request';

/**
 * AEW ArticleJudgement API
 */

export function ListJudgingArticles(page) {
  return request({
    url: 'api/admin/judgement/articles',
    method: 'get',
    params: page,
  });
}

export function JudgeArticle(id) {
  return request({
    url: 'api/admin/judgement/articles/' + id,
    method: 'put',
  });
}
