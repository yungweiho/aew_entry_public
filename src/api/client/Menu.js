import request from '@/utils/request';
import { validAlias } from '@/utils/validate';
/**
 * AEW Menu API
 */

export function GetMenus(project) {
  return request({
    url: 'api/projects/' + validAlias(project) + '/menus',
    method: 'get',
  });
}
