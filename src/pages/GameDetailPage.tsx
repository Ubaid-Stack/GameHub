import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router";
import ExpandableText from "../components/ExpandableText";
import useGames from "../hooks/useGames";
import GameAtributes from "../components/GameAtributes";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGames(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAtributes game={game} />
    </>
  );
};

export default GameDetailPage;
