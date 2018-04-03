"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 *
 * @export
 * @class Robot
 */
var Robot = /** @class */ (function () {
    function Robot(options) {
        this.position = options.position;
        this.direction = options.direction;
    }
    /**
     * @returns this
     */
    Robot.prototype.turnLeft = function () {
        var newDirection = this.direction === 0 /* NORTH */ ? 3 /* WEST */ : this.direction - 1;
        return this.direction = newDirection;
    };
    /**
     * @returns this
     */
    Robot.prototype.turnRight = function () {
        var newDirection = this.direction === 3 /* WEST */ ? 0 /* NORTH */ : this.direction + 1;
        return this.direction = newDirection;
    };
    /**
     * @returns return Boolean
     */
    Robot.prototype.move = function () {
        switch (this.direction) {
            case 0 /* NORTH */:
                --this.position.y;
                break;
            case 1 /* EAST */:
                ++this.position.x;
                break;
            case 2 /* SOUTH */:
                ++this.position.y;
                break;
            case 3 /* WEST */:
                --this.position.x;
                break;
            default:
        }
        return true;
    };
    /**
     * @param  {} {return`${this.position.x}
     * @param  {} ${this.position.y}
     */
    Robot.prototype.toString = function () {
        return this.position.x + ", " + this.position.y + ", " + this.direction;
    };
    return Robot;
}());
exports.default = Robot;
//# sourceMappingURL=Robot.js.map