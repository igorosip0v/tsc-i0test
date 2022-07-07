import {jsxDEV as $2FoYO$jsxDEV} from "preact/jsx-dev-runtime";
import {render as $2FoYO$render} from "preact";
import {useState as $2FoYO$useState, useEffect as $2FoYO$useEffect} from "preact/hooks";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $f741c1e1c3470416$exports = {};

$parcel$export($f741c1e1c3470416$exports, "widget", function () { return $f741c1e1c3470416$export$f0c5cfb390964b78; }, function (v) { return $f741c1e1c3470416$export$f0c5cfb390964b78 = v; });
$parcel$export($f741c1e1c3470416$exports, "Hello", function () { return $964f8be07b3e6a5f$exports.Hello; }, function (v) { return $964f8be07b3e6a5f$exports.Hello = v; });


var $964f8be07b3e6a5f$exports = {};

$parcel$export($964f8be07b3e6a5f$exports, "Hello", function () { return $964f8be07b3e6a5f$export$f7bfe31b45496d55; }, function (v) { return $964f8be07b3e6a5f$export$f7bfe31b45496d55 = v; });


const $964f8be07b3e6a5f$export$f7bfe31b45496d55 = (props)=>{
    const [count, setCount] = (0, $2FoYO$useState)(0);
    (0, $2FoYO$useEffect)(()=>{
        setInterval(()=>setCount((p)=>p + 1), 1000);
    }, []);
    return /*#__PURE__*/ (0, $2FoYO$jsxDEV)("div", {
        children: [
            "Hello ",
            props.name,
            " ",
            count
        ]
    }, void 0, true, {
        fileName: "src/components/hello/index.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, undefined);
};




const $f741c1e1c3470416$export$f0c5cfb390964b78 = (node)=>(0, $2FoYO$render)(/*#__PURE__*/ (0, $2FoYO$jsxDEV)((0, $964f8be07b3e6a5f$exports.Hello), {
        name: "test"
    }, void 0, false, {
        fileName: "src/index.tsx",
        lineNumber: 4,
        columnNumber: 46
    }, undefined), node);


export {$f741c1e1c3470416$export$f0c5cfb390964b78 as widget, $964f8be07b3e6a5f$export$f7bfe31b45496d55 as Hello, $f741c1e1c3470416$exports as default};
//# sourceMappingURL=module.js.map
