import { Component, ReactNode } from "react";
import withListData, { IListState } from "./withListData";
import { ShiftService } from "./services/ShiftService";
import { IShift } from "./types";

class ShiftList extends Component<IListState<IShift>, {}> {

    render(): ReactNode {
        return <>
            <h1>Shift List with HOC List</h1>
            {!this.props.isLoading && this.props.data.map((shift: IShift) => (
                    <p key={`shift-list-hoc-${shift.id}`}>{shift.name}</p>
            ))}
        </>
    }
}

export default withListData(ShiftList, () => ShiftService.getAll());