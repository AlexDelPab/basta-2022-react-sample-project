export abstract class Store<T> {
    private _elements: T[];

    constructor() {
        this._elements = [];
    }

    loadAll(): Promise<void> {
        return Promise.resolve();
    }

    get elements() {
        return this._elements;
    }

    set elements(elements: T[]) {
        this._elements = elements;
    }
}