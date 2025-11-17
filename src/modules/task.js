export default class Task {
    constructor(title, description, dueDate, priority) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
    }

    toggle() {
        this.completed = !this.completed;
    }

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

}