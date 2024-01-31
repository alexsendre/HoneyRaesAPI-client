const _apiUrl = "/api/customers";

const getCustomers = () => {
  return fetch(_apiUrl).then((r) => r.json());
};

const getCustomersById = (id) => {
  return fetch(`${_apiUrl}/${id}`).then((r) => r.json());
}

export {
  getCustomers,
  getCustomersById
}
