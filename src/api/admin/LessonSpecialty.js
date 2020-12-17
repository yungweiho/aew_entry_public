import request from '@/utils/request';
import { validAlias } from '@/utils/validate';

/**
 * AEW LessonSpecialties API
 */

export function ListLessonSpecialties(project) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/lessonSpecialties',
    method: 'get',
  });
}

export function CreateLessonSpecialty(project, data) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/lessonSpecialties',
    method: 'post',
    data,
  });
}

export function GetLessonSpecialty(project, id) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/lessonSpecialties/' + id,
    method: 'get',
  });
}

export function UpdateLessonSpecialty(project, id, data) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/lessonSpecialties/' + id,
    method: 'put',
    data,
  });
}

export function DeleteLessonSpecialty(project, id) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/lessonSpecialties/' + id,
    method: 'delete',
  });
}

