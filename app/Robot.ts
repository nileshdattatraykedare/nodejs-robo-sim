import { IPosition } from './Position';
import {Directions} from './Direction';
import {IRobotOptions} from './Direction';
/**
 * 
 * 
 * @export
 * @class Robot
 */
export class Robot {

  public name: string;
  public direction: Directions;
  private position: IPosition;

  constructor(options: IRobotOptions) {
    this.position = options.position;
    this.direction = options.direction;
  }
  /**
   * @returns this
   */
  public turnLeft(): Directions {
    const newDirection: Directions = this.direction === Directions.NORTH ? Directions.WEST : this.direction - 1;
    this.updatePositions();
    
    return this.direction = newDirection;
  }
  private updatePositions() {
    if (this.direction === Directions.WEST) {
      this.position.x = -this.position.x;
    }
    if (this.direction === Directions.SOUTH) {
      this.position.x = -this.position.x;
      this.position.y = -this.position.y;
    }
    if (this.direction === Directions.EAST) {
      this.position.y = -this.position.y;
    }
  }

  /**
   * @returns this
   */
  public turnRight(): Directions {
    const newDirection: Directions = this.direction === Directions.WEST ? Directions.NORTH : this.direction + 1;
    this.updatePositions();
    return this.direction = newDirection;
  }
  /**
   * @returns return Boolean
   */
  public move(): boolean {
    switch (this.direction) {
      case Directions.NORTH:
        if (this.position.y === 4) {
          return false;
        } else { ++this.position.y; }
        break;
      case Directions.EAST:
      if (this.position.x === 4) {
        return false;
      } else { ++this.position.x; }
        break;
      case Directions.SOUTH:
      if (this.position.y === -4) {
        return false;
      } else { --this.position.y; }
        break;
      case Directions.WEST:
      if (this.position.x === -4) {
        return false;
      } else { --this.position.x; }
        break;
      default:
    }
    return true;
  }
  /**
   * @param  {} {return`${this.position.x}
   * @param  {} ${this.position.y}
   */
  public toString() {
    return `${this.position.x}, ${this.position.y}, ${this.getDirectionName(this.direction)}`;
  }
  getDirectionName(direction: number){
    if(direction === 0){
      return 'NORTH';
    }else if(direction === 1){
      return 'EAST';
    }
    else if(direction === 2){
      return 'SOUTH';
    }
    else if(direction === 3){
      return 'WEST';
    }
  }
}
