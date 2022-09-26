import { IShift } from "../types";
import { delay } from "../utils";
import { LocalStorageService } from "./LocalStorageService";
import { Store } from "./Store";

export class ShiftStore extends Store<IShift>{
    constructor() {
        super();
    }

    async loadAll(fakeDelay: boolean = false): Promise<void> {
        this.elements = LocalStorageService.getList("shifts") as IShift[];
        if (fakeDelay) await delay(500);
        return Promise.resolve();
    }
}

