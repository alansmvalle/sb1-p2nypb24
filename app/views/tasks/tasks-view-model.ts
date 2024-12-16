import { Observable } from '@nativescript/core';
import { Task } from './task.model';

export class TasksViewModel extends Observable {
    private _tasks: Array<Task>;

    constructor() {
        super();
        this._tasks = [
            new Task('Complete project proposal', '2024-03-20', false),
            new Task('Review team updates', '2024-03-19', true),
            new Task('Schedule client meeting', '2024-03-21', false),
        ];
        this.notifyPropertyChange('tasks', this._tasks);
    }

    get tasks(): Array<Task> {
        return this._tasks;
    }

    addTask() {
        // Implementation for adding new task
        console.log('Add new task');
    }
}