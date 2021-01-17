import Head from "next/head";

import utilStyles from "../../styles/utils.module.css";

import Layout from "../../components/layout"
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

      <h1 className={utilStyles.heading2Xl}>{sigData.name}</h1>

      <article className={utilStyles.headingLg}>{sigData.description}</article>

      <h2 className={utilStyles.headingXl}>Officers</h2>
      {sigData.officers.map(({ img, name, title }) => (
        <OfficerCard name={name} title={title} img={img} />
      ))}

      {/* <h2>Contact</h2>
      {Object.entries(sigData.contacts).map(([key, value]) => {
        return <a>{value}</a>;
      })} */}
    </Layout>
  );
}
