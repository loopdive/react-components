import React from "react";
import styled from "styled-components";

interface Props {
  children: any;
}

export default ({ children }: Props) => (
  <CenteredColumn>{children}</CenteredColumn>
);

const CenteredColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch; /* border: 1px solid red; */
  align-items: center;
`;
