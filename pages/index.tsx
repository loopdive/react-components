import { EmailClient } from "../apps";
import { css } from "styled-components";
import Fullscreen from "@interfacers/react-components/components/layouts/Fullscreen";

export default () => {
  return (
    <div
      css={css`
        perspective: 1000px;
        transform-style: preserve-3d;
        ${Fullscreen}
      `}
    >
      <div
        css={css`
          ${Fullscreen}
          /* transform: translate3d(0, 0px, -1000px) rotate3d(1, 0, 0, -60deg); */
          transform-origin: bottom;
          transition: 0.3s;
          /*           &:hover {
            transform: translate3d(0, 0px, -1000px) rotate3d(1, 0, 0, 0deg);
          }
          */
        `}
      >
        <div
          css={css`
            ${Fullscreen}
            padding: 10px;
            background-color: white;
            /* border-radius: 30px; */
            /* border: 40px solid rgb(30, 30, 30); */
            box-shadow: 10px 10px 50px rgba(0, 0, 0, 0.8);
          `}
        >
          <EmailClient />
        </div>
        {/*    <div
          css={css`
            padding: 10px;
            background-color: black;
            ${Fullscreen}
            border-radius: 30px;
            border: 40px solid rgb(30, 30, 30);
            box-shadow: 10px 10px 50px rgba(0, 0, 0, 0.8);
            color: lightgray;
          `}
        >
          > ls
          <br />
          download documents
          <br />
        </div>*/}
      </div>
    </div>
  );
};
