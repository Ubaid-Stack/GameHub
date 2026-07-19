import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main id="main-content">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
