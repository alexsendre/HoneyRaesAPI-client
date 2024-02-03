const _apiUrl = "/api/servicetickets";

const getServiceTickets = () => {
  return fetch(_apiUrl).then((r) => r.json());
};

//export a function here that gets a ticket by id

const getTicketById = (id) => {
  return fetch(`${_apiUrl}/${id}`).then((r) => r.json());
};

const createTickets = async (payload) => {
  const response = await fetch(_apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    console.error("Error Status:", response.status);
    console.error("Error Text:", await response.text());
    throw new Error("Process failed");
 }

  return response.json();
};

const deleteTicket = (id) => new Promise((resolve, reject) => {
  fetch(`${_apiUrl}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    // .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getServiceTickets,
  createTickets,
  getTicketById,
  deleteTicket
}
