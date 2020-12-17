import request from '@/utils/request';
import { validAlias } from '@/utils/validate';

/**
 * AEW Client LessonCategories API
 */

export function ListLessonCategories(project) {
  return request({
    url: 'api/projects/' + validAlias(project) + '/lessonCategories',
    method: 'get',
  });
}
