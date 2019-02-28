import React, { useState } from "react";
import styled from "styled-components";

import { positionAbsoluteFill } from "../styles";

export default () => {
  const [currentImage, changeImage] = useState();

  const Box = styled.div`
    background-image: url("${currentImage}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    ${positionAbsoluteFill}
    cursor: pointer;
    
  `;

  const imageHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    const reader = new FileReader();
    reader.onload = function(event) {
      // @ts-ignore
      changeImage(event.target.result);
    };
    reader.readAsDataURL(event.dataTransfer.files[0]);
  };

  return (
    <Box onDrop={imageHandler} onDragOver={event => event.preventDefault()} />
  );
};
