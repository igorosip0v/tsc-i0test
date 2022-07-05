var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import { jsx as _jsx } from "preact/jsx-runtime";
import { useState } from "preact/hooks";
export var SayHello = function (props) {
    var _a = __read(useState(1), 2), count = _a[0], _setCount = _a[1];
    return _jsx("div", { children: "Hello ".concat(props.name, " - ").concat(count) });
};
