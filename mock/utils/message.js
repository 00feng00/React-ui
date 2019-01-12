var QcloudSms = require("qcloudsms_js");

// 短信应用SDK AppID
var appid = 1400171779;  // SDK AppID是1400开头

// 短信应用SDK AppKey
var appkey = "6ad45c04b905932c6994ba4bf39b7118";




// 实例化QcloudSms
var qcloudsms = QcloudSms(appid, appkey);


// 设置请求回调处理, 这里只是演示，用户需要自定义相应处理回调
function getCode() {
    return Math.random().toString().slice(-6)
}
exports.getCode = getCode;
exports.sendOne = function (phoneNumber, code) {
    var self = this;
    return new Promise((resolve, reject) => {
        var callback= function(err, res, resData)  {
            if (err) {
                console.error(err)
                return resolve({
                    message: err.errmsg,
                    success: false,
                })
            }
            console.log("request data: ", res.req);
            console.log("response data: ", resData);
            var isTrue = true;
            if (resData.result == 1024) {
                isTrue = false;
            }
            if (resData.result == 1014) {
                isTrue = false;
            }
            if (resData.result == 1023) {
                isTrue = false;
            }
            if (!isTrue) {
                return resolve({
                    message: resData.errmsg,
                    success: isTrue,
                })
            }
            return resolve({
                message: resData.errmsg,
                success: isTrue,
                mobile: phoneNumber,
                code: code
            })
        }
        var ssender = qcloudsms.SmsSingleSender();
        var params = ["5678"];
        // ssender.send(0, 86, phoneNumbers[0],
        //     `【金色梦乡】您的验证码是: ${code}`, "", "", callback);

        ssender.sendWithParam(86, phoneNumber,
            "248964", [code, '5'], "金色梦乡", "", "",callback);
    })

}