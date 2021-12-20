import $axios from './request';

export function get(url, query){
  return $axios({
    url,
    method: 'GET',
    data: query,
  })
}

export function post(url, query, auth=true){
    return $axios({
      url: url,
      method: 'POST',
      data:  query,
    })
  }
