import { NavigatedData, Page } from '@nativescript/core';
import { NotificationsViewModel } from './notifications-view-model';
import { NavigationHelper } from '../../shared/navigation/navigation-helper';

export function navigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new NotificationsViewModel();
}

export function onHomeTap() {
    NavigationHelper.navigate('home');
}

export function onTasksTap() {
    NavigationHelper.navigate('tasks');
}

export function onCalendarTap() {
    NavigationHelper.navigate('calendar');
}

export function onNotificationsTap() {
    // Already on notifications page
    console.log('Already on notifications');
}