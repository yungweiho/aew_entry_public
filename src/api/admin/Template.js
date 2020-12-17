import request from '@/utils/request';

/**
 * AEW Template API
 */

export function ListTemplates(page) {
  return request({
    url: 'api/admin/templates',
    method: 'get',
    params: page,
  });
}
