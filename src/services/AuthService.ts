import axios from "axios";
import { environment } from "../utils/environment";

export class AuthService {
  private static APIUrl: string = environment.apiURL;

  public static async loginMember(member: any) {
    try {
      const response = await axios.post(this.APIUrl + "auth", member);

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem(
          "currentMember",
          JSON.stringify(response.data.member)
        );
        return response.data;
      }
    } catch (error: any) {
      if (error.response && error.response.status === 401)
        return error.response.data;
      else
        return {
          success: false,
          message:
            "Ocurrió un error inesperado. Por favor, inténtelo de nuevo.",
        };
    }
  }

  public static async logout() {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("currentMember");
    } catch (error: any) {
      return {
        success: false,
        message: "Ocurrió un error inesperado. Por favor, inténtelo de nuevo.",
      };
    }
  }
}
