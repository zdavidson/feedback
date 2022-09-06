import type { NextPage } from "next";
import Head from "next/head";
import FeedbackBoard from "../components/views/feedback/FeedbackBoard";
import styles from "../styles/Home.module.css";
import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify, API, Auth, withSSRContext } from "aws-amplify";
import awsExports from "../src/aws-exports";
import { listSuggestions } from "../src/graphql/queries";
import { createSuggestion } from "../src/graphql/mutations";

Amplify.configure({ ...awsExports, ssr: true });

export async function getServerSideProps({ req }: any) {
  const SSR = withSSRContext({ req });
  const response = await SSR.API.graphql({ query: listSuggestions });

  return {
    props: {
      suggestions: response.data.listSuggestions.items,
    },
  };
}

// https://docs.amplify.aws/start/getting-started/data-model/q/integration/next/#optional-test-your-api

const Home: NextPage = ({ suggestions = [] }: any) => {
  console.log(suggestions);
  return (
    <Authenticator>
      <div className={styles.container}>
        <Head>
          <title>Feedback</title>
          <meta name="description" content="Feedback app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <FeedbackBoard />
      </div>
    </Authenticator>
  );
};

export default Home;
