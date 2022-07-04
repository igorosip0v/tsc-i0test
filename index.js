"use strict";
exports.__esModule = true;
var Test;
(function (Test) {
    Test[Test["A"] = 0] = "A";
    Test[Test["B"] = 1] = "B";
})(Test || (Test = {}));
var test = Test.A;
exports["default"] = test;
