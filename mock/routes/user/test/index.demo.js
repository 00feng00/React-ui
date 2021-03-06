const {initSocket} = require("../../../utils/socket");

const Hapi = require('hapi');
const hapiAuthJWT2 = require('hapi-auth-jwt2');

const pluginHapiSwagger = require('../../../plugins/hapi-swagger');
var {r_int} = require("../../../utils/R")
var port = r_int(9000, 9999)

const routesUsers = [require('./index')];
// const routesDirs = require('./routes/dir');
// const routesImages = require('./routes/image');
// const routesFiles = require('./routes/file1');
// const routesTest = require('./routes/test');
const server = new Hapi.Server();
// 配置服务器启动host与端口
server.connection({
    port,
    host: "localhost",
});

// sokiet


const init = async () => {
    // 注册插件
    await server.register([
        ...pluginHapiSwagger,
    ]);
    // 注册路由
    server.route([
        ...routesUsers
    ]);

    server.on('request-error', function (request, err) {
        console.error('Error response (500) sent for request: ' +
            request.id + ' at ' + request.url.path + ' because: ' +
            (err.trace || err.stack || err));
    });


    // 启动服务
    await server.start();

    initSocket(server.listener)

    var c = require('child_process');
    c.exec(`start http://localhost:${port}/documentation`);

    console.log(`Server running at: ${server.info.uri}`);
};

init();
