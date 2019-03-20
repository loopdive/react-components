import { css } from "styled-components";
import { FaMailBulk } from "react-icons/fa";

export default (props: any) => (
  <div
    css={css`
      height: inherit;
      color: white;
      font-size: 22px;
      font-family: "Alte Haas Grotesk", sans-serif;
      padding: 2rem;

      display: flex;
      align-items: center;
    `}
    {...props}
  >
    <FaMailBulk />
  </div>
);
