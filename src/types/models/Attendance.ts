import { Associate } from "./Associate"

export interface Attendance {
    idAssociate: number,
    idEvent: number,
    arrivalTime: string,
    isConfirmed: boolean
    associate?: Associate,
    event?: Event;
}