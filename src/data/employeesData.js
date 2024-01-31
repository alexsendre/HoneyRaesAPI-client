const _apiUrl = "/api/employees";

const getEmployees = () => {
  return fetch(_apiUrl).then((r) => r.json());
};

const getEmployeesById = (id) => {
  return fetch(`${_apiUrl}/${id}`).then((r) => r.json());
}

export {
  getEmployees,
  getEmployeesById
}
