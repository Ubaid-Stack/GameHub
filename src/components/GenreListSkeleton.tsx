import { List, ListItem, Skeleton} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <List>
      {Array(16)
        .fill(0)
        .map((_, index) => (
          <ListItem key={index} paddingY="5px">
            <Skeleton height="32px" borderRadius={8} marginRight={2} />
          </ListItem>
        ))}
    </List>
  );
};

export default GenreListSkeleton;
