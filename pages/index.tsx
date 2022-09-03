import type { NextPage } from "next";
import Head from "next/head";
import { useState, useMemo } from "react";
import Suggestions from "../components/views/suggestions/Suggestions";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [data, setData] = useState<any>([]);

  const getData = async () =>
    fetch("/api/data")
      .then((res) => res.json())
      .then((res) => setData(res));

  useMemo(() => {
    getData();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Feedback</title>
        <meta name="description" content="Feedback app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Suggestions data={data} />
    </div>
  );
};

export default Home;
