"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var process = require("process");
var Robot_1 = require("./Robot");
var Command = /** @class */ (function () {
    function Command(table) {
        this.table = table;
    }
    Command.prototype.execute = function (command) {
        if (this.robot) {
            switch (command) {
                case 'LEFT':
                    this.robot.turnLeft();
                    break;
                case 'RIGHT':
                    this.robot.turnRight();
                    break;
                case 'MOVE':
                    this.robot.move();
                    break;
                case 'REPORT':
                    process.stdout.write(this.robot.toString() + '\n');
                    break;
                default:
            }
        }
        if (command === 'PLACE' && !this.robot) {
            this.robot = new Robot_1.default({ position: { x: 3, y: 3 }, direction: 1 /* EAST */ });
        }
    };
    return Command;
}());
exports.default = Command;
//# sourceMappingURL=Command.js.map