// assume these 'clients' are third party which you have no control

export class AwsClient {

    tryAndConnectToAWS(): boolean{
        const rnd = Math.random() * 10;
        return rnd > 5 ? true : false;
    }

    tryAndDisconnectFromAWS(): boolean{
        const rnd = Math.random() * 10;
        return rnd > 5 ? true : false;
    }
}