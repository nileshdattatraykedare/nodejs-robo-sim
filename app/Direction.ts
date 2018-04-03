import { IPosition } from './Position';
/**
 * 
 * 
 * @export
 * @enum {number}
 */
export const enum Directions {
    'NORTH',
    'EAST',
    'SOUTH',
    'WEST',
  }
  
  export interface IRobotOptions {
    position: IPosition;
    direction: Directions;
  }