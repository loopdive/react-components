import React from "react";

type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export default (props: DivProps) => <div {...props} />;
