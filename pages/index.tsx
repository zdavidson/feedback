import type { NextPage } from "next";
import Head from "next/head";
import FeedbackBoard from "../components/views/feedback/FeedbackBoard";
import styles from "../styles/Home.module.css";

// import { Amplify, API, graphqlOperation } from "aws-amplify";
// import awsconfig from "../src/aws-exports";
// Amplify.configure(awsconfig);

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Feedback</title>
        <meta name="description" content="Feedback app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeedbackBoard />
    </div>
  );
};

export default Home;
