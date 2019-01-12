const Hapi = require('hapi');
const config = {
    port: 8888,
    host: "localhost"
};

const pluginHapiSwagger = require('./plugins/hapi-swagger');
const routesUsers = require('./routes/user/users');
const routesFriend = require('./routes/friend');
const server = new Hapi.Server();
// 配置服务器启动host与端口
server.connection({
    port: config.port,
    host: config.host,
});

// sokiet
const init = async () => {
    // 注册插件
    await server.register([
        ...pluginHapiSwagger,
    ]);
    // 注册路由
    server.route([
        ...routesFriend,
        ...routesUsers,
    ]);

    server.on('request-error', function (request, err) {
        console.error('Error response (500) sent for request: ' +
            request.id + ' at ' + request.url.path + ' because: ' +
            (err.trace || err.stack || err));
    });


    // 启动服务
    await server.start();



    console.log(`Server running at: ${server.info.uri}`);
};

init();
