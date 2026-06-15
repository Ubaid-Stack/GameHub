import { Grid, GridItem } from "@chakra-ui/react/grid";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Grid templateAreas={{
        base: `"nav" "main" "asid"`,
        lg:`"nav nav"  "asid main"`
      }}>
        <GridItem area={"nav"}>
          <Navbar />
        </GridItem>
        <GridItem area={"asid"} bg={"gold"} display={{ base: "none", lg: "block" }}>
          Aside
        </GridItem>
        <GridItem area={"main"} bg={"dodgerblue"}>
          Main
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
