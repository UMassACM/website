import Head from "next/head";
import Link from "next/link";

import SIGCard from "../components/sigCard";

import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>UMass ACM</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a>UMass</a> ACM
        </h1>

        <p className={styles.description}>Connecting students and technology</p>

        <section>
          <h3 className={styles.subtitle}>Special Interest Groups</h3>
          <div className={styles.grid}>
            <SIGCard key={'ml'}>
              <Link href={`/sigs/ml`} className={utilStyles.card}>
                Machine Learning
              </Link>
            </SIGCard>

            <SIGCard key={'icpc'}>
              <Link href={`/sigs/icpc`} className={utilStyles.card}>
                ICPC
              </Link>
            </SIGCard>

            <SIGCard key={'design'}>
              <Link href={`/sigs/design`} className={utilStyles.card}>
                Design
              </Link>
            </SIGCard>

            <SIGCard key={'game_dev'}>
              <Link href={`/sigs/game_dev`} className={utilStyles.card}>
                Game Development
              </Link>
            </SIGCard>

            <SIGCard key={'pm'}>
              <Link href={`/sigs/pm`} className={utilStyles.card}>
                Product Management
              </Link>
            </SIGCard>

            <SIGCard key={'blockchain'}>
              <Link href={`/sigs/blockchain`} className={utilStyles.card}>
                Blockchain
              </Link>
            </SIGCard>
          </div>
        </section>
      </main>
    </div>
  );
}
