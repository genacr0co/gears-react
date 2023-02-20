import {makeAutoObservable} from "mobx";
import i18n from "../../i18n/i18n";
import {ILang} from "../../types/ILang";

export default class LangStore {
    constructor() {
        makeAutoObservable(this);
    }

    private langs: ILang[] = [];

    public getAll() {
        return this.langs
    }

    public get(value: string) {
        return this.langs.find(lang => lang.value === value);
    }

    public init(langs: ILang[], fallbackLng: string) {
        this.langs = langs;

        i18n.init({
                resources: this.getResources(),
                lng: JSON.parse(localStorage.getItem('language')!),
                fallbackLng: fallbackLng
            }
        )
    }

    private getResources() {
        interface LooseObject {
            [key: string]: any
        }

        const resources: LooseObject = {}

        for (let i = 0; i < this.getAll().length; i++) {
            resources[this.getAll()[i].value] = {
                translation: this.getAll()[i].JSON
            }
        }

        return resources;
    }
}