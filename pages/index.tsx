import { Container, CssBaseline } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import {
  ContactUs,
  Greeting,
  SupportHistory,
  SupportMethods,
  Title,
} from "../components";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>함께쓰는우산 기부금 안내</title>
        <meta name="description" content="함께쓰는우산 기부금 안내" />
        <meta
          name="naver-site-verification"
          content="249f341bf63e1ba47101d77a2725258b33e52c21"
        />
        <link rel="shortcut icon" href="/insurance.png" />
      </Head>

      <main>
        <CssBaseline />
        <Container maxWidth="md">
          <Title />
          <Greeting />
          <SupportMethods />
          <ContactUs />
          <SupportHistory />
        </Container>
      </main>
    </div>
  );
};

export default Home;
