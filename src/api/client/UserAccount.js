import request from '@/utils/request';

/**
 * AEW User Account API
 */

export function Register(formData) {
  return request({
    url: 'api/user/register',
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: formData,
  });
}

// It will send Verification link to Account email.
export function ForgotPassword(data) {
  return request({
    url: 'api/user/forgotPassword',
    method: 'post',
    data,
  });
}

// If Token Verificatory, It will send email with new password.
export function checkVerificationToResetPassword(data) {
  return request({
    url: 'api/user/register',
    method: 'post',
    data,
  });
}

export function UpdateProfile(data) {
  return request({
    url: 'api/profile',
    method: 'put',
    data,
  });
}

export function UpdateAvatar(formData) {
  return request({
    url: 'api/profile/avatar',
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: formData,
  });
}
