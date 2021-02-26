import Head from "next/head";

import Layout from "../../components/layout";
import TeamBlock from "../../components/teamBlock";

import { Card } from "semantic-ui-react";

import utilStyles from "../../styles/utils.module.css";

import { getAllOfficerTeamsData } from "../../lib/officers";

export async function getStaticProps() {
  const teamsData = await getAllOfficerTeamsData();

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
      <h1 className={`${utilStyles.heading2Xl} ${utilStyles.sigTitle} ${utilStyles.centeredText} ${utilStyles.umassColor}`} >Our Teams</h1>
      {teamsData.map(({ team, officers }) => (
        <TeamBlock key={team} team={team} officers={officers} />
      ))}
    </Layout>
  );
}
