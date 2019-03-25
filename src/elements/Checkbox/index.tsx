import React, { Fragment } from "react";

const Checkbox = ({
  label,
  input
}: {
  input: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
  label?: React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
}) => (
  <Fragment>
    <input {...input} />
    <label {...label} />
  </Fragment>
);

export default Checkbox;
