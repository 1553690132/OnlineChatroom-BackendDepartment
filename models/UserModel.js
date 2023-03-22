const mongoose = require('../db/index')
/**
 * 用户表: 用于登录注册
 * username 用户账号
 * password 密码
 * nickname 用户名
 * detail 个性签名
 * headImg 头像
 */
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true,
        maxLength: 12,
        minLength: 5,
        unique: true
    },
    password: {
        type: String,
        trim: true,
        required: true,
    },
    nickname: {
        type: String,
        trim: true,
        minLength: 3,
        default: new Date().getTime()
    },
    detail: {
        type: String,
        default: '暂未设置个性签名~'
    },
    headImg: {
        type: String,
        default: 'data:image/png;base64,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',
    },
    online: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('User', UserSchema, 'ct_user')