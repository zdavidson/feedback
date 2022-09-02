import type { NextPage } from "next";
import Head from "next/head";
import Suggestions from "../components/views/suggestions/Suggestions";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Feedback</title>
        <meta name="description" content="Feedback app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Suggestions />
    </div>
  );
};

export default Home;
