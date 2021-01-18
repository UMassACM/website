import Image from "next/image";
import { Card } from "semantic-ui-react";

import styles from "../styles/utils.module.css";

export default function OfficerCard({ name, title, img }) {
  return (
    <Card key={img} className={styles.officerCard}>
      <Image
        src={img}
        alt={`Picture for ${name}`}
        width={300}
        height={400}
        quality={100}
      />
      <Card.Header className={styles.headingLg}>{title}</Card.Header>
      <Card.Meta className={styles.headingMd}>{name}</Card.Meta>
    </Card>
  );
}
