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

    public log(id: string, ...args: any) {
        if (this.logs !== undefined) {
            this.logs.some((e) => {
                if (e === id) {
                    console.log(...args)
                }
            })
        }
    }
}