import React from "react";

const Form = (props: any) => {
  const onSubmit = (event: any) => {
    event.preventDefault();
  };
  <form onSubmit={() => onSubmit} />;
};

export default Form;
