import { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import { completeTicket, deleteTicket, getServiceTickets } from "../../data/serviceTicketsData";
import { Link } from "react-router-dom";

export default function TicketsList() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    getServiceTickets().then(setTickets);
  }, [tickets]);

  const removeTicket = (id) => {
    if (window.confirm("Delete ticket?")) {
      deleteTicket(id);
    }
  }

  const completed = (id) => {
    completeTicket(id);
  };

  return (
    <Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Description</th>
          <th>Emergency?</th>
          <th>Date Completed</th>
        </tr>
      </thead>
      <tbody>
        {tickets.map((t) => (
          <tr key={`ticket-${t.id}`}>
            <th scope="row">{t.id}</th>
            <td>{t.description}</td>
            <td>{t.emergency ? "yes" : "no"}</td>
            <td>{t.dateCompleted?.split("T")[0] || "Incomplete"}</td>
            <td>
              <Link to={`${t.id}`}>Details</Link>
            </td>
            <td>
              <Button color="danger" size="sm" onClick={() => removeTicket(t.id)}>Delete</Button>
              {t.dateCompleted ? '' : <Button color="success" size="sm" className="mx-3" onClick={() => completed(t.id)}>Complete</Button>}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
