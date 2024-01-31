import React, { useEffect, useState } from 'react';
import { getEmployees } from '../../data/employeesData';
import { Table } from "reactstrap";
import { Link } from "react-router-dom";

export default function EmployeeList() {
  const [employee, setEmployee] = useState(null)

  useEffect(() => {
    getEmployees().then(setEmployee);
  }, []);

  if (!employee) {
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
      {employee.map((e) => (
        <tr key={`employee-${e.id}`}>
          <td>{e.name}</td>
          <td>
            <Link to={`${e.id}`}>Details</Link>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
  );
}
