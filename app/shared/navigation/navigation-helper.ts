import { Frame } from '@nativescript/core';

export class NavigationHelper {
    static navigate(page: string) {
        Frame.topmost().navigate({
            moduleName: `views/${page}/${page}-page`,
            clearHistory: false,
            animated: true,
            transition: {
                name: 'slide',
                duration: 200
            }
        });
    }
}