import Head from "next/head";
import Link from "next/link";
import { ConsoleView } from "react-device-detect";

import SIGCard from "../components/sigCard";

import { getAllSigsData } from "../lib/sigs";

import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";

export async function getStaticProps() {
  let tempData = await getAllSigsData();
  
  let tempArr = []
  tempData.forEach(element => {
    if(!(element.id=="Executive" ||element.id=="Marketing"||element.id=="Web-Dev" )) {
      tempArr.push(element);
    }
  });
  const allSigsData = tempArr;
  return {
    props: {
      allSigsData,
    },
  };
}

export default function Home({ allSigsData }) {
  console.log(allSigsData);
  return (
    <div className={styles.container1}>
      <Head>
        <title>UMass ACM</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title1}>
          <a>UMass</a> ACM
        </h1>

        <p className={styles.description}>Connecting students and technology</p>

        <section>
          <h3 className={styles.subtitle}>Special Interest Groups</h3>
          <div className={styles.grid}>

            {allSigsData.map(({ id, name }) => (
              <SIGCard key={id}>
                <Link href={`/sigs/${id}`} className={utilStyles.card}>
                  <a>{name}</a>
                </Link>
              </SIGCard>
            ))}
            
          </div>
        </section>
      </main>
    </div>
  );
}
