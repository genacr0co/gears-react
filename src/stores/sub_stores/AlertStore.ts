import {makeAutoObservable} from "mobx";

export default class AlertStore {
    constructor() {
        makeAutoObservable(this);
    }

    private alert: boolean = false;
    private alert_type: string | undefined;
    private alert_message: string | undefined;

    public setAlert(alert: boolean, alert_type?: string, alert_message?: string) {
        this.alert = alert;
        this.alert_type = alert_type;
        this.alert_message = alert_message
    }

    public getAlert() {
        return {isShow: this.alert, type: this.alert_type, message: this.alert_message}
    }
}