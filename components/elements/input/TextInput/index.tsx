import React from "react";

export default (props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
  return <input type="text" {...props} />;
};
