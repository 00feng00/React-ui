import {r_image} from "../utils/R";

var {r_int, r_name, r_text, r_float, r_p} = require("../utils/R");

const user = () => {
    return {
        id: r_int(1, 1000),
        name: r_name(),
        password: r_text(6, 16),
        latitude: r_float(),
        longitude: r_float(),
        avatar_url: r_image(),
        distance: r_int(),
        description: r_p()
    }
}
module.exports = user

