import { Grid, GridItem } from "@chakra-ui/react/grid";

const App = () => {
  return (
    <div>
      <Grid templateAreas={{
        base: `"nav" "main" "asid"`,
        lg:`"nav nav"  "asid main"`
      }}>
        <GridItem area={"nav"} bg={"coral"}>
          Nav
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
