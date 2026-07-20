import { SimpleGrid, Image } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}
const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, isError } = useScreenshots(gameId);

  if (isLoading) return null;
  if (isError) throw isError;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} marginY={5}>
      {data?.results.map((file) => (
        <Image key={file.id} src={file.image} alt="game screenshot" />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
