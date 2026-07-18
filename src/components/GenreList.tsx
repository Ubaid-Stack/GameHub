import {
  HStack,
  List,
  ListItem,
  Button,
  Image,
  Heading,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/imageURL";
import GenreListSkeleton from "./GenreListSkeleton";
import useGameStore from "../store/gameStore";

const GenreList = () => {
  const { data, isLoading } = useGenres();
  const selectedGenreId = useGameStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameStore((s) => s.setGenreId);
  if (isLoading) return <GenreListSkeleton />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                alt={genre.name}
                boxSize="32px"
                objectFit="cover"
                borderRadius={8}
              />
              <Button
                onClick={() => setGenreId(genre.id)}
                whiteSpace="normal"
                textAlign="left"
                fontSize="lg"
                variant="link"
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
