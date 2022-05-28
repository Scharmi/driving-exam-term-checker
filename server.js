
function server() {
    var getSessionToken = require('./getSessionToken');
    getSessionToken.getSessionToken()
    .then(res => {
        console.log(res);
    });
}
server();