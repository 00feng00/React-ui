
var knex =require('knex')({
    client: 'mysql',
    connection: {
        host: '119.23.190.76',
        user: 'new_root1',
        password: '12_Liumingtai',
        database: 'app9008_chat_dream'
    }
});

var knexTinyLogger = require('knex-tiny-logger').default
var NestHydrationJS = require('nesthydrationjs')();
knex.formate = (result, resultType) => {
    return NestHydrationJS.nest(result, resultType);
}
module.insertOrUpdate = (obj) => {

}

module.exports = knexTinyLogger(knex)