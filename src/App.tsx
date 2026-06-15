import { Grid, GridItem } from "@chakra-ui/react/grid";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";

const App = () => {
  return (
    <>
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
        <GridItem area={"main"}>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
