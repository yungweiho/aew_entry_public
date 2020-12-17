import request from '@/utils/request';

/**
 * AEW Search API
 */

export function SearchArticles(data, page) {
  return request({
    url: 'api/search/articles',
    method: 'post',
    data,
    params: page,
  });
}

export function SearchPages(data, page) {
  return request({
    url: 'api/search/pages',
    method: 'post',
    data,
    params: page,
  });
}

export function SearchHumanResources(data, page) {
  return request({
    url: 'api/search/humanResources',
    method: 'post',
    data,
    params: page,
  });
}

export function SearchLessons(data, page) {
  return request({
    url: 'api/search/lessons',
    method: 'post',
    data,
    params: page,
  });
}

