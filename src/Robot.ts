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
    return this.direction = newDirection;
  }
  /**
   * @returns this
   */
  public turnRight(): Directions {
    const newDirection: Directions = this.direction === Directions.WEST ? Directions.NORTH : this.direction + 1;
    return this.direction = newDirection;
  }
  /**
   * @returns return Boolean
   */
  public move(): boolean {
    switch (this.direction) {
      case Directions.NORTH:
        --this.position.y;
        break;
      case Directions.EAST:
        ++this.position.x;
        break;
      case Directions.SOUTH:
        ++this.position.y;
        break;
      case Directions.WEST:
        --this.position.x;
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
    return `${this.position.x}, ${this.position.y}, ${this.direction}`;
  }
}
