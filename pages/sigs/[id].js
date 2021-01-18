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
      {sigData.officers.forEach((officer) => {
        <OfficerCard>
          <div className={utilStyles.card}>
            <img href={officer.img} />
            <h4>{officer.name}</h4>
            {officer.title}
          </div>
        </OfficerCard>;
      })}

      <h2>Contact</h2>
      {Object.entries(sigData.contacts).map(([key, value]) => {
          console.log(`${key} : ${value}`);
        <OfficerCard>
            <title>
                {key}
            </title>
        {value}
        </OfficerCard>
      })}
    </>
  );
}
