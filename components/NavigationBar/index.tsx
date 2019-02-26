import Link from "next/link";
import styled from "styled-components";

interface Props {
  items: { label: string; route: string }[];
}

const NavigationBar = ({ items }: Props) => (
  <About>
    {items.map(({ label, route }) => (
      <Link key={route} href={route}>
        <LinkElement>{label}</LinkElement>
      </Link>
    ))}
  </About>
);

const About = styled.nav`
  width: 70%;
`;

const LinkElement = styled.a`
  color: red;
  padding: 0 1rem;
  cursor: pointer;
  float: right;
`;

export default NavigationBar;
