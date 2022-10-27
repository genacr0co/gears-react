import {makeAutoObservable} from "mobx";

export default class Loader {
    private isLoading: boolean = true;

    constructor(isLoading: boolean) {
        this.isLoading = isLoading;
        makeAutoObservable(this);
    }

    public set(bool: boolean) {
        this.isLoading = bool;
    }

    public get() {
        return this.isLoading;
    }
}