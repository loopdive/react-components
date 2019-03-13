import styled from "styled-components";
import { respond } from "../../styles/abstract/_functions";

export default styled.div`
  width: 90%;
  margin: 0 auto;
  transition: width 0.2s;
  ${respond("tab-land", "width: 90%")}
`;
