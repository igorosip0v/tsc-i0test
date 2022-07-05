import { JSX } from "preact/jsx-runtime";
import { useState } from "preact/hooks";

export const SayHello = (props: { name: string }): JSX.Element => {
  const [count, _setCount] = useState(1);

  return <div>{`Hello ${props.name} - ${count}`}</div>;
};
