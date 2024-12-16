import { Observable } from '@nativescript/core';
import { Notification } from './notification.model';

export class NotificationsViewModel extends Observable {
    private _notifications: Array<Notification>;

    constructor() {
        super();
        this._notifications = [
            new Notification('New Task Assigned', 'You have been assigned to review the project proposal', '10m ago', '&#xf0ae;', false),
            new Notification('Meeting Reminder', 'Team meeting starts in 30 minutes', '1h ago', '&#xf133;', true),
            new Notification('Chat Message', 'John commented on your task', '2h ago', '&#xf086;', false)
        ];
        this.notifyPropertyChange('notifications', this._notifications);
    }

    get notifications(): Array<Notification> {
        return this._notifications;
    }
}