import { useRef } from "react";
import LoadingSpinner from "../LoadingSpinner";
import { ShiftStore } from "../services/ShiftStore";
import { IShift } from "../types";
import { useListData } from "./useListData";

export function ShiftListFC() {
    const shiftStoreRef = useRef(new ShiftStore());
    const [isLoading, data] = useListData<IShift>(shiftStoreRef.current);

    if (isLoading) {
        return <LoadingSpinner />;
    }
    
    return (<>
        <h2>Shift List with custom hook</h2>
        {!isLoading && data.map((shift: IShift) => (
            <p key={`shift-list-hoc-${shift.id}`}>{shift.name}</p>
        ))}
    </>);
}