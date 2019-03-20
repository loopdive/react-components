import { css } from "styled-components";
import { FaAngleDown } from "react-icons/fa";

export const dropdown = {
  button: css`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    border: none;
    margin-right: 5px;
    font-size: 17px;
    background: transparent;
    padding: 0;
    color: white;
    &:focus {
      border: none;
      outline: none;
    }
  `,
  menu: css`
    position: absolute;
    margin-left: -23px;
    margin-top: 13px;
    align-items: left;
    font-family: Helvetica, sans-serif;
    font-weight: 350;
    z-index: 4;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    background-color: rgb(40, 40, 40);
    min-width: 140px;

    div:nth-last-child(1) {
      border-bottom: none;
      overflow: hidden;
    }

    div:nth-last-child(1):hover {
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  `,
  item: css`
    color: rgb(200, 200, 200);
    padding: 11px 24px;
    text-decoration: none;
    border-top: 1px solid rgba(70, 70, 70, 0.4);
    font-family: Helvetica, sans-serif;
    font-size: 17px;
    font-weight: 300;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
      color: white;
    }
  `
};

/* export const Button = ({ label, onClick, enabled }: { label: string; onClick: () => void; enabled?: boolean }) => (
  <DropDownButton onClick={!(enabled != null) || enabled === true ? onClick : undefined}>
  {label}
    {!(enabled != null) || enabled === true ? (
      <FaAngleDown
        color="rgba(255, 255, 255, 0.3)"
        size={18}
        style={{
          marginLeft: 5,
          marginRight: 0
        }}
      />
    ) : (
      ":"
    )}
  </DropDownButton>
);
 */
