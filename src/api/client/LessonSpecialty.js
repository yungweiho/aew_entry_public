import request from '@/utils/request';
import { validAlias } from '@/utils/validate';

/**
 * AEW Client LessonSpecialties API
 */

export function ListLessonSpecialties(project) {
  return request({
    url: 'api/projects/' + validAlias(project) + '/lessonSpecialties',
    method: 'get',
  });
}
