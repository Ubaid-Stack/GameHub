import {
  HStack,
  List,
  ListItem,
  Button,
  Image,
  Heading,
} from "@chakra-ui/react";
import useGenres, { type Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/imageURL";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}
const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
  const { data, isLoading } = useGenres();

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
                onClick={() => onSelectGenre(genre)}
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
