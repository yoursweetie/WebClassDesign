var express = require('express');
var router = express.Router();
//// 引入了逻辑处理的JavaScript文件（需要注意是否有其他路由使用到其他文件，均需要引入，本处已省略）
var {getUserInfo, sendMail, getMails, getUserMail, getArticleType, articleLike, articleCollection, getCollection, articleTalk,changeUserInfo} = require('../controller/userNeedCheck')


// 获得资料
router.get('/info/:username', getUserInfo);
//修改用户资料
router.post('/changeInfo', changeUserInfo);
//发送私信
router.post('/mail/:username', sendMail)
//获得私信列表
router.get('/mailsGet', getMails)
//根据私信id获得私信详情
router.get('/mailGetter/:id', getUserMail)
//获得所有文章分类
router.get('/articleType', getArticleType)
//文章点赞和踩
router.get('/like/:id/:like', articleLike)
//文章收藏
router.get('/save/:id', articleCollection)
//收藏列表获取
router.get('/saveList', getCollection)
//添加文章评论
router.post('/article/talk', articleTalk)
module.exports = router;