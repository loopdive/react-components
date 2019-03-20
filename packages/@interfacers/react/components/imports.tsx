import { FunctionComponent, ComponentClass } from "react";
export * from "./hooks";
export { default as withHooks } from "./hoc/withHooks";
import merge from "lodash.merge";
export { merge };

export function withDefaultProps(
  WrappedComponent: string | FunctionComponent<any> | ComponentClass<any, any>,
  defaultProps: {}
) {
  return (props: any) => <WrappedComponent {...merge({}, defaultProps, props)} />;
}
