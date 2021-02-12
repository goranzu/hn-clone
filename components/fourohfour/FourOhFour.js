import Link from "next/link";
import Container from "../container/Container";

export default function FourOhFour() {
  return (
    <Container>
      <p>
        Page not found... Click <Link href="/top/1">here</Link> to return to
        home page
      </p>
    </Container>
  );
}
