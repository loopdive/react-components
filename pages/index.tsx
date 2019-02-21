import Link from "next/link";
import "../sass/_main.scss";
import css from "./styles.scss";

const Index = () => (
  <div className={css.example}>
    <h1>Interfacers</h1>
    <Link href="/about">
      <a>About</a>
    </Link>
  </div>
);

export default Index;
