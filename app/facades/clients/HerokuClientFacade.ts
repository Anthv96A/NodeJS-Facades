import { IClientFacade } from "./IClientFacade";
import { HerokuClient } from "../../models/HerokuClient";

export class HerokuClientFacade implements IClientFacade {

    constructor(private readonly herokuClient: HerokuClient){}

    async connect(): Promise<boolean> {
        const result = await Promise.resolve(this.herokuClient.tryAndConnectToHeroku());
        if(result)
            console.log('Connected to Heroku!!');
        return result;
    }  
    
    async disconnect(): Promise<boolean> {
        const result = await Promise.resolve(this.herokuClient.tryAndDisconnectFromHeroku());
        if(result)
            console.log('Disconnected from Heroku!!');
        return result;
    }
}