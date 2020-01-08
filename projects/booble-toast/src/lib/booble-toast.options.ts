export class ToastOptions {
    time: number;
    message: string;
    type: ToastEnum;
    hasCloseButton: boolean;

    /** Requires a string message and ToastEnum css definition. Default time is 5000 miliseconds, for infinite toast change it to 0. hasCloseButton will be set to true if time = 0*/
    constructor(msg: string, type: ToastEnum, hasCloseButton?: boolean, time: number = 5000) {
        this.message = msg;
        this.type = type || ToastEnum.DANGER;
        this.time = time;
        this.hasCloseButton = hasCloseButton || false;
    }
}

export enum ToastEnum {
    SUCCESS = 'success',
    DANGER = 'danger',
    WARNING = 'warning',
    SECONDARY = 'secondary',
    PRIMARY = 'primary'
}