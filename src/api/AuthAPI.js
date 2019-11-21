import HttpClient from '../utils/HttpClient';

function login(data) {
  return HttpClient.post(
    '/login',
    {},
    {
      headers: {
        ...data,
      },
    }
  );
}

function logout() {
  return HttpClient.get('/logout');
}

export default {
  login,
  logout
};
