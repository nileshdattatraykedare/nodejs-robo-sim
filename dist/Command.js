"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var process = require("process");
var Robot_1 = require("./Robot");
var Command = /** @class */ (function () {
    function Command(table) {
        this.table = table;
    }
    Command.prototype.execute = function (command) {
        // process.stdout.write('You typed: ' + command + '\n');
        if (this.robot) {
            switch (command) {
                case 'LEFT':
                    this.robot.turnLeft();
                    break;
                case 'RIGHT':
                    this.robot.turnRight();
                    break;
                case 'MOVE':
                    var isMoved = this.robot.move();
                    if (isMoved === false) {
                        process.stdout.write('You are not allowed to move further, Robot will fall down the table. change your direction');
                    }
                    break;
                case 'REPORT':
                    process.stdout.write('OUTPUT: ' + this.robot.toString() + '\n');
                    break;
                default:
            }
        }
        if (command === 'PLACE' && !this.robot) {
            this.robot = new Robot_1.Robot({ position: { x: 0, y: 0 }, direction: 2 /* SOUTH */ });
        }
        else {
            this.setNewPosition(command);
        }
    };
    Command.prototype.setNewPosition = function (command) {
        var commandArr = command.split(" ");
        if (commandArr.length === 2 && commandArr[0] === 'PLACE') {
            var directionSting = commandArr[1];
            var directionsArr = directionSting.split(',');
            if (directionsArr.length === 3) {
                this.robot = new Robot_1.Robot({ position: { x: directionsArr[0], y: directionsArr[1] }, direction: this.getDirectionNumber(directionsArr[2]) });
            }
        }
    };
    Command.prototype.getDirectionNumber = function (directionName) {
        if (directionName === 'NORTH') {
            return 0;
        }
        else if (directionName === 'EAST') {
            return 1;
        }
        else if (directionName === 'SOUTH') {
            return 2;
        }
        else if (directionName === 'WEST') {
            return 3;
        }
    };
    return Command;
}());
exports.default = Command;
//# sourceMappingURL=Command.js.map