var redis = require("redis");
var bluebird = require("bluebird")
bluebird.promisifyAll(redis);
var host = "119.23.190.76"
var port = 6379;
var client = redis.createClient({
    port, host,
    password: "12Liumingtai",
    auth_pass: "12Liumingtai",
});
var log = require('./log')

client.on('connect', function () {
    console.log('Redis client connected in ' + host + "  :" + port);
});
client.on('error', function (err) {
    console.log('Something went wrong ' + err);
});

module.exports = (() => {
    var self = this;
    self.set = function (key, value, options) {
        log.log({ methods: "redis set", key, value })
        if (options.EX) {
            return client.set(key, value, "EX", options.EX)
        }
        if (options.ex) {
            return client.set(key, value, "EX", options.ex)
        }
        if (options.timeout) {
            return client.set(key, value, "EX", options.timeout)
        }
        return client.set(key, value)
    }
    self.get = function (key, value) {
        log.log({ methods: "redis get", key, value })
        return client.getAsync(key)
    }
    return self
})()