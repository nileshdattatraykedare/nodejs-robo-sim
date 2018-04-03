import { IPosition } from './Position';
/**
 *
 *
 * @export
 * @class Table
 */
export default class Table {
    width: number;
    height: number;
    content: Number[][];
    constructor(width?: number, height?: number);
    /**
     * @param  {IPosition} pos
     */
    isBorder(pos: IPosition): boolean;
}
