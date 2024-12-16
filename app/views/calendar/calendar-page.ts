import { NavigatedData, Page } from '@nativescript/core';
import { CalendarViewModel } from './calendar-view-model';
import { NavigationHelper } from '../../shared/navigation/navigation-helper';

export function navigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new CalendarViewModel();
}

export function onHomeTap() {
    NavigationHelper.navigate('home');
}

export function onTasksTap() {
    NavigationHelper.navigate('tasks');
}

export function onCalendarTap() {
    // Already on calendar page
    console.log('Already on calendar');
}

export function onChatTap() {
    NavigationHelper.navigate('chat');
}