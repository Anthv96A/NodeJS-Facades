// assume these 'clients' are third party which you have no control

export class AzureClient {

    tryAndConnectToAzure(): boolean{
        const rnd = Math.random() * 10;
        return rnd > 5 ? true : false;
    }

    tryAndDisconnectFromAzure(): boolean{
        const rnd = Math.random() * 10;
        return rnd > 5 ? true : false;
    }
}