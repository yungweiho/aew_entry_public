import request from '@/utils/request';
import { validAlias } from '@/utils/validate';
/**
 * AEW Editor API
 */

export function GetPageEditors(project) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/pageEditors',
    method: 'get',
  });
}

export function GetArticleEditors(project) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/articleEditors',
    method: 'get',
  });
}

