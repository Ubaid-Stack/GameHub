import { Analytics } from "@vercel/analytics/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformsSelector from "../components/PlatformsSelector";
import SortSelector from "../components/SortSelector";
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"asid main"`,
        }}
        templateColumns={{ base: "1fr", lg: "250px 1fr" }}
      >
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

export default HomePage;
