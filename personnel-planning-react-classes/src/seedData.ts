import { LocalStorageService } from "./services/LocalStorageService";
import { IEmployee, IShift } from "./types";

const employees: IEmployee[] = [
    { id: 1, firstName: 'Lilyana', lastName: 'Fowler' },
    { id: 2, firstName: 'Elsa', lastName: 'Garz' },
    { id: 3, firstName: 'Arielle', lastName: 'Mckenzie' },
    { id: 4, firstName: 'Sage', lastName: 'Peterson' },
    { id: 5, firstName: 'Dominick', lastName: 'Sharp' },
    { id: 6, firstName: 'Ashlee', lastName: 'Holloway' },
    { id: 7, firstName: 'Gregory', lastName: 'Mahoney' },
    { id: 8, firstName: 'Marvin', lastName: 'Salas' },
    { id: 9, firstName: 'Rudy', lastName: 'Gould' },
    { id: 10, firstName: 'Gerardo', lastName: 'Conley' },
];

const shifts: IShift[] = [
    { id: 1, name: 'Frühschicht' },
    { id: 2, name: 'Spätschicht' },
    { id: 3, name: 'Nachtschicht' },
    { id: 4, name: 'Tagschicht' },
];

if (!LocalStorageService.getList("employees")) {
    LocalStorageService.saveList(employees, "employees");
}

if (!LocalStorageService.getList("shifts")) {
    LocalStorageService.saveList(shifts, "shifts");
}