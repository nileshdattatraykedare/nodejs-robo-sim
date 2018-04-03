#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var process = require('process');
var readline_1 = require("readline");
var Command_1 = require("./Command");
var Table_1 = require("./Table");
var table = new Table_1.default();
var command = new Command_1.default(table);
var crlOptions = {
    input: process.stdin,
    output: process.stdout,
    terminal: false,
};
process.stdout.write('Input commands are: PLACE, LEFT, RIGHT, MOVE, REPORT.\n');
var crl = readline_1.createInterface(crlOptions);
crl.prompt(true);
crl.on('line', function (line) {
    command.execute(line);
    crl.prompt(true);
});
//# sourceMappingURL=Game.js.map