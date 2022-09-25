import { ChangeEvent, Component, ReactNode } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { EmployeeService } from "./services/EmployeeService";
import { ShiftService } from "./services/ShiftService";
import { IEmployee, IShift } from "./types";

interface IState {
    employees: IEmployee[];
    shifts: IShift[];
    isLoading: boolean;
}

interface IProps {}

class EmployeeList extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);

        this.state = {
            employees: [],
            shifts: [],
            isLoading: true
        };

        this.handleChange = this.handleChange.bind(this);
    }

    async componentDidMount(): Promise<void> {
        const loadedEmployees = await EmployeeService.getAll(true);
        const loadedShifts = await ShiftService.getAll();
        this.setState({
            employees: loadedEmployees,
            shifts: loadedShifts,
            isLoading: false
        })
    }

    async handleChange(event: ChangeEvent<any>, employee: IEmployee) {
        const shiftId = +event.target.value;
        const shift = this.state.shifts.find(s => s.id === shiftId);
        
        if (shift) {
            await EmployeeService.assignShift(employee, shift)
            const loadedEmployees = await EmployeeService.getAll();
            this.setState({
                employees: loadedEmployees
            });
        }
    }

    render(): ReactNode {
        return <>
            <h1>Employee List</h1>
            {this.state.isLoading && <LoadingSpinner />}
            {!this.state.isLoading && this.state.employees.map((employee: IEmployee) => (
                <div key={`employee-list-${employee.id}`}>
                    <span style={{ marginRight: "10px"}}>{employee.firstName} {employee.lastName} - { employee.shift?.name ?? 'Keine Schicht'}</span>
                    <select value={employee.shift?.id} onChange={(e) => this.handleChange(e, employee)}>
                        <option value="">Bitte auswählen</option>
                        {this.state.shifts.map((shift: IShift) => (
                            <option value={shift.id}>{shift.name}</option>
                            ))}
                    </select>
                    </div>
            ))}
        </>
    }
}

export default EmployeeList;