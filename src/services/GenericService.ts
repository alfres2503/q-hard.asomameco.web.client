import axios, { AxiosResponse } from "axios";
import { environment } from "../utils/environment";
import { ApiError } from "next/dist/server/api-utils";

export class GenericService {
  //API url from the environment
  private APIUrl: string = environment.apiURL;

  public async list(endpoint: string): Promise<AxiosResponse> {
    console.log(this.APIUrl + endpoint);
    return await axios.get(this.APIUrl + endpoint);
  }

  public async getBy(endpoint: string, filter: any): Promise<any | any[]> {
    console.log(this.APIUrl + endpoint);
    return await axios.get(this.APIUrl + endpoint + "/" + filter);
  }

  // Incomplete methods
  public async create(
    endpoint: string,
    objCreate: any | any
  ): Promise<any | any[]> {
    return await axios.post(this.APIUrl + endpoint, objCreate);
  }

  public async update(
    endpoint: string,
    objUpdate: any | any
  ): Promise<any | any[]> {
    return await axios.put(
      this.APIUrl + endpoint + `/${objUpdate.id}`,
      objUpdate
    );
  }

  public async delete(endpoint: string, id: number): Promise<AxiosResponse> {
    return await axios.delete(this.APIUrl + endpoint + `/${id}`);
  }
}
