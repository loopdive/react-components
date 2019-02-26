import Link from "next/link";
import styled from "styled-components";

const NavigationBar = () => (
  <About>
    <Link href="/about">
      <LinkElement>About</LinkElement>
    </Link>

    <LinkElement>Work</LinkElement>
    <LinkElement>Contact</LinkElement>
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
