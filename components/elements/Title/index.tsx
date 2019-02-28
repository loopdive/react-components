import React from "react";
import styled from "styled-components";
import { defaultFontSize, largeFontSize } from "../styles";

import DragAndDropBackground from "../DragAndDropBackground";

export default ({
  headline,
  subtitle
}: {
  headline: string;
  subtitle: string;
}) => {
  return (
    <Layout>
      <EmptySpace />
      <Title>
        <DragAndDropBackground />
        <Span>
          <Head contentEditable>{headline}</Head>
          <Sub>{subtitle}</Sub>
        </Span>
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

const Title = styled.div`
  /* border: 1px solid green; */
  position: relative;
  flex: 1;
  min-width: 400px;
`;

const EmptySpace = styled.div`
  display: flex;
  flex: 1 0;
  /* border: 1px solid blue; */
`;

const Span = styled.span`
  position: relative;
`;

const Head = styled.h1`
  font-size: ${largeFontSize};
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
  margin-bottom: 15rem;
  max-width: 60rem;
`;
