import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <HStack padding={4}>
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="cover"/>
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
