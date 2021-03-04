import Head from "next/head";
import fetch from "isomorphic-unfetch";
import { Input, Grid } from "semantic-ui-react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import { route } from "next/dist/next-server/server/router";

function CaseCountry(props) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid>
        <h1 className={styles.title}>Country: {props.data.All.country}</h1>

        <p className={styles.description}>
          Confirmed infected: {props.data.All.confirmed}
        </p>

        <p className={styles.description}>
          Confirmed recovery: {props.data.All.recovered}
        </p>

        <p className={styles.description}>
          Confirmed deaths: {props.data.All.deaths}
        </p>
      </Grid>
    </div>
  );
}

export async function getServerSideProps(context) {
  const query =
    "https://covid-api.mmediagroup.fr/v1/cases?country=" +
    context.query.Country;
  const res = await fetch(query);

  const data = await res.json();

  return {
    props: { data },
  };
}
export default CaseCountry;
