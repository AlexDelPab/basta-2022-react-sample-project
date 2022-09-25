import { ChangeEvent, Component, ReactNode } from "react";
import withListData, { IListState } from "./withListData";
import listComponent from "./withListData";
import LoadingSpinner from "./LoadingSpinner";
import { EmployeeService } from "./services/EmployeeService";
import { ShiftService } from "./services/ShiftService";
import { IEmployee, IShift } from "./types";

class ShiftList extends Component<IListState<IShift>, {}> {

    render(): ReactNode {
        return <>
            <h1>Shift List with HOC List</h1>
            {!this.props.isLoading && this.props.data.map((shift: IShift) => (
                    <p key={`shift-list-${shift.id}`}>{shift.name}</p>
            ))}
        </>
    }
}

export default withListData(ShiftList, () => ShiftService.getAll());