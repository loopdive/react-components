import React, { useState, Fragment } from "react";

import styled from "styled-components";

export default ({ children, styles, listItems }: { children: any; styles: any; listItems: string[] }) => {
  const [toggle, toggleHandler] = useState(false);

  const onMouseEnter = () => {
    toggleHandler(true);
  };

  const onMouseLeave = () => {
    toggleHandler(false);
  };
  return (
    <Fragment>
      <span {...{ onMouseEnter, onMouseLeave }}>
        {children}
        {/* <DropDown styles={styles} toggle={toggle}>
          {listItems && listItems.map(item => <li key={item}>{item}</li>)}
        </DropDown> */}
      </span>
    </Fragment>
  );
};

/* const DropDown = styled.div`
  display: inline-block;
  background: aqua;
  opacity: ${props => (props.toggle ? 1 : 0)};
  visibility: ${props => (props.toggle ? "visible" : "hidden")};
  width: 12rem;
  height: 10rem;
  transform: translateY(-0.5rem);
  ${props => props.styles}
`;
 */