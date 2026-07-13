import type { GameQuery } from "@/App";
import { Heading } from "@chakra-ui/react";
import usePlateforms from "../hooks/usePlateforms";
import useGenre from "../hooks/useGenre";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
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
