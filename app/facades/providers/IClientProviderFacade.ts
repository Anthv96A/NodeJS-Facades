import { IClientFacade } from "../clients/IClientFacade";
import { ConnectionClient } from "../../client.enum";

export interface IClientProviderFacade {
    getClient(client: ConnectionClient): IClientFacade;
}