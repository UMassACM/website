import Image from "next/image";
import { Card } from "semantic-ui-react";

import styles from "../styles/utils.module.css"

export default function OfficerCard({ name, title, img }) {
  return (
    <Card>
      <Image
        src={img}
        alt="Picture of the officer"
        width={250}
        height={400}
      />
      <Card.Header className={styles.headingLg}>{title}</Card.Header>
      <Card.Meta className={styles.headingMd}>{name}</Card.Meta>
    </Card>
  );
}
