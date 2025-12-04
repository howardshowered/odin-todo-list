export default class Task {
    constructor(title, description, dueDate, priority) {
        this.id = crypto.randomUUID();
        this.title = title; //should change this to name instead of title for continuity
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
    }

    toggle() {
        this.completed = !this.completed;
    }

    //Getters
    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }
    
    getDueDate() {
        return this.dueDate;
    }

    getPriority() {
        return this.priority;
    }

    getCompleted() {
        return this.completed;
    }

    //Setters
    setTitle(title) {
        this.title = title; 
    }

    setDescription(description) {
        this.description = description;
    }

    setDueDate( dueDate) {
        this.dueDate = dueDate;
    }

    setPriority(priority) {
        this.priority = priority;
    }



}