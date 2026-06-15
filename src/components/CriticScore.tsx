import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
const color = score > 75? "green" : score > 50? "yellow" : score > 25? "orange" : "red";

  return <Badge colorScheme={color} fontSize="14px" borderRadius="4px" paddingX={1}>{score} </Badge>;
};

export default CriticScore;
