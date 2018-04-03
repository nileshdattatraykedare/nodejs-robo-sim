import { expect } from 'chai';
import { Directions, IRobotOptions } from '../app/Direction';
import {Robot} from '../app/Robot';

describe('Robot', () => {
  describe('#new', () => {
    it('should be initialized with the given params', () => {
      const options: IRobotOptions = { position: {x: 0, y: 0}, direction: Directions.SOUTH};
      const robot: Robot = new Robot(options);

      expect(robot.toString()).to.eq('0, 0, SOUTH');
      expect(robot.direction).to.eq(Directions.SOUTH);
    });
  });

  describe('#turnLeft', () => {
    it('should turn the robot left', () => {
      const options: IRobotOptions = { position: {x: 3, y: 3}, direction: Directions.NORTH};
      const robot: Robot = new Robot(options);
      expect(robot.direction).to.eq(Directions.NORTH);

      expect(robot.turnLeft()).to.eq(Directions.WEST);
      expect(robot.direction).to.eq(Directions.WEST);

      expect(robot.turnLeft()).to.eq(Directions.SOUTH);
      expect(robot.direction).to.eq(Directions.SOUTH);

      expect(robot.turnLeft()).to.eq(Directions.EAST);
      expect(robot.turnLeft()).to.eq(Directions.NORTH);
    });
  });

  describe('#turnRight', () => {
    it('should turn the robot right', () => {
      const options: IRobotOptions = { position: {x: 3, y: 3}, direction: Directions.NORTH};
      const robot2: Robot = new Robot(options);
      expect(robot2.direction).to.eq(Directions.NORTH);

      expect(robot2.turnRight()).to.eq(Directions.EAST);
      expect(robot2.direction).to.eq(Directions.EAST);

      expect(robot2.turnRight()).to.eq(Directions.SOUTH);
      expect(robot2.turnRight()).to.eq(Directions.WEST);
      expect(robot2.turnRight()).to.eq(Directions.NORTH);
    });
  });
});