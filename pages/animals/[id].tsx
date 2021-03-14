import Head from "next/head";
import { useRouter } from "next/router";

const Animal = ({ animal }) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Head>
        <title>
          {animal.id}
          {animal.icon}
        </title>
      </Head>
      <div>
        <h1>{animal.id}</h1>
        <h2>Scientific name: {animal.scientific_name}</h2>
        <img src={animal.image} />
      </div>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const request = await fetch(`http://localhost:3000/${params.id}.json`);
  const result = await request.json();

  return {
    props: {
      animal: result,
    },
  };
};

export const getStaticPaths = async () => {
  const req = await fetch("http://localhost:3000/animals.json");
  const result = await req.json();

  const paths = result.map((animal) => {
    return { params: { id: animal } };
  });

  return {
    paths,
    fallback: false,
  };
};

export default Animal;
