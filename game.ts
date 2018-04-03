export class ToyRobotException extends Error {

    private static serialVersionUID: any = '8132983514127445438L';

    public constructor(string: string) {
        super(string);
    }

}

namespace com.gvnn.trb.simulator {
    export enum Direction {
        NORTH, EAST, SOUTH, WEST
    }

    /** @ignore */
    export class Direction_$WRAPPER {
        static __static_initialized : boolean = false;
        static __static_initialize() { if(!Direction_$WRAPPER.__static_initialized) { Direction_$WRAPPER.__static_initialized = true; Direction_$WRAPPER.__static_initializer_0(); } }

        static map; public static map_$LI$() : any { Direction_$WRAPPER.__static_initialize(); if(Direction_$WRAPPER.map == null) Direction_$WRAPPER.map = <any>({}); return Direction_$WRAPPER.map; };

        static __static_initializer_0() {
            {
                let array6199 = /* Enum.values */function() { let result: number[] = []; for(let val in com.gvnn.trb.simulator.Direction) { if(!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                for(let index6198=0; index6198 < array6199.length; index6198++) {
                    let directionEnum = array6199[index6198];
                    {
                        /* put */((m,k,v) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { m.entries[i].value=v; return; } m.entries.push({key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}); })(<any>Direction_$WRAPPER.map_$LI$(), com.gvnn.trb.simulator.Direction["_$wrappers"][directionEnum].directionIndex, directionEnum);
                    }
                }
            }
        }

        /*private*/ directionIndex;

        constructor(protected _$ordinal : number, protected _$name : string, direction) {
            this.directionIndex = 0;
            this.directionIndex = direction;
        }

        public static valueOf(directionNum) : Direction {
            return /* get */((m,k) => { if(m.entries==null) m.entries=[]; for(let i=0;i<m.entries.length;i++) if(m.entries[i].key.equals!=null && m.entries[i].key.equals(k) || m.entries[i].key===k) { return m.entries[i].value; } return null; })(<any>Direction_$WRAPPER.map_$LI$(), directionNum);
        }

        /**
         * Returns the direction on the left of the current one
         * @return {com.gvnn.trb.simulator.Direction}
         */
        public leftDirection() : Direction {
            return this.rotate(-1);
        }

        /**
         * Returns the direction on the right of the current one
         * @return {com.gvnn.trb.simulator.Direction}
         */
        public rightDirection() : Direction {
            return this.rotate(1);
        }

        /*private*/ rotate(step) : Direction {
            let newIndex = (this.directionIndex + step) < 0?/* size */((m) => { if(m.entries==null) m.entries=[]; return m.entries.length; })(<any>Direction_$WRAPPER.map_$LI$()) - 1:(this.directionIndex + step) % /* size */((m) => { if(m.entries==null) m.entries=[]; return m.entries.length; })(<any>Direction_$WRAPPER.map_$LI$());
            return /* Enum.valueOf */<any>Direction[newIndex];
        }
        public name() : string { return this._$name; }
        public ordinal() : number { return this._$ordinal; }
    }
    Direction["__class"] = "com.gvnn.trb.simulator.Direction";
    Direction["__interfaces"] = ["java.lang.Comparable","java.io.Serializable"];

    Direction["_$wrappers"] = [new Direction_$WRAPPER(0, "NORTH", 0), new Direction_$WRAPPER(1, "EAST", 1), new Direction_$WRAPPER(2, "SOUTH", 2), new Direction_$WRAPPER(3, "WEST", 3)];

}
public class Position {
    x: number;
    y: number;
    direction: IDBCursorDirection;

    public Position(position: IDBCursorDirection) {
        this.x = position.getX();
        this.y = position.getY();
        this.direction = position.getDirection();
    }

    public Position(x: number, y: number, direction: IDBCursorDirection) {
        this.x = x;
        this.y = y;
        this.direction = direction;
    }

    public int getX() {
        return this.x;
    }

    public int getY() {
        return this.y;
    }

    public Direction getDirection() {
        return this.direction;
    }

    public void setDirection(Direction direction) {
        this.direction = direction;
    }

    public void change(int x, int y) {
        this.x = this.x + x;
        this.y = this.y + y;
    }

    public Position getNextPosition() throws ToyRobotException {
        if (this.direction == null)
            throw new ToyRobotException("Invalid robot direction");

        // new position to validate
        Position newPosition = new Position(this);
        switch (this.direction) {
            case NORTH:
                newPosition.change(0, 1);
                break;
            case EAST:
                newPosition.change(1, 0);
                break;
            case SOUTH:
                newPosition.change(0, -1);
                break;
            case WEST:
                newPosition.change(-1, 0);
                break;
        }
        return newPosition;
    }
}

export class SquareBoard implements Board {

    rows: number;
    columns: number;

    public SquareBoard(rows: number, columns: number) {
        this.rows = rows;
        this.columns = columns;
    }

    public isValidPosition(position: Position): boolean {
        return !(
                position.getX() > this.columns || position.getX() < 0 ||
                        position.getY() > this.rows || position.getY() < 0
        );
    }
}

export interface Board {

    public isValidPosition(position: Position);

}

export public enum Command {
    PLACE,
    MOVE,
    LEFT,
    RIGHT,
    REPORT
}

public class ToyRobot {

    private position: Position;
      ToyRobot(position: Position) {
        this.position = position;

    }

    public setPosition(position: Position): boolean {
        if (position == null)
            return false;

        this.position = position;
        return true;
    }

    public move(newPosition: Position): boolean {
        return move(this.position.getNextPosition());
    }

    /**
     * Moves the robot one unit forward in the direction it is currently facing
     *
     * @return true if moved successfully
     */
    public move(newPosition: Position): boolean {
        if (newPosition == null)
            return false;

        // change position
        this.position = newPosition;
        return true;
    }

    public  getPosition(): Position {
        return this.position;
    }

    /**
     * Rotates the robot 90 degrees LEFT
     *
     * @return true if rotated successfully
     */
    public rotateLeft(): boolean {
        if (this.position.direction == null)
            return false;

        this.position.direction = this.position.direction.leftDirection();
        return true;
    }

    /**
     * Rotates the robot 90 degrees RIGHT
     *
     * @return true if rotated successfully
     */
    public rotateRight(): boolean {
        if (this.position.direction == null)
            return false;

        this.position.direction = this.position.direction.rightDirection();
        return true;
    }

}

export class Game {
    private squareBoard;
    private robot;
    public Game(squareBoard: Board, robot: ToyRobot) {
        this.squareBoard = squareBoard;
        this.robot = robot;
    }

}