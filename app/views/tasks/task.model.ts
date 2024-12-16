export class Task {
    constructor(
        public title: string,
        public dueDate: string,
        public completed: boolean
    ) {}

    toggleComplete() {
        this.completed = !this.completed;
    }

    showOptions() {
        // Implementation for showing task options
        console.log('Show task options');
    }
}