var log4js = require('log4js');
log4js.configure({
    appenders: { cheese: { type: 'file', filename: 'cheese.log' } },
    categories: { default: { appenders: ['cheese'], level: 'error' } }
});
var logger = log4js.getLogger();
logger.level = 'debug';

module.exports = (() => {
    var self = this
    self.log = (str) => {
        console.log(str)
        logger.debug(str);
    }
    self.error = (str) => {
        console.error(str)
        logger.trace(str);
    }
    return self
})()