import Image from "next/image";
import { Card } from "semantic-ui-react";

export default function OfficerCard({ name, title, img }) {
  return (
    <Card>
      <Image
        src={img}
        alt="Picture of the officer"
        width={300}
        height={500}
      />
      <Card.Header>{title}</Card.Header>
      <Card.Meta>{name}</Card.Meta>
    </Card>
  );
}
