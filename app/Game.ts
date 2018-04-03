#!/usr/bin/env node
const process = require('process');
import { createInterface, ReadLineOptions } from 'readline';
import Commands from './Command';
import TableSurface from './Table';
const table = new TableSurface();
const command = new Commands(table);

const crlOptions: ReadLineOptions = {
  input: process.stdin,
  output: process.stdout,
  terminal: false,
};

process.stdout.write('Input commands are: PLACE, LEFT, RIGHT, MOVE, REPORT.\n');

const crl = createInterface(crlOptions);

crl.prompt(true);

crl.on('line', (line: string) => {
  command.execute(line);
  crl.prompt(true);
});
