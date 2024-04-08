import { Associate } from "./Associate"

export interface Attendance {
    IdAssociate: number,
    IdEvent: number,
    ArrivalTime: string,
    isConfirmed: boolean
    associate?: Associate,
    event?: Event;
}