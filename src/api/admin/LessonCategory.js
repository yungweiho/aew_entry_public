import request from '@/utils/request';
import { validAlias } from '@/utils/validate';

/**
 * AEW LessonCategories API
 */

export function ListLessonCategories(project) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/lessonCategories',
    method: 'get',
  });
}

export function CreateLessonCategory(project, data) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/lessonCategories',
    method: 'post',
    data,
  });
}

export function GetLessonCategory(project, id) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/lessonCategories/' + id,
    method: 'get',
  });
}

export function UpdateLessonCategory(project, id, data) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/lessonCategories/' + id,
    method: 'put',
    data,
  });
}

export function DeleteLessonCategory(project, id) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/lessonCategories/' + id,
    method: 'delete',
  });
}

