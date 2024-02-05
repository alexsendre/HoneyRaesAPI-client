import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { getEmployees } from '../../data/employeesData';

function AssignEmployeeModal() {
  const [modal, setModal] = useState(false);
  const [employee, setEmployee] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    getEmployees().then(setEmployee);
  }, [])

  const toggle = () => setModal(!modal);

  const handleSelect = (employeeId) => {
    setSelectedEmployee(employeeId);
  };

  const assignEmployee = async () => {
    try {
      if (!selectedEmployee) {
        console.error("No employee selected");
        return;
      }

      await assignEmployeeToTicket(id, selectedEmployee);
      const updatedTicket = await getServiceTicket(id);
      setTicket(updatedTicket);
      toggle();
      setSelectedEmployee(null);
    } catch (error) {
      console.error("Error assigning employee to ticket:", error);
    }
  };

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Assign
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Assign Employee</ModalHeader>
        <ModalBody>
          <ul className='d-flex flex-row justify-content-evenly'>
            {employee.map((e) => (
                <button
                  className='assign-employees text-center'
                  key={e.id}
                  onClick={() => handleSelect(e.id)}
                  style={{
                    backgroundColor:
                      selectedEmployee === e.id
                        ? "rgb(210, 255, 210)"
                        : "rgb(209, 209, 209)",
                  }}
                >
                  {e.name}
                </button>
            ))}
          </ul>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={assignEmployee}>
            Assign
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AssignEmployeeModal;
