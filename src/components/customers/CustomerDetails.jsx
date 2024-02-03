import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "reactstrap";
import { getCustomersById } from "../../data/customersData";

export default function CustomerDetails() {
  const { id } = useParams();

  const [customer, setCustomer] = useState(null);

  //add useEffect here to get the ticket details from the API
  useEffect(() => {
    const fetchCustomerDetails = async () => {
      try {
        const customerDetails = await getCustomersById(id);
        setCustomer(customerDetails);
      } catch (error) {
        console.error("Error fetching Customer details:", error);
      }
    };

    fetchCustomerDetails();
  }, []);

  if (!customer) {
    return null;
  }

  return (
    <Table>
      <tbody>
        <tr>
          <th scope="row">Id</th>
          <td>{customer?.id}</td>
        </tr>
        <tr>
          <th scope="row">Name</th>
          <td>{customer.name}</td>
        </tr>
        <tr>
          <th scope="row">Address</th>
          <td>{customer.address}</td>
        </tr>
      </tbody>
    </Table>
  );
}
