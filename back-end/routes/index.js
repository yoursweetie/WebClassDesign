var express = require('express');
var router = express.Router();
//// 引入了逻辑处理的JavaScript文件（需要注意是否有其他路由使用到其他文件，均需要引入，本处已省略）
var {getNavMenu, getFooter, getLinks, getIndexPic, getNewArticle, getArticle, getHotArticle, getArticles, viewArticle,getArticleTalk} = require('../controller/getData')
const util = require('../util/common')

// 获取footer显示内容
router.get('/getFooter', getFooter);
//获取菜单
router.get('/getNavMenu', getNavMenu);
//获取友情链接
router.get('/getLinks', getLinks)
//获取首页轮播图片
router.get('/getIndexPic', getIndexPic)
//获取最新文章列表
router.get('/getNewArticle', getNewArticle)
//获得热点文章列表
router.get('/getHotArticle', getHotArticle)
//获取文章的详情
router.get('/getArticle/:id', getArticle)
//获取小标签或者是文章分类的内容
router.post('/getArticles', getArticles)
//文章被查看数自动+1API
router.get('/viewArticle/:id', viewArticle)
//获取文章评论
router.get('/getArticleTalk/:id',getArticleTalk)
module.exports = router;
