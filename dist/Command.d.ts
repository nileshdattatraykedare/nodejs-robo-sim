import Table from './Table';
export default class Command {
    private robot;
    private table;
    constructor(table: Table);
    execute(command: string): void;
}
