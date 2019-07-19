import { IClientProviderFacade } from "./facades/providers/IClientProviderFacade";
import { ConnectionClient } from "./client.enum";
import { IClientFacade } from "./facades/clients/IClientFacade";

export class DatabaseProvider{
    private readonly clientProvider: IClientProviderFacade;

    constructor(clientProvider: IClientProviderFacade){
        this.clientProvider = clientProvider;
    }

    public async connectToDB(clientConnector: ConnectionClient): Promise<boolean>{
        console.log('Attempting to connect to db ...')
        try {
            const client: IClientFacade = this.clientProvider.getClient(clientConnector);
            const result:boolean = await client.connect();
            if(!result)
                throw 'Connection failed!';
                
            return result;
        } catch (error) {
            console.log(`Failed to connect to DB! Error : ${error}`);
            throw error;
        }
    }

    public async disconnectFromDB(clientConnector: ConnectionClient): Promise<boolean>{
        console.log('Attempting to disconnect from db ...')
        try {
            const client: IClientFacade = this.clientProvider.getClient(clientConnector);
            const result:boolean = await client.disconnect();
            return result;
        } catch (error) {
            console.log(`Something went wrong disconnectiong Error : ${error}`);
            throw error;
        }
    }

}