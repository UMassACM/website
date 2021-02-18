import React, { useState } from "react";

import Image from "next/image";
import { Card, Button } from "semantic-ui-react";

import styles from "../styles/utils.module.css";

export default function OfficerCard({ name, title, img, contacts }) {
  const [style, setStyle] = useState({ display: "none" });

  return (
    <Card
      
      className={`${styles.officerCard} ${styles.invisibleParent}`}
    >
      <Image
        src={img}
        alt={`Picture for ${name}`}
        width={300}
        height={300}
        quality={100}
      ></Image>
      <Card.Header
        className={`${styles.headingLg} ${styles.centeredText} ${styles.umassColor}`}
      >
        {title}
      </Card.Header>
      <Card.Meta className={`${styles.headingMd} ${styles.centeredText}`}>
        {name}
      </Card.Meta>
    </Card>
  );
}
