import Task from "./task.js"

export default class Project{
    constructor(name) {
        this.id = crypto.randomUUID();
        this.name = name;
        this.taskList = []; //creates empty taskList 

    }

    //Getters
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getTaskList() {
        return this.taskList;
    }

    //Setters
    setName(name) {
        this.name = name;
    }

    addTask(name, description, dueDate, priority) {
        const task = new Task(name, description, dueDate, priority);
        this.taskList.push(task);
    }

    removeTask(id) {
        this.taskList = this.taskList.filter( (task) => task.id != id );
    }

    findTaskById(id) {
        return this.taskList.find( (task) => task.id === id);
    }
}