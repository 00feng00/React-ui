var Mock = require('mockjs')
var Random = Mock.Random


function r_int(_min, _max) {
    var min = _min || 0
    var max = _max || 10
    var randomInt = Random.integer(min, max)
    return randomInt
}

exports.r_int = r_int
exports.r_float = (min = 0, max = 10) => {
    return Random.float(min, max, 3, 5)
}
exports.r_array = function r_array(itemF) {
    var _array = Mock.mock({
        "array|1-10": [
            itemF
        ]
    }).array

    return _array
}

exports.r_p = function r_p() {
    return Random.cparagraph()
}
exports.r_text = function (min = 0, max = 10) {
    return Random.ctitle(min, max)
}
exports.r_name = function r_name() {
    return Random.cname()
}
exports.r_image = () => {
    return Random.image(`200x200}`, Random.color(), Random.color(), 'png', Random.cname())
}

