import { Observable } from '@nativescript/core';
import { CalendarEvent } from './calendar-event.model';

export class CalendarViewModel extends Observable {
    private _events: Array<CalendarEvent>;
    private _currentMonth: string;

    constructor() {
        super();
        this._currentMonth = 'March 2024';
        this._events = [
            new CalendarEvent('Team Meeting', '09:00', '10:00', 'Conference Room A'),
            new CalendarEvent('Client Call', '11:00', '12:00', 'Virtual'),
            new CalendarEvent('Project Review', '14:00', '15:00', 'Meeting Room B')
        ];
        this.notifyPropertyChanges();
    }

    get events(): Array<CalendarEvent> {
        return this._events;
    }

    get currentMonth(): string {
        return this._currentMonth;
    }

    previousMonth() {
        // Implementation for previous month
        console.log('Previous month');
    }

    nextMonth() {
        // Implementation for next month
        console.log('Next month');
    }

    addEvent() {
        // Implementation for adding new event
        console.log('Add new event');
    }

    private notifyPropertyChanges() {
        this.notifyPropertyChange('events', this._events);
        this.notifyPropertyChange('currentMonth', this._currentMonth);
    }
}