// assume these 'clients' are third party which you have no control

export class HerokuClient {
    tryAndConnectToHeroku(): boolean{
        const rnd = Math.random() * 10;
        return rnd > 5 ? true : false;
    }
    tryAndDisconnectFromHeroku(): boolean{
        const rnd = Math.random() * 10;
        return rnd > 5 ? true : false;
    }
}