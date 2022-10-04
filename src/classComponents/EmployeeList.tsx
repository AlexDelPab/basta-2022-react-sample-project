import { ChangeEvent, Component, ReactNode } from "react";
import LoadingSpinner from "../LoadingSpinner";
import { EmployeeStore } from "../services/EmployeeStore";
import { ShiftStore } from "../services/ShiftStore";
import { IEmployee, IShift } from "../types";

interface IState {
    employees: IEmployee[];
    shifts: IShift[];
    isLoading: boolean;
}

interface IProps {}

export class EmployeeListCC extends Component<IProps, IState> {

    private _employeeStore: EmployeeStore;
    private _shiftStore: ShiftStore;

    constructor(props: IProps) {
        super(props);

        this.state = {
            employees: [],
            shifts: [],
            isLoading: true
        };

        this._employeeStore = new EmployeeStore();
        this._shiftStore = new ShiftStore();

        this.handleAssignShiftToEmployee = this.handleAssignShiftToEmployee.bind(this);
    }

    async componentDidMount(): Promise<void> {
        await this._employeeStore.loadAll(true);
        await this._shiftStore.loadAll();
        this.setState({
            employees: this._employeeStore.elements,
            shifts: this._shiftStore.elements,
            isLoading: false
        })
    }

    async handleAssignShiftToEmployee(event: ChangeEvent<any>, employee: IEmployee) {
        const shiftId = +event.target.value;
        const shift = this.state.shifts.find(s => s.id === shiftId);
        
        if (shift) {
            await this._employeeStore.assignShift(employee, shift);
            this.setState({
                employees: this._employeeStore.elements
            });
        }
    }

    render(): ReactNode {
        return (<>
            <h2>Employee List</h2>
            {this.state.isLoading && <LoadingSpinner />}
            {!this.state.isLoading && this.state.employees.map((employee: IEmployee) => (
                <div key={`employee-list-${employee.id}`}>
                    <span style={{ marginRight: "10px" }}>{employee.firstName} {employee.lastName} - {employee.shift?.name ?? 'Keine Schicht'}</span>
                    <select value={employee.shift?.id} onChange={(e) => this.handleAssignShiftToEmployee(e, employee)}>
                        <option value="">Bitte auswählen</option>
                        {this.state.shifts.map((shift: IShift) => (
                            <option key={`select-shift-option-${shift.id}`} value={shift.id}>{shift.name}</option>
                        ))}
                    </select>
                </div>
            ))}
        </>);
    }
}