import { JSX } from "preact/jsx-runtime";

export const SayHello = (props: { name: string }): JSX.Element => {
  return <div>{`Hello ${props.name}`}</div>;
};
