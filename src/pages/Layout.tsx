import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { Box } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Box padding={5}>
        <Outlet />
      </Box>
      <Analytics />
    </>
  );
};

export default Layout;
