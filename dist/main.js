var $izgIm$preactjsxdevruntime = require("preact/jsx-dev-runtime");
var $izgIm$preact = require("preact");
var $izgIm$preacthooks = require("preact/hooks");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "widget", function () { return $701ea2edfb58594c$export$f0c5cfb390964b78; }, function (v) { return $701ea2edfb58594c$export$f0c5cfb390964b78 = v; });
$parcel$export(module.exports, "Hello", function () { return $7ed9daed1f4358a0$exports.Hello; }, function (v) { return $7ed9daed1f4358a0$exports.Hello = v; });


var $7ed9daed1f4358a0$exports = {};

$parcel$export($7ed9daed1f4358a0$exports, "Hello", function () { return $7ed9daed1f4358a0$export$f7bfe31b45496d55; }, function (v) { return $7ed9daed1f4358a0$export$f7bfe31b45496d55 = v; });


const $7ed9daed1f4358a0$export$f7bfe31b45496d55 = (props)=>{
    const [count, setCount] = (0, $izgIm$preacthooks.useState)(0);
    (0, $izgIm$preacthooks.useEffect)(()=>{
        setInterval(()=>setCount((p)=>p + 1), 1000);
    }, []);
    return /*#__PURE__*/ (0, $izgIm$preactjsxdevruntime.jsxDEV)("div", {
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




const $701ea2edfb58594c$export$f0c5cfb390964b78 = (node)=>(0, $izgIm$preact.render)(/*#__PURE__*/ (0, $izgIm$preactjsxdevruntime.jsxDEV)((0, $7ed9daed1f4358a0$exports.Hello), {
        name: "test"
    }, void 0, false, {
        fileName: "src/index.tsx",
        lineNumber: 4,
        columnNumber: 46
    }, undefined), node);


//# sourceMappingURL=main.js.map
