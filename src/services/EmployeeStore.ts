import { IEmployee, IShift } from "../types";
import { delay } from "../utils";
import { LocalStorageService } from "./LocalStorageService";
import { Store } from "./Store";

export class EmployeeStore extends Store<IEmployee> {
    constructor() {
        super();
    }

    async loadAll(fakeDelay: boolean = false): Promise<void> {
        this.elements = LocalStorageService.getList("employees") as IEmployee[];
        if (fakeDelay) await delay(1000);
        return Promise.resolve();
    }

    assignShift(employee: IEmployee, shift: IShift): Promise<void> {
        const empl = this.elements.find(empl => empl.id === employee.id);
        if (empl) {
            empl.shift = shift;
        }

        LocalStorageService.saveList(this.elements, "employees");

        return Promise.resolve();
    }
}

