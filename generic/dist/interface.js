"use strict";
var _a, _b;
function fetchData(url) {
    return { data: null, error: null };
}
let result1 = fetchData('ulr');
(_a = result1.data) === null || _a === void 0 ? void 0 : _a.name;
let result2 = fetchData('ulr');
(_b = result2.data) === null || _b === void 0 ? void 0 : _b.description;
