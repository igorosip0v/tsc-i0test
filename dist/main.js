var $izgIm$preactjsxruntime = require("preact/jsx-runtime");
var $izgIm$preact = require("preact");
var $izgIm$preacthooks = require("preact/hooks");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "widget", function () { return $701ea2edfb58594c$export$f0c5cfb390964b78; });
$parcel$export(module.exports, "Hello", function () { return $7ed9daed1f4358a0$export$f7bfe31b45496d55; });




const $7ed9daed1f4358a0$export$f7bfe31b45496d55 = (props)=>{
    const [count, setCount] = (0, $izgIm$preacthooks.useState)(0);
    (0, $izgIm$preacthooks.useEffect)(()=>{
        setInterval(()=>setCount((p)=>p + 1), 1000);
    }, []);
    return /*#__PURE__*/ (0, $izgIm$preactjsxruntime.jsxs)("div", {
        children: [
            "Hello ",
            props.name,
            " ",
            count
        ]
    });
};




const $701ea2edfb58594c$export$f0c5cfb390964b78 = (node)=>(0, $izgIm$preact.render)(/*#__PURE__*/ (0, $izgIm$preactjsxruntime.jsx)((0, $7ed9daed1f4358a0$export$f7bfe31b45496d55), {
        name: "test"
    }), node);


//# sourceMappingURL=main.js.map
