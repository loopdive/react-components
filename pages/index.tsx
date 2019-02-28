import { Fragment } from "react";

import styled from "styled-components";
import GlobalStyle from "../styles/base/_base";
import TopBar from "../components/elements/TopBar";
import Title from "../components/elements/Title";
import ContentArea from "../components/elements/ContentArea";
import Margins from "../components/layouts/Margins";

export default () => (
  <Fragment>
    <GlobalStyle />
    <Fullscreen>
      <Margins>
        <TopBar />
        <ContentArea>
          <Title />
        </ContentArea>
      </Margins>
    </Fullscreen>
  </Fragment>
);

export const Fullscreen = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  border: 1px dashed rgba(255, 255, 0, 0.2);
`;
