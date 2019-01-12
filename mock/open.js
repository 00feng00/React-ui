const config = {
    port: 8888,
    host: "localhost"
};
var c = require('child_process');
c.exec(`start http://${config.host}:${config.port}/documentation`);