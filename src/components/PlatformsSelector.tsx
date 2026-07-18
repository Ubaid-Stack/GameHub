import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlateform";
import { BsChevronDown } from "react-icons/bs";
import usePlateforms from "../hooks/usePlateforms";
import useGameStore from "../store/gameStore";

const PlatformsSelector = () => {
  const { data, error } = usePlatforms();
  const selectedPlatformId = useGameStore((s) => s.gameQuery.platformId);

  const onSelectPlatform = useGameStore((s) => s.setPlatformId);
  const selectedPlatform = usePlateforms(selectedPlatformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformsSelector;
