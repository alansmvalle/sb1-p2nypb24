import { Observable } from '@nativescript/core';

export class HomeViewModel extends Observable {
    private _pendingTasks: string;
    private _todayEvents: string;
    private _unreadNotifications: string;
    private _unreadMessages: string;

    constructor() {
        super();
        
        // Initialize with dummy data
        this._pendingTasks = '5 pending tasks';
        this._todayEvents = '3 events today';
        this._unreadNotifications = '2 new notifications';
        this._unreadMessages = '4 unread messages';
        
        this.notifyPropertyChanges();
    }

    get pendingTasks(): string {
        return this._pendingTasks;
    }

    get todayEvents(): string {
        return this._todayEvents;
    }

    get unreadNotifications(): string {
        return this._unreadNotifications;
    }

    get unreadMessages(): string {
        return this._unreadMessages;
    }

    private notifyPropertyChanges() {
        this.notifyPropertyChange('pendingTasks', this._pendingTasks);
        this.notifyPropertyChange('todayEvents', this._todayEvents);
        this.notifyPropertyChange('unreadNotifications', this._unreadNotifications);
        this.notifyPropertyChange('unreadMessages', this._unreadMessages);
    }
}