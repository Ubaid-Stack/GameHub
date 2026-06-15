import { Grid, GridItem } from "@chakra-ui/react/grid";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main" "asid"`,
          lg: `"nav nav"  "asid main"`,
        }}
      >
        <GridItem area={"nav"}>
          <Navbar />
        </GridItem>
        <GridItem area={"asid"} display={{ base: "none", lg: "block" }}>
          Aside
        </GridItem>
        <GridItem area={"main"}>Main</GridItem>
      </Grid>
    </div>
  );
};

export default App;
