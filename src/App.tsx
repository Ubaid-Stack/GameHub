import { Box, Flex } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react/grid";
import { Analytics } from "@vercel/analytics/react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import Navbar from "./components/Navbar";
import PlatformsSelector from "./components/PlatformsSelector";
import SortSelector from "./components/SortSelector";

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
        <GridItem
          paddingX={5}
          area={"asid"}
          display={{ base: "none", lg: "block" }}
        >
          <GenreList />
        </GridItem>
        <GridItem area={"main"}>
          <Box paddingLeft={2}>
            <GameHeading />
            <Flex marginBottom={5}>
              <Box marginRight={5}>
                <PlatformsSelector />
              </Box>
              <SortSelector />
            </Flex>
          </Box>
          <GameGrid />
        </GridItem>
      </Grid>
      <Analytics />
    </>
  );
};

export default App;
