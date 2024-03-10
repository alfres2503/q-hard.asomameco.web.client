import axios from "axios";
import { environment } from "../utils/environment";

export class AuthService {
  private APIUrl: string = environment.apiURL;

  public async loginMember(member: any) {
    try {
      const response = await axios.post(this.APIUrl + "auth", member);

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem(
          "currentMember",
          JSON.stringify(response.data.member)
        );

        return response.data.member;
      }

      return null;
    } catch {
      console.error("Error");
    }
  }
}
