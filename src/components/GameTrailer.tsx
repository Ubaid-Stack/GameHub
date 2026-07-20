import useTrailer from "../hooks/useTrailer";

interface Props {
  gameId: number;
}
const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, isError } = useTrailer(gameId);
  if (isLoading) return null;
  if (isError) throw isError;

  const trailer = data?.results?.[0];
  const source = trailer?.data?.[480] ?? trailer?.data?.max;

  return source ? (
    <video src={source} poster={trailer?.preview} controls />
  ) : null;
};

export default GameTrailer;
