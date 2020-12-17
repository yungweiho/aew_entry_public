import request from '@/utils/request';
import { validAlias } from '@/utils/validate';

/**
 * AEW HumanResourceCategories API
 */

export function ListHumanResourceCategories(project) {
  return request({
    url: 'api/projects/' + validAlias(project) + '/humanResourceCategories',
    method: 'get',
  });
}

