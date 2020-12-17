import request from '@/utils/request';

/**
 * AEW User Object
 */

class UserObject {
  List(page) {
    return request({
      url: 'api/admin/users',
      method: 'get',
      params: page,
    });
  }

  GetUser(id) {
    return request({
      url: 'api/admin/users/' + id,
      method: 'get',
    });
  }

  CreateUser(formData) {
    return request({
      url: 'api/admin/users',
      method: 'post',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: formData,
    });
  }

  UpdateUser(id, data) {
    return request({
      url: 'api/admin/users/' + id,
      method: 'put',
      data,
    });
  }

  DeleteUser(id) {
    return request({
      url: 'api/admin/users/' + id,
      method: 'delete',
    });
  }

  GetSettablePermissions() {
    return request({
      url: 'api/admin/userPermissions',
      method: 'get',
    });
  }

  UpdatePermissions(id, data) {
    return request({
      url: 'api/admin/users/' + id + '/permissions',
      method: 'put',
      data,
    });
  }

  UpdateAvatar(id, formData) {
    return request({
      url: 'api/admin/users/' + id + '/avatar',
      method: 'post',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: formData,
    });
  }
}

export { UserObject as default };
