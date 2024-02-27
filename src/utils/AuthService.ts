import axios from "axios";
import { environment } from "./environment";

export class AuthService {
  private APIUrl: string = environment.apiURL;
  public isAuth: boolean = false;

  public async loginMember(member: any) {
    try {
      const response = await axios.post(this.APIUrl + "auth", member);

      localStorage.setItem("token", response.data.token);
      localStorage.setItem(
        "currentMember",
        JSON.stringify(response.data.member)
      );

      return member;
    } catch {
      console.error("Error");
    }
  }
}
