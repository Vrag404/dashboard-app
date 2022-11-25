import server from "./server";
import './database/db';

const initServer = () => {
    server.listen(server.get('port'));

    console.log('Listening on port ' + server.get('port'));
}

initServer();