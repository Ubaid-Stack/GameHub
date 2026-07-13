import usePlatforms from "./usePlateform";

const usePlateforms = (id?: number) => {
  const { data: platforms } = usePlatforms();
  return platforms?.results.find((p) => p.id === id);
};

export default usePlateforms;
