import { Grid, GridItem } from "@chakra-ui/react/grid";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

const App = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main" "asid"`,
          lg: `"nav nav"  "asid main"`,
        }}
        templateColumns={{ base: "1fr", lg: "200px 1fr" }}
      >
        <GridItem area={"nav"}>
          <Navbar />
        </GridItem>
        <GridItem paddingX={5} area={"asid"} display={{ base: "none", lg: "block" }}>
          <GenreList />
        </GridItem>
        <GridItem area={"main"}>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
