import Head from "next/head";

import Layout from "../../components/layout";
import TeamBlock from "../../components/teamBlock";

import { Card } from "semantic-ui-react";

import styles from "../../styles/utils.module.css";

import { getAllOfficerTeamsData } from "../../lib/officers";

export async function getStaticProps() {
  const teamsData = await getAllOfficerTeamsData();

  console.log(teamsData)
  return {
    props: {
      teamsData,
    },
  };
}

export default function OfficersPage({ teamsData }) {
  return (
    <Layout>
      <Head>
        <title>Officers</title>
      </Head>
      <h1 className={styles.heading2Xl}>Our Teams</h1>
      {teamsData.map(({ team, officers }) => (
        <TeamBlock team={team} officers={officers} />
      ))}
    </Layout>
  );
}
