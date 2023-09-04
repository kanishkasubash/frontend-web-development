"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findNeedle = void 0;
function findNeedle(haystack) {
    return `found the needle at position ${haystack.indexOf('needle')}`;
}
exports.findNeedle = findNeedle;
console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));
