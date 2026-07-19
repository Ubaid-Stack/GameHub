import Navbar from "../components/Navbar";
import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
    <Navbar />
    <Box padding={5} textAlign="center">
      <Heading>Oops</Heading>
      <Text>
        {isRouteErrorResponse(error)
          ? "This page does not exist."
          : "An unexpected error occurred."}
      </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
