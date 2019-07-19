import { ClientProviderFacade } from "./facades/providers/ClientProviderFacade";
import { DatabaseProvider } from "./databaseProvider";
import { ConnectionClient } from "./client.enum";

(async()=> {
    await initialize();
})();

// The facade is kinda of like a factory, where the logic is abstracted away
// In this case we can pretend we have been given 4 providers which we have no control of
// The facade pattern essentially wraps this behaviour to be just given a client we can just use.
// also this makes this client 'independent' so we don't really care about where the connection is coming from
// we just use it.
async function initialize() {
    try {
        const dbProvider = new DatabaseProvider(new ClientProviderFacade());

        // "Connecting"
        await dbProvider.connectToDB(ConnectionClient.AWS);
        console.log("--- ---");
        await dbProvider.connectToDB(ConnectionClient.Azure);
        console.log("--- ---");
        await dbProvider.connectToDB(ConnectionClient.GoogleCloud);
        console.log("--- ---");
        await dbProvider.connectToDB(ConnectionClient.Heroku);
        console.log("--- ---");

        // "Disconnecting"
        await dbProvider.disconnectFromDB(ConnectionClient.AWS);
        console.log("--- ---");
        await dbProvider.disconnectFromDB(ConnectionClient.Azure);
        console.log("--- ---");
        await dbProvider.disconnectFromDB(ConnectionClient.GoogleCloud);
        console.log("--- ---");
        await dbProvider.disconnectFromDB(ConnectionClient.Heroku);
    } catch (error) {
        throw error;
    }
}