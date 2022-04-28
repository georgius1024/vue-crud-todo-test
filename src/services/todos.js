import http from "axios";
const baseUrl = process.env.VUE_APP_ENDPOINT;
const endpoint = `${baseUrl}/todos`;
export function list() {
  return http.get(endpoint).then((response) => {
    return response.data;
  });
}

export function add(todo) {
  return http.post(endpoint, todo).then((response) => {
    return response.data["_id"];
  });
}

export function update(id, todo) {
  return http.put(`${endpoint}/${id}`, todo);
}

export function remove(id) {
  return http.delete(`${endpoint}/${id}`);
}
