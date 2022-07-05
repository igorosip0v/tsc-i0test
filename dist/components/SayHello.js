import { jsx as _jsx } from "preact/jsx-runtime";
import { useState } from "preact/hooks";
export const SayHello = (props) => {
    const [count, _setCount] = useState(1);
    return _jsx("div", { children: `Hello ${props.name} - ${count}` });
};
