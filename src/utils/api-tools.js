import store from '@/store';

/**
 * Sub URL for getAPI Project ID, ex 'project1 => 1'
 *
 * @param {String} url
 */
export function subURL(url) {
  url = url.substr(7, 3);
  store.dispatch('permission/setCurrentProjectIndex', url);
  return url;
}

export function checkAlias(url) {
  var reg = /^[1-9]\d*$/;
  if (reg.test(url)){
    store.dispatch('permission/setCurrentProjectIndex', url);
    return url;
  } else {
    return url;
  }
}

// 1 => project1
export function getProjectName(val) {
  val = 'project' + val;
  return val;
}

// project1 => 1
export function getProjectID(val) {
  val = val.substr(7, 3);
  return val;
}
