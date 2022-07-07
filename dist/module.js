import {jsx as $2FoYO$jsx, jsxs as $2FoYO$jsxs} from "preact/jsx-runtime";
import {render as $2FoYO$render} from "preact";
import {useState as $2FoYO$useState, useEffect as $2FoYO$useEffect} from "preact/hooks";





const $964f8be07b3e6a5f$export$f7bfe31b45496d55 = (props)=>{
    const [count, setCount] = (0, $2FoYO$useState)(0);
    (0, $2FoYO$useEffect)(()=>{
        setInterval(()=>setCount((p)=>p + 1), 1000);
    }, []);
    return /*#__PURE__*/ (0, $2FoYO$jsxs)("div", {
        children: [
            "Hello ",
            props.name,
            " ",
            count
        ]
    });
};




const $f741c1e1c3470416$export$f0c5cfb390964b78 = (node)=>(0, $2FoYO$render)(/*#__PURE__*/ (0, $2FoYO$jsx)((0, $964f8be07b3e6a5f$export$f7bfe31b45496d55), {
        name: "test"
    }), node);


export {$f741c1e1c3470416$export$f0c5cfb390964b78 as widget, $964f8be07b3e6a5f$export$f7bfe31b45496d55 as Hello};
//# sourceMappingURL=module.js.map
