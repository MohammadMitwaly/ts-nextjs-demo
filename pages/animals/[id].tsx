import { useRouter } from "next/router";

export const Animal = () => {
  const router = useRouter();
  const { id } = router.query;
  return <h1>Hello {id}</h1>;
};

export default Animal;
