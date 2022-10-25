import {makeAutoObservable} from "mobx";
import Loader from "./Loader";

export class ServiceStore<PARAMS_TYPE = any, DATA_TYPE = any> {
    private readonly callback: (args: PARAMS_TYPE) => any;
    private readonly isLoading: boolean = false;

    constructor(callback: (args: PARAMS_TYPE) => any, isLoading: boolean) {
        makeAutoObservable(this);
        this.callback = callback;
        this.isLoading = isLoading;
    }

    public readonly loader = new Loader(this.isLoading);
    private data = {} as DATA_TYPE;

    private set(data: DATA_TYPE) {
        this.data = data;
    }

    public get() {
        return this.data;
    }

    public async request(
        params: PARAMS_TYPE
    ) {
        try {
            this.loader.set(true)
            const response: any = await this.callback(params);
            this.set(response?.data);
            return response;
        } catch (e: any) {
            return e?.response;
        } finally {
            this.loader.set(false)
        }
    }
}