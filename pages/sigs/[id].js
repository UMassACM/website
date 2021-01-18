import Head from "next/head";

import utilStyles from "../../styles/utils.module.css";

import { Card } from "semantic-ui-react";

import Layout from "../../components/layout";
import OfficerCard from "../../components/officerCard";

import { getAllSigsIds, getSigData } from "../../lib/sigs";

export async function getStaticPaths() {
  const paths = getAllSigsIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const sigData = await getSigData(params.id);

  return {
    props: {
      sigData,
    },
  };
}

export default function SIG({ sigData }) {
  return (
    <Layout>
      <Head>
        <title>{sigData.name}</title>
      </Head>

      <h1 className={`${utilStyles.heading2Xl} ${utilStyles.umassColor}`}>{sigData.name}</h1>

      <article className={utilStyles.headingLg}>{sigData.description}</article>

      <h2 className={utilStyles.headingXl}>Officers</h2>
      <Card.Group className={utilStyles.cardContainer}>
        {sigData.officers.map(({ img, name, title }) => (
          <OfficerCard name={name} title={title} img={img} />
        ))}
      </Card.Group>

      <h2 className={utilStyles.headingXl}>Contact</h2>
      {Object.entries(sigData.contacts).map(([key, value]) => {
        return (
          <a>
            {key} : {value}
          </a>
        );
      })}
    </Layout>
  );
}
