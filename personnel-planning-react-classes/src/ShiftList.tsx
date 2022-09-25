import { ChangeEvent, Component, ReactNode } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { EmployeeService } from "./services/EmployeeService";
import { ShiftService } from "./services/ShiftService";
import { IEmployee, IShift } from "./types";

interface IState {
    shifts: IShift[];
    isLoading: boolean;
}

interface IProps {}

class ShiftList extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);

        this.state = {
            shifts: [],
            isLoading: true
        };
    }

    async componentDidMount(): Promise<void> {
        const loadedShifts = await ShiftService.getAll(true);
        this.setState({
            shifts: loadedShifts,
            isLoading: false
        })
    }

    render(): ReactNode {
        return <>
            <h1>Shift List</h1>
            {this.state.isLoading && <LoadingSpinner />}
            {!this.state.isLoading && this.state.shifts.map((shift: IShift) => (
                    <p key={`shift-list-${shift.id}`}>{shift.name}</p>
            ))}
        </>
    }
}

export default ShiftList;