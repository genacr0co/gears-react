import {makeAutoObservable} from "mobx";
import Loader from "./Loader";
import {AxiosResponse} from "axios";

export default class ServiceStore<PARAMS_TYPE extends any[], DATA_TYPE = any> {
    private readonly callback;
    public readonly loader;

    constructor(callback: (...args: PARAMS_TYPE) => any, isLoading: boolean) {
        makeAutoObservable(this);
        this.callback = callback;
        this.loader = new Loader(isLoading);
    }

    private data = {} as DATA_TYPE;

    private set(data: DATA_TYPE) {
        this.data = data;
    }

    public get() {
        return this.data;
    }

    public async request(
        ...params: PARAMS_TYPE
    ) {
        try {
            this.loader.set(true)
            const response = await this.callback(...params);
            this.set(response.data);
            return response;
        } catch (e: any) {
            this.set({} as DATA_TYPE)
            return e?.response;
        } finally {
            this.loader.set(false)
        }
    }
}