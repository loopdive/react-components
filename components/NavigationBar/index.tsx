import Link from "next/link";
import css from "./styles.scss";

const NavigationBar = () => (
  <div className={css.layout}>
    <Link href="/about">
      <a>About</a>
    </Link>
  </div>
);

export default NavigationBar;
