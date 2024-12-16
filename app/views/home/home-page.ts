import { EventData, Page, NavigatedData } from '@nativescript/core';
import { HomeViewModel } from './home-view-model';
import { NavigationHelper } from '../../shared/navigation/navigation-helper';

export function navigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new HomeViewModel();
}

export function onTasksTap() {
    NavigationHelper.navigate('tasks');
}

export function onCalendarTap() {
    NavigationHelper.navigate('calendar');
}

export function onNotificationsTap() {
    NavigationHelper.navigate('notifications');
}

export function onChatTap() {
    NavigationHelper.navigate('chat');
}

export function onHomeTap() {
    // Already on home page
    console.log('Already on home');
}