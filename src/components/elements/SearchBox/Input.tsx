import React from "react";

type InputProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export default (props: InputProps) => <input {...props} />;
