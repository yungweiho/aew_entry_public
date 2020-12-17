import request from '@/utils/request';
import { validAlias } from '@/utils/validate';

/**
 * AEW Client HumanResourceSpecialties API
 */

export function ListHumanResourceSpecialties(project) {
  return request({
    url: 'api/projects/' + validAlias(project) + '/humanResourceSpecialties',
    method: 'get',
  });
}
