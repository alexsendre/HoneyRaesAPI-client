const _apiUrl = "/api/servicetickets";

const getServiceTickets = () => {
  return fetch(_apiUrl).then((r) => r.json());
};

const postServiceTickets = (payload) => new Promise((resolve, reject) => {
  fetch(`${_apiUrl}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then((res) => res.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getTicketById = (id) => {
  return fetch(`${_apiUrl}/${id}`).then((r) => r.json());
}

//export a function here that gets a ticket by id

export {
  getServiceTickets,
  postServiceTickets,
  getTicketById,
}
