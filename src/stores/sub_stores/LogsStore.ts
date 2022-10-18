import {makeAutoObservable} from "mobx";

export default class LogsStore {
    constructor() {
        makeAutoObservable(this);
    }

    private logs: string[] | undefined

    public getLogs() {
        return this.logs;
    }

    public setLogs(logs: string[]) {
        this.logs = logs;
    }

}