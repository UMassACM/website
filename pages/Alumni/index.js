import Head from "next/head";

import utilStyles from "../../styles/utils.module.css";

import { Card } from "semantic-ui-react";

import Layout from "../../components/layout";
import OfficerCard from "../../components/officerCard";

import { AlumniData } from "../../lib/alumnis";

export async function getStaticProps() {
    const AlumData = await AlumniData();
  
    return {
      props: {
        AlumData,
      },
    };
  }

export default function Alumni({AlumData}) {
    return (
        <div>
        <Layout>
        <Head>
            <title>Alumni</title>
        </Head>
        <h1 className={`${utilStyles.heading2Xl} ${utilStyles.umassColor}`}>Alumni</h1>
        <Card.Group className={utilStyles.cardContainer}>
            {AlumData.alumni.map(({ img, name,title }) => (
            <OfficerCard name={title} title={name} img={img} />
            ))}
        </Card.Group>
        </Layout>
        </div>
    );
    }