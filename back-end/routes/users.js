var express = require('express');
var router = express.Router();
//// 引入了逻辑处理的JavaScript文件（需要注意是否有其他路由使用到其他文件，均需要引入，本处已省略）
var {userLogin, userRegister} = require('../controller/user')
var {checkUser} = require('../util/middleware')
/* GET users listing. */
router.post('/login', userLogin);
router.post('/register', userRegister);

router.use('/user', checkUser, require('./userNeedCheck'))

module.exports = router;
