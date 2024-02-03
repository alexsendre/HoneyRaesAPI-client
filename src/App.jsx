import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar color="light" expand="md">
        <Nav navbar>
          <NavbarBrand href="/">Honey Rae's</NavbarBrand>
          <NavItem>
            <NavLink href="/tickets">Service Tickets</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/employees">Employees</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/customers">Customers</NavLink>
          </NavItem>
          {/* <NavItem>
            <NavLink href="/create">Submit a Ticket</NavLink>
          </NavItem> */}
        </Nav>
      </Navbar>
      <Outlet />
    </>
  );
}

export default App;
