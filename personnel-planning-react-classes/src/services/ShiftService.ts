import { IShift } from "../types";
import { delay } from "../utils";
import { LocalStorageService } from "./LocalStorageService";

export class ShiftService {

    static async getAll(fakeDelay: boolean = false): Promise<Array<IShift>> {
        const shifts = LocalStorageService.getList("shifts") as IShift[];
        if (fakeDelay) await delay(500);
        return Promise.resolve(shifts);
    }
}

