import HttpClient from '../utils/HttpClient';

function search(data) {
  return HttpClient.post('/v1/admins/search', data);
}

function create(data) {
 return HttpClient.post('/v1/admins', data);
}

function get(id) {
 return HttpClient.get(`/v1/admins/${id}`);
}

function update(id, data) {
 return HttpClient.put(`/v1/admins/${id}`, data);
}

function del(id) {
 return HttpClient.delete(`/v1/admins/${id}`);
}

export default {
 search,
 create,
 get,
 update,
 del
}
