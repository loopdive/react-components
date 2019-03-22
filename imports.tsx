import { FunctionComponent, ComponentClass } from "react";
import merge from "lodash.merge";
export * from "./hooks";
export { default as withHooks } from "./hooks/withHooks";
export { merge };

export function withDefaultProps(
  WrappedComponent: string | FunctionComponent<any> | ComponentClass<any, any>,
  defaultProps: {}
) {
  return (props: any) => (
    <WrappedComponent {...merge({}, defaultProps, props)} />
  );
}
