import React, { useState } from "react";
import { css } from "styled-components";

export default (WrappedComponent: any) => {
  return (props: any) => {
    const [currentImage, changeImage] = useState();

    const background = css`
    background-image: url("${currentImage}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
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
      <WrappedComponent
        onDrop={imageHandler}
        onDragOver={(event: any) => event.preventDefault()}
        background={background}
        {...props}
      />
    );
  };
};
