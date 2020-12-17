import request from '@/utils/request';
import { validAlias } from '@/utils/validate';
/**
 * AEW Slider API
 */

export function GetSlidersByGroupID(project, group) {
  return request({
    url: 'api/projects/' + validAlias(project) + '/sliders/groups/' + group,
    method: 'get',
  });
}
