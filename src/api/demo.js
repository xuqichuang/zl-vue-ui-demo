import fetch from '@/utils/fetch'

// 删除乘机人
// contactId 乘机人contactId
export function book() {
  const data = {
    
  };
  return fetch({
    url: '/v1/book/latest',
    method: 'GET',
    data,
  });
}
export function classic() {
  const data = {
    contactId: 10
  };
  return fetch({
    url: '/v1/3/classic/latest?name=鳞次栉比',
    method: 'POST',
    data,
  });
}
export function register() {
  const data = {
    email: '',
    nickname: '姓名',
    password: '123456',
    password2: '123456',
  };
  return fetch({
    url: '/v1/user/register',
    method: 'POST',
    data,
  });
}