import React from "react";
import styled from "styled-components";
import DragAndDropBackground from "../../hoc/DragAndDropBackground";
import { defaultFontSize, largeFontSize } from "../../../styles";

export default ({ headline, subtitle }: { headline: string; subtitle: string }) => {
  return (
    <Layout>
      <EmptySpace />
      <Title>
        <Head>{headline}</Head>
        <Sub>{subtitle}</Sub>
      </Title>
    </Layout>
  );
};

const Layout = styled.div`
  height: calc(100vh - 15rem);
  width: 100%;
  display: flex;
  flex-flow: row;
  align-items: center;
`;

const Title = DragAndDropBackground(styled.div`
  /* border: 1px solid green; */
  position: relative;
  flex: 1;
  min-width: 400px;
  ${(props: { background: any }) => props.background}
`);

const EmptySpace = styled.div`
  display: flex;
  flex: 1 0;
  /* border: 1px solid blue; */
`;

const Head = styled.h1`
  font-size: ${largeFontSize};
  font-family: "Alte Haas Grotesk", sans-serif;
  margin-bottom: 2rem;
  outline: none;
`;

const Sub = styled.p`
  font-size: ${defaultFontSize};
  font-family: sans-serif;
  font-weight: lighter;
  letter-spacing: 2px;
  line-height: 1.5;
  color: gray;
  margin-bottom: 1rem;
  max-width: 60rem;
`;
