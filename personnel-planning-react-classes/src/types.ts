export interface IEmployee {
    id: number;
    firstName: string;
    lastName: string;
    shift?: IShift;
}

export interface IShift {
    id: number;
    name: string;
    employees?: Array<IEmployee>;
}