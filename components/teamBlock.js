import OfficerCard from "./officerCard";

import { Card } from "semantic-ui-react";

import styles from "../styles/utils.module.css";

export default function TeamBlock({ team, officers }) {
  return (
    <div>
      <h2 className={`${styles.headingXl} ${styles.centeredText}`}>{team}</h2>
      <Card.Group className={styles.cardContainer}>
        {officers.map(({ name, title, img }) => (
          <OfficerCard name={name} title={title} img={img} />
        ))}
      </Card.Group>
    </div>
  );
}
