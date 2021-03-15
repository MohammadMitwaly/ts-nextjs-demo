import Link from "next/link";
import styles from "../../styles/Home.module.css";

const animalsList = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Animals list</h1>

        <ul>
          <li>
            <Link href="/animals/chimpanzee">
              <a>Chimpanzee🐒</a>
            </Link>
          </li>
          <li>
            <Link href="/animals/lion">
              <a>Lion🦁</a>
            </Link>
          </li>
          <li>
            <Link href="/animals/tortoise">
              <a>Tortoise🐢</a>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default animalsList;
