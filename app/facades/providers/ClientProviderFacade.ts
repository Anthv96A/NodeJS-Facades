import { IClientProviderFacade } from "./IClientProviderFacade";
import { IClientFacade } from "../clients/IClientFacade";
import { ConnectionClient } from "../../client.enum";
import { AwsClientFacade } from "../clients/AwsClientFacade";
import { AwsClient } from "../../models/AwsClient";
import { AzureClientFacade } from "../clients/AzureClientFacade";
import { AzureClient } from "../../models/AzureClient";
import { GoogleCloudClient } from "../../models/GoogleCloudClient";
import { GoogleCloudClientFacacde } from "../clients/GoogleCloudClientFacade";
import { HerokuClientFacade } from "../clients/HerokuClientFacade";
import { HerokuClient } from "../../models/HerokuClient";

export class ClientProviderFacade implements IClientProviderFacade {

    getClient(client: ConnectionClient): IClientFacade {
        switch(client){
            case ConnectionClient.AWS:
                return new AwsClientFacade(new AwsClient());
            case ConnectionClient.Azure:
                return new AzureClientFacade(new AzureClient());
            case ConnectionClient.GoogleCloud:
                return new GoogleCloudClientFacacde(new GoogleCloudClient());
            case ConnectionClient.Heroku:
                return new HerokuClientFacade(new HerokuClient());
            default:
                throw new Error(`Unknown connection client of ${client}`);
        }
    }
}