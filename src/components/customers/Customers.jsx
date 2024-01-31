import { Link, Outlet } from "react-router-dom";

export default function Customers() {
  return (
    <>
      <h2 className="mt-3 mb-3">Customers</h2>
      <Link to="/customers/create">Add</Link>
      <Outlet />
    </>
  );
}
