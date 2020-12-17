import request from '@/utils/request';
import { validAlias } from '@/utils/validate';
/**
 * AEW Client Contact API
 */

export function ListProjects(project) {
  return request({
    url: 'api/projects/' + validAlias(project) + '/contact/email',
    method: 'post',
  });
}
