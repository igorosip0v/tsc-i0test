"use strict";
exports.__esModule = true;
var dayjs_1 = require("dayjs");
var Test;
(function (Test) {
    Test[Test["A"] = 0] = "A";
    Test[Test["B"] = 1] = "B";
})(Test || (Test = {}));
var test = {
    a: Test.B,
    day: (0, dayjs_1["default"])()
};
exports["default"] = test;
