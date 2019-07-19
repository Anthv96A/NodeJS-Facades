import { IClientFacade } from "./IClientFacade";
import { GoogleCloudClient } from "../../models/GoogleCloudClient";

export class GoogleCloudClientFacacde implements IClientFacade {

    constructor(private readonly googleCloudClient: GoogleCloudClient){}

    async connect(): Promise<boolean> {
        const result: boolean = await Promise.resolve(this.googleCloudClient.tryAndConnectToGoogleCloud());
        if(result)
            console.log('Connected to Google cloud!!');
        else 
            console.log('Failed to connect to Google Cloud');
        return result;
    }    
    
    async disconnect(): Promise<boolean> {
        const result: boolean = await Promise.resolve(this.googleCloudClient.tryAndDisconnectFromGoogleCloud());
        if(result)
             console.log('Disconnected from Google cloud!!');
        else 
             console.log('Failed to disconnect to Google Cloud');
        return result;
    }
}