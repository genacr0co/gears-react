import {makeAutoObservable} from "mobx";

export default class Loader {
    private isLoading: boolean = false;

    constructor(isLoading: boolean) {
        this.isLoading = isLoading;
        makeAutoObservable(this);
    }

    public setLoading(bool: boolean) {
        this.isLoading = bool;
    }

    public getLoading() {
        return this.isLoading;
    }
}