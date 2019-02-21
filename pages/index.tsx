import Link from "next/link";
import css from "./styles.scss";

const Index = () => (
  <div className={css.example}>
    <p>Hello Djavan!</p>
    <Link href="/about">
      <a>About</a>
    </Link>
  </div>
);

export default Index;
