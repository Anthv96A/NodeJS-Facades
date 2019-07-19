import { IClientFacade } from "./IClientFacade";
import { AzureClient } from "../../models/AzureClient";

export class AzureClientFacade implements IClientFacade{
    constructor(private readonly azureClient: AzureClient){}

     async connect(): Promise<boolean> {
        const result: boolean = await Promise.resolve(this.azureClient.tryAndConnectToAzure());

        if(result)
            console.log('Connected to Azure successfully!!');
        else 
            console.log('Failed to connect to Azure');
        return result;
    }
    async disconnect(): Promise<boolean> {
        const result: boolean = await Promise.resolve(this.azureClient.tryAndDisconnectFromAzure());

        if(result)
            console.log('Disconnected from Azure successfully!!');
        else 
            console.log('Failed to disconnect from Azure');
        return result;
    }
}