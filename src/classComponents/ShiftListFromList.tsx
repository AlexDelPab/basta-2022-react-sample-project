import { Component, ReactNode } from "react";
import withListData, { IListState } from "./withListData";
import { ShiftStore } from "../services/ShiftStore";
import { IShift } from "../types";

class ShiftList extends Component<IListState<IShift>, {}> {

    render(): ReactNode {
        return (<>
            <h2>Shift List with HOC List</h2>
            {!this.props.isLoading && this.props.data.map((shift: IShift) => (
                <p key={`shift-list-hoc-${shift.id}`}>{shift.name}</p>
            ))}
        </>);
    }
}

export default withListData(ShiftList, new ShiftStore());