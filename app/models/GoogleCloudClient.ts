// assume these 'clients' are third party which you have no control

export class GoogleCloudClient {

    tryAndConnectToGoogleCloud(): boolean{
        const rnd = Math.random() * 10;
        return rnd > 5 ? true : false;
    }

    tryAndDisconnectFromGoogleCloud(): boolean{
        const rnd = Math.random() * 10;
        return rnd > 5 ? true : false;
    }
}