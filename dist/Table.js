"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
/**
 *
 *
 * @export
 * @class Table
 */
var Table = /** @class */ (function () {
    function Table(width, height) {
        if (width === void 0) { width = 5; }
        if (height === void 0) { height = width; }
        this.width = width;
        this.height = height;
        this.content = lodash_1.fill(Array(height), lodash_1.fill(Array(width), 0));
    }
    /**
     * @param  {IPosition} pos
     */
    Table.prototype.isBorder = function (pos) {
        return (pos.x === 0)
            || (pos.x === this.width - 1)
            || (pos.y === 0)
            || (pos.y === this.height - 1);
    };
    return Table;
}());
exports.default = Table;
//# sourceMappingURL=Table.js.map