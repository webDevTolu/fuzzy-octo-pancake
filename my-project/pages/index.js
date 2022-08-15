import Head from "next/head";
import { Fragment } from "react";
import Body from "../components/Body";
import Header from "../components/Header";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Asalytics</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <Header />
      <Body />
    </Fragment>
  );
}
