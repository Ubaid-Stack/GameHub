import { Heading } from "@chakra-ui/react";
import usePlateforms from "../hooks/usePlateforms";
import useGenre from "../hooks/useGenre";
import useGameStore from "../store/gameStore";

const GameHeading = () => {
  const gameQuery = useGameStore((s) => s.gameQuery);
  const genre = useGenre(gameQuery.genreId);

  const platform = usePlateforms(gameQuery.platformId);
  const heading = `${genre?.name || ""} ${platform?.name || ""} Games`;
  return (
    <Heading as={"h1"} marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
