import styled from "styled-components";
import { mediumFontSize } from "../styles";

export default () => (
  <Logo>
    inter<Span>face</Span>rs
  </Logo>
);

const Logo = styled.div`
  height: inherit;
  color: rgba(255, 255, 255, 1);
  font-size: ${mediumFontSize};
  font-family: "Alte Haas Grotesk", sans-serif;
  padding: 2rem;
  width: 30%;
  display: flex;
  align-items: center;
`;

const Span = styled.span``;
