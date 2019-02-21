import Logo from "../components/Logo";
import NavigationBar from "../components/NavigationBar";
import "../sass/_main.scss";
import css from "./styles.scss";

const Index = () => (
  <div className={css.layout}>
    <Logo />
    <NavigationBar />
  </div>
);

export default Index;
