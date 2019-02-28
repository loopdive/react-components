import React from "react";
import styled from "styled-components";

import { positionAbsoluteFill } from "../styles";

export default () => {
  return <Box />;
};

const Box = styled.div`
  background-image: url("https://images.unsplash.com/photo-1551158025-3c01098e3f16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  ${positionAbsoluteFill}
  z-index: -1;
  opacity: 0.3;
`;
