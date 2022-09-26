import { ChangeEvent, useEffect, useRef, useState } from "react";
import LoadingSpinner from "../LoadingSpinner";
import { EmployeeStore } from "../services/EmployeeStore";
import { ShiftStore } from "../services/ShiftStore";
import { IEmployee, IShift } from "../types";


export default function EmployeeListFC() {
    const [isLoading, setIsLoading] = useState(true);
    const [employees, setEmployees] = useState<IEmployee[]>([]);
    const [shifts, setShifts] = useState<IShift[]>([]);
    const employeeStoreRef = useRef(new EmployeeStore());
    const shiftStoreRef = useRef(new ShiftStore());

    useEffect(() => {
        (async () => {
            await employeeStoreRef.current.loadAll();
            await shiftStoreRef.current.loadAll();
            setEmployees(employeeStoreRef.current.elements);
            setShifts(shiftStoreRef.current.elements);
            setIsLoading(false);
        })();
    }, [])

    async function handleChange(event: ChangeEvent<any>, employee: IEmployee) {
        const shiftId = +event.target.value;
        const shift = shifts.find(s => s.id === shiftId);
        
        if (shift) {
            await employeeStoreRef.current.assignShift(employee, shift)
            setEmployees(employeeStoreRef.current.elements);
        }
    }

    if (isLoading) {
        return <LoadingSpinner />;
    }

    return (
        <>
            <h2>Employee list</ h2>
            {employees.map((employee: IEmployee) => (
                <div key={`employee-list-${employee.id}`}>
                <span style={{ marginRight: "10px" }}>{employee.firstName} {employee.lastName} - {employee.shift?.name ?? 'Keine Schicht'}</span>
                <select value={employee.shift?.id} onChange={(e) => handleChange(e, employee)}>
                    <option value="">Bitte auswählen</option>
                    {shifts.map((shift: IShift) => (
                        <option key={`select-shift-option-${shift.id}`} value={shift.id}>{shift.name}</option>
                    ))}
                </select>
            </div>
            ))}
            </>
    );
}