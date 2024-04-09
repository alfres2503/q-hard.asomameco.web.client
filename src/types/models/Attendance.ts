import { Associate } from "./Associate"

export interface Attendance {
    IdAssociate: number,
    IdEvent: number,
    date: string;
    time: string;
    ArrivalTime: string,
    isConfirmed: boolean
    associate?: Associate,
    event?: Event;
}