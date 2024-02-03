import React, { useEffect, useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { getEmployees } from '../../data/employeesData';
import { getCustomers } from '../../data/customersData';
import { useNavigate } from 'react-router-dom';
import { createTickets } from '../../data/serviceTicketsData';

const initialState = {
  id: 0,
  description: "",
  emergency: false,
  employeeId: "",
  customerId: ""
}

export default function NewTicketForm() {
  const [data, setData] = useState(initialState);
  const [employees, setEmployees] = useState([]);
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getEmployees().then(setEmployees);
    getCustomers().then(setCustomers);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Sending payload:", data); // Log the payload

    createTickets(data)
    .then((newTicket) => {
      console.log("New service ticket created:", newTicket);
      navigate("/tickets/");
    })
    .catch((error) => {
      console.error("Error creating service ticket:", error);
    });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className="form">
        <h2 className="text-center mt-4 mb-3">
          Create Ticket
        </h2>
        <hr className="center w-25 mb-4" />

        <Form.Group
          className="mb-3 mt-3 input-field"
        >
          <FloatingLabel
            controlId="floatingInput1"
            label="Ticket Description"
            className="mb-3"
          >
            <Form.Control
              type="textarea"
              autoComplete="off"
              maxLength={500}
              placeholder="Describe your issue"
              name="description"
              value={data.description}
              onChange={handleChange}
              required
            />
          </FloatingLabel>
        </Form.Group>

        <Form.Group
        className="mb-3 mt-3"
        >
          <FloatingLabel controlId="floatingInput2" label="Ticket Employee" className="mb-3">
            <Form.Select
              name="employeeId"
              id="employeeId"
              onChange={handleChange}
              value={data.employeeId}
              required
            >
              <option value="">Select employee</option>
              {
                employees.map((employee) => (
                  <option
                    key={employee.id}
                    value={employee.id}
                  >
                    {employee.name}
                  </option>
                ))
              }
            </Form.Select>
          </FloatingLabel>
        </Form.Group>

        <Form.Group
        className="mb-3 mt-3"
        >
          <FloatingLabel controlId="floatingInput2" label="Ticket Customer" className="mb-3">
            <Form.Select
              name="customerId"
              id="customerId"
              onChange={handleChange}
              value={data.customerId}
              required
            >
              <option value="">Select customer</option>
              {
                customers.map((customer) => (
                  <option
                    key={customer.id}
                    value={customer.id}
                  >
                    {customer.name}
                  </option>
                ))
              }
            </Form.Select>
          </FloatingLabel>
        </Form.Group>

        <Form.Group
        className="mb-3"
        controlId="formBasicCheckbox"
      >
        <Form.Check
          className="center"
          type="switch"
          id="isEmergency"
          name="isEmergency"
          label="Emergency?"
          checked={data.isEmergency}
          onChange={(e) => {
            setData((prevState) => ({
              ...prevState,
              isEmergency: e.target.checked,
            }));
          }}
        />
      </Form.Group>

        <Form.Group className="text-center">
          <Button className="center" type="submit">
            Create
          </Button>
        </Form.Group>
      </Form>
    </>
  )
}
