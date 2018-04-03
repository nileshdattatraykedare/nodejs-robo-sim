import * as process from 'process';
import { Robot } from './Robot';
import { Directions } from './Direction';
import Table from './Table';

export default class Command {

  private robot: Robot;
  private table: Table;

  constructor(table: Table) {
    this.table = table;
  }

  public execute(command: string): void {
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
          let isMoved = this.robot.move();
          if(isMoved === false){
            process.stdout.write('You are not allowed to move further, Robot will fall down the table. change your direction')
          }
          break;
        case 'REPORT':
          process.stdout.write('OUTPUT: ' + this.robot.toString() + '\n');
          break;
        default:
      }
    }

    if (command === 'PLACE' && !this.robot) {
      this.robot = new Robot({ position: { x: 0, y: 0 }, direction: Directions.SOUTH });
    } else {
      this.setNewPosition(command);
    }
  }
  private setNewPosition(command: string) {
    const commandArr: any = command.split(" ");
    if (commandArr.length === 2 && commandArr[0] === 'PLACE') {
      const directionSting: string = commandArr[1];
      const directionsArr: any = directionSting.split(',');
      if (directionsArr.length === 3) {
        this.robot = new Robot({ position: { x: directionsArr[0], y: directionsArr[1] }, direction: this.getDirectionNumber(directionsArr[2]) });
      }
    }
  }

  getDirectionNumber(directionName: string) {
    if (directionName === 'NORTH') {
      return 0;
    } else if (directionName === 'EAST') {
      return 1;
    }
    else if (directionName === 'SOUTH') {
      return 2;
    }
    else if (directionName === 'WEST') {
      return 3;
    }
  }
}
