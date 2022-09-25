import { IEmployee, IShift } from "../types";
import { delay } from "../utils";
import { LocalStorageService } from "./LocalStorageService";

export class EmployeeService {

    static async getAll(fakeDelay: boolean = false): Promise<Array<IEmployee>> {
        const employees = LocalStorageService.getList("employees") as IEmployee[];
        if (fakeDelay) await delay(1000);
        return Promise.resolve(employees);
    }

    static assignShift(employee: IEmployee, shift: IShift): Promise<void> {
        const employees = LocalStorageService.getList("employees") as IEmployee[];

        const empl = employees.find(empl => empl.id === employee.id);
        if (empl) {
            empl.shift = shift;
        }

        LocalStorageService.saveList(employees, "employees");

        return Promise.resolve();
    }
}

