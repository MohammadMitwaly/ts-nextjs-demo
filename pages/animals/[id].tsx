import Head from "next/head";
import IAnimal from "../../models/interfaces/animal";
import styles from "../../styles/Home.module.css";

const Animal = ({ animal }) => {
  const { id, scientific_name, icon, image } = animal;
  return (
    <>
      <Head>
        <title>
          {id}
          {icon}
        </title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>{id}</h1>
        <h2>Scientific name: {scientific_name}</h2>
        <img
          style={{ width: "50%", borderRadius: "5%" }}
          src={image}
          alt={`Image of ${id}`}
        />
      </div>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const request = await fetch(`http://localhost:3000/${params.id}.json`);
  const result: IAnimal = await request.json();

  return {
    props: {
      animal: result,
    },
  };
};

export const getStaticPaths = async () => {
  const req = await fetch("http://localhost:3000/animals.json");
  const result = await req.json();

  const paths = result.map((animal: string) => {
    return { params: { id: animal } };
  });

  return {
    paths,
    fallback: false,
  };
};

export default Animal;
