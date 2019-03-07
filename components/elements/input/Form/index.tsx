import React from "react";

const Form = (props: any) => {
  const onSubmit = (event: any) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const user = [];

    // @ts-ignore
    for (let entry of formData.entries()) {
      // @ts-ignore
      user[entry[0]] = entry[1];
    }

    console.log(user);
  };
  return (
    <form onSubmit={onSubmit}>
      {props.children}

      <input type="submit" value="Submit" disabled={!props.formValidity} />
    </form>
  );
};

export default Form;
