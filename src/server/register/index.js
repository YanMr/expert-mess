import { get, post } from '@/axios';

// 测试get
export const testGet = (query) => {
  return get('/app/test' , query)
}

// 测试post
export const testPost = (query) => {
  return post('/app/post' , query)
}
