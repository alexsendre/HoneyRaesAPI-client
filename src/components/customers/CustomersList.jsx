import React, { useEffect, useState } from 'react';
import { Table } from "reactstrap";
import { Link } from "react-router-dom";
import { getCustomers } from '../../data/customersData';

export default function CustomerList() {
  const [customer, setCustomer] = useState(null)

  useEffect(() => {
    getCustomers().then(setCustomer);
  }, []);

  if (!customer) {
    return null;
  }

  return (
    <Table>
    <thead>
      <tr>
        <th>Name</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {customer.map((c) => (
        <tr key={`customer-${c.id}`}>
          <td>{c.name}</td>
          <td>
            <Link to={`${c.id}`}>Details</Link>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
  );
}
