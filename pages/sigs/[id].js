import Head from "next/head";

import utilStyles from "../../styles/utils.module.css";

import { Card } from "semantic-ui-react";

import Layout from "../../components/layout";
import OfficerCard from "../../components/officerCard";

import { getAllSigsIds, getSigData } from "../../lib/sigs";
import { AnimatedSocialIcon } from "react-animated-social-icons";
import {SecondFooter} from "../../components/footer";

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

export default function SIGPage({ sigData }) {
  return (
    <div>
    <Layout>
      <Head>
        <title>{sigData.name}</title>
      </Head>
      <h1 className={`${utilStyles.heading2Xl} ${utilStyles.sigTitle} ${utilStyles.centeredText} ${utilStyles.umassColor}`}>{sigData.name}</h1>
      <div className={`${utilStyles.paragraphed}`}>
      <article className={utilStyles.headingLg}>{sigData.description}</article>
      </div>
      <h2 className={utilStyles.headingXl}>Officers</h2>
      <Card.Group className={`${utilStyles.cardContainer}`}>
        {sigData.officers.map(({ img, name, title }) => (
          <OfficerCard key={name} name={name} title={title} img={img} />
        ))}
      </Card.Group>

      <h2 className={utilStyles.headingXl} >Sig Contact:</h2>
    </Layout>
    <SecondFooter>
    {Object.entries(sigData.contacts).map(([key, value]) => {
      if(key=="email") {
        return (
          <a key={key}>{value}</a>
        );
      } else {
        return (
          <AnimatedSocialIcon
            key={key}
            brandName={key}
            url={value}
            animation="float"
            defaultColor="#000000"
            hoverColor="black"
            width="2.5em"
            animationDuration={0.2}
            style={{ padding: "5%" }}
          />
        )
      }
    })}
    </SecondFooter>
    </div>
  );
}
