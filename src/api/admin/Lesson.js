import request from '@/utils/request';
import { validAlias } from '@/utils/validate';

/**
 * AEW Lessons API
 */

export function ListLessonsOfSpecialty(project, id, page) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/lessonSpecialties/' + id + '/lessons',
    method: 'get',
    params: page,
  });
}

export function ListLessonsOfCategory(project, id, page) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/lessonCategories/' + id + '/lessons',
    method: 'get',
    params: page,
  });
}

export function ListLessons(project, page) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/lessons',
    method: 'get',
    params: page,
  });
}

export function CreateLesson(project, data) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/lessons',
    method: 'post',
    data,
  });
}

export function GetLesson(project, id) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/lessons/' + id,
    method: 'get',
  });
}

export function UpdateLesson(project, id, data) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/lessons/' + id,
    method: 'put',
    data,
  });
}

export function DeleteLesson(project, id) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/lessons/' + id,
    method: 'delete',
  });
}
