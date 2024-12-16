export class Notification {
    constructor(
        public title: string,
        public message: string,
        public time: string,
        public icon: string,
        public read: boolean
    ) {}
}