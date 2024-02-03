import { Link, Outlet } from "react-router-dom";

export default function Employees() {
  return (
    <>
      <h2 className="mt-3 mb-3">Employees</h2>
      <Link to="/employees/create">Add</Link>
      <Outlet />
    </>
  );
}
