import React, { useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';

const initialState = {
  id: Number,
  description: String,
  emergency: Boolean,
  employeeId: String,
  customerId: String
}

export default function NewTicketForm() {
  const [data, setData] = useState(initialState);
  const [employee, setEmployee] = useState([]);


  return (
    <>
      <Form onSubmit={handleSubmit} className="form">
        <h2 className="text-center mt-4 mb-3">
          Create Ticket
        </h2>
        <hr className="center w-10 mb-4" />

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
            name="employee"
            onChange={handleChange}
            value={data.employeeId}
            required
          >
            <option value="">Select employee</option>
            {
              employees.map((employee) => (
                <option
                  key={employee.Id}
                >
                  {employee.Name}
                </option>
              ))
            }
          </Form.Select>
        </FloatingLabel>
      </Form.Group>

        <Form.Group className="text-center">
          <Button className="center" type="submit">
            {obj.fbK ? 'Update' : 'Create'}
          </Button>
        </Form.Group>
      </Form>
    </>
  )
}
