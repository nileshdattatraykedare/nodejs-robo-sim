import { Directions } from './Direction';
import { IRobotOptions } from './Direction';
/**
 *
 *
 * @export
 * @class Robot
 */
export default class Robot {
    name: string;
    direction: Directions;
    private position;
    constructor(options: IRobotOptions);
    /**
     * @returns this
     */
    turnLeft(): Directions;
    /**
     * @returns this
     */
    turnRight(): Directions;
    /**
     * @returns return Boolean
     */
    move(): boolean;
    /**
     * @param  {} {return`${this.position.x}
     * @param  {} ${this.position.y}
     */
    toString(): string;
}
