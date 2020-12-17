import request from '@/utils/request';
import { validAlias } from '@/utils/validate';

/**
 * AEW Client Lessons API For Index
 */

export function ListLessonsOfSpecialty(id, page) {
  return request({
    url: 'api/lessonSpecialties/' + id + '/lessons',
    method: 'get',
    params: page,
  });
}

export function ListLessonsOfCategory(id, page) {
  return request({
    url: 'api/lessonCategories/' + id + '/lessons',
    method: 'get',
    params: page,
  });
}

export function ListLessonsOfAuthor(id, page) {
  return request({
    url: 'api/lessonAuthors/' + id + '/lessons',
    method: 'get',
    params: page,
  });
}

export function ListLessonsOfTag(id, page) {
  return request({
    url: 'api/tags/' + id + '/lessons',
    method: 'get',
    params: page,
  });
}

/**
 * AEW Client Lessons API For Project
 */

export function ListLessons(project, page) {
  return request({
    url: 'api/projects/' + validAlias(project) + '/lessons',
    method: 'get',
    params: page,
  });
}

export function GetLesson(project, id) {
  return request({
    url: 'api/projects/' + validAlias(project) + '/lessons/' + id,
    method: 'get',
  });
}

export function ListLessonsOfTagInProject(project, id, page) {
  return request({
    url: 'api/projects/' + validAlias(project) + '/tags/' + id + '/lessons',
    method: 'get',
    params: page,
  });
}
