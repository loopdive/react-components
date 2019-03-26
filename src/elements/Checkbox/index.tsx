import React, { Fragment } from "react";

const Checkbox = ({
  label,
  input,
  box
}: {
  input: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  label?: React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >;
  box?: React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
}) => (
  <div {...box}>
    <input {...input} />
    <label {...label} />
  </div>
);

export default Checkbox;
