import { IClientFacade } from "./IClientFacade";
import { AwsClient } from "../../models/AwsClient";

export class AwsClientFacade implements IClientFacade {

    constructor(private readonly awsClient: AwsClient){}

    async connect(): Promise<boolean> {
        const result = await Promise.resolve(this.awsClient.tryAndConnectToAWS());
        if(result)
            console.log('Connected to AWS!!');
        return result;
    }  
    
    async disconnect(): Promise<boolean> {
        const result = await Promise.resolve(this.awsClient.tryAndDisconnectFromAWS());
        if(result)
            console.log('Disconnected from AWS!!');
        return result;
    }
}