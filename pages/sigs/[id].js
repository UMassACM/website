import Head from "next/head";

import utilStyles from "../../styles/utils.module.css";

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
    <>
      <Head>
        <title>{sigData.name}</title>
      </Head>

      <h1>{sigData.name}</h1>

      <article>{sigData.description}</article>

      <h2>Officers</h2>
      {sigData.officers.map(({ img, name, title }) => (
        <OfficerCard name={name} title={title} img={img} />
      ))}

      {/* <h2>Contact</h2>
      {Object.entries(sigData.contacts).map(([key, value]) => {
        return <a>{value}</a>;
      })} */}
    </>
  );
}
