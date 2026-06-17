import { Grid, GridItem } from "@chakra-ui/react/grid";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenres";
import PlatformsSelector from "./components/PlatformsSelector";
import type { Platform } from "./hooks/useGame";

const App = () => {
const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

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
          <GenreList selectedGenre={selectedGenre} onSelectGenre={setSelectedGenre} />
        </GridItem>
        <GridItem area={"main"}>
          <PlatformsSelector selectedPlatform={selectedPlatform} onSelectPlatform={(platform) => setSelectedPlatform(platform)} />
          <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
