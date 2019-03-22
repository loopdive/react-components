// import Link from "next/link";
import styled from "styled-components";
import { respond } from "../styles";
import { smallFontSize } from "../styles";

interface Props {
  items: { label: string; route: string }[];
}

export default ({ items }: Props) => (
  <NavigationBar>
    {items.map(({ label, route }) => (
      /* <Link key={route} href={route}> */
      <LinkElement>{label}</LinkElement>
      /* </Link> */
    ))}
  </NavigationBar>
);

const NavigationBar = styled.nav`
  height: inherit;
  width: 70%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const LinkElement = styled.a`
  height: inherit;
  position: relative;
  color: #bbb;
  font-family: sans-serif;
  font-size: ${smallFontSize};
  letter-spacing: 2px;
  margin: 2rem;
  padding: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;

  ${respond("tab-land", "display: none;")}

  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin-top: 1.5rem;
    width: 0;
    height: 2px;
    background-color: white;
    opacity: 0.1;
  }

  &:hover::after {
    width: 100%;
    transition: 0.3s;
  }

  &:hover {
    color: white;
    transform: scale(1.05);
    transition: 0.2s;
  }
`;
