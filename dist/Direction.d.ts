import { IPosition } from './Position';
/**
 *
 *
 * @export
 * @enum {number}
 */
export declare const enum Directions {
    'NORTH' = 0,
    'EAST' = 1,
    'SOUTH' = 2,
    'WEST' = 3,
}
export interface IRobotOptions {
    position: IPosition;
    direction: Directions;
}
