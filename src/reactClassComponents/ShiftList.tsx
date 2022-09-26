import { Component, ReactNode } from "react";
import LoadingSpinner from "../LoadingSpinner";
import { ShiftStore } from "../services/ShiftStore";
import { IShift } from "../types";

interface IState {
    shifts: IShift[];
    isLoading: boolean;
}

interface IProps {}

class ShiftList extends Component<IProps, IState> {

    private _shiftStore: ShiftStore;

    constructor(props: IProps) {
        super(props);

        this.state = {
            shifts: [],
            isLoading: true
        };

        this._shiftStore = new ShiftStore();
    }

    async componentDidMount(): Promise<void> {
        await this._shiftStore.loadAll(true);
        this.setState({
            shifts: this._shiftStore.elements,
            isLoading: false
        })
    }

    render(): ReactNode {
        return <>
            <h2>Shift List</h2>
            {this.state.isLoading && <LoadingSpinner />}
            {!this.state.isLoading && this.state.shifts.map((shift: IShift) => (
                    <p key={`shift-list-${shift.id}`}>{shift.name}</p>
            ))}
        </>
    }
}

export default ShiftList;