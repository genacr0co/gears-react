import {makeAutoObservable} from "mobx";

export default class StringValueStore {
    constructor() {
        makeAutoObservable(this);
    }

    private value: string = '';

    public set(value: string) {
        this.value = value
    }

    public get() {
        return this.value
    }

}