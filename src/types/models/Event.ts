import { CateringService } from "./CateringService";
import { Member } from "./Member";

export interface Event {
    id: number;
    idMember: number;
    name: string;
    description: string;
    date: string;
    time: string;
    place: string;
    member?: Member;
    idCateringService: number;
    cateringService?: CateringService;
  }
  