import { NavigatedData, Page } from '@nativescript/core';
import { TasksViewModel } from './tasks-view-model';
import { NavigationHelper } from '../../shared/navigation/navigation-helper';

export function navigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new TasksViewModel();
}

export function onHomeTap() {
    NavigationHelper.navigate('home');
}

export function onTasksTap() {
    // Already on tasks page
    console.log('Already on tasks');
}

export function onCalendarTap() {
    NavigationHelper.navigate('calendar');
}

export function onChatTap() {
    NavigationHelper.navigate('chat');
}