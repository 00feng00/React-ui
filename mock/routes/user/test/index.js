const GROUP_NAME = 'users';
module.exports = {
    method: 'get',
    path: `/api/${GROUP_NAME}/test`,
    handler: async (request, reply) => {
        reply("test from 9005")
    },
    config: {
        tags: ['api', GROUP_NAME],
        auth: false,
        validate: {}
    },
}