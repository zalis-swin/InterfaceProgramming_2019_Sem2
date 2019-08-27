export class TodoItem {
    name: string;
    dateCreated: Date;
    dateCompleted: Date;
    completed: boolean;

    constructor(name: string) {
        this.name = name;
        this.dateCreated = new Date;
        
    }
}