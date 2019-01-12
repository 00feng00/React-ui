import user from "../../json/user";

var {r_array} = require("../../utils/R");

const GROUP_NAME = 'friend';
var Joi = require("joi")
module.exports = [
    {
        method: 'get',
        path: `/api/${GROUP_NAME}/get-close-stranger`,
        handler: async (request, reply) => {
            reply(r_array(user))
        },
        config: {
            tags: ['api', GROUP_NAME],
            auth: false,
            validate: {
                query: {
                    latitude: Joi.string(),
                    longitude: Joi.string(),
                    limit: Joi.string(),
                    offset: Joi.string(),
                }
            }
        },
    }
]