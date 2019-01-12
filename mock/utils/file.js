var path = require('path')
var { qiniu_accessKey, qiniu_secretKey, qiniu_bucket } = require("../config")
var qiniu = require("qiniu")
var axios = require('axios')

function resolve(str) {
    return path.resolve(__dirname, '../', str)
}

function createQiniuToken() {
    var mac = new qiniu.auth.digest.Mac(qiniu_accessKey, qiniu_secretKey);
    var options = {
        scope: qiniu_bucket,
        returnBody: '{"key":"http://pj5qx5lsj.bkt.clouddn.com/$(key)","hash":"$(etag)","fsize":$(fsize),"bucket":"$(bucket)","name":"$(x:name)"}'
    }
    var putPolicy = new qiniu.rs.PutPolicy(options);
    var uploadToken = putPolicy.uploadToken(mac);
    return uploadToken
}

function getQiniuFiles() {
    var token = createQiniuToken();
    return axios({
        method: "GET",
        url: `http://rsf.qbox.me/list?bucket=${qiniu_bucket}&limit=1000`,
        data: {
            token: token,
        },
        headers: {
            "Content-Type": " application/x-www-form-urlencoded",
            Authorization: token
        }
    }).then(res => {
        return res.data
    }).catch(e => {
        console.error(e.response.data)
    })

}

function upFileToQiniu({ file, uploadToken, key }) {
    var config = new qiniu.conf.Config();
    config.zone = qiniu.zone.Zone_z0;
    var formUploader = new qiniu.form_up.FormUploader(config);
    var putExtra = new qiniu.form_up.PutExtra();
    var readableStream = file; // 可读的流
    return new Promise((res, rej) => {
        formUploader.putStream(uploadToken, key, readableStream, putExtra, function (respErr,
            respBody, respInfo) {
            if (respErr) {
                rej({ e: respErr })
                throw respErr;
            }
            if (respInfo.statusCode == 200) {
                res(respBody)
                // console.log(respBody);
            } else {
                rej({ statusCode: respInfo.statusCode, e: respBody })
                // console.log(respInfo.statusCode);
                // console.log(respBody);
            }
        });
    })

}

const imageFilter = function (fileName) {
    if (!fileName.match(/\.(jpg|jpeg|png|gif)$/)) {
        return false;
    }

    return true;
};
module.exports = { resolve, createQiniuToken, getQiniuFiles, upFileToQiniu, imageFilter }