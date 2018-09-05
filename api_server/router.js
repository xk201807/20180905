const express = require('express')

const router = express.Router()

const ctrl = require('./controller.js')
router.get('/',ctrl.testApI)
// 查询所有书籍信息
router.get('/getallbook',ctrl.getAllBook)
// 根据id查询
router.get('/getbook/:id',ctrl.getBookById)

// 新增书籍
router.post('/addbook',ctrl.addBook)

// 修改书籍
router.post('/updatebook/:id',ctrl.updateBook)

// 删除书籍

router.post('/deletebook/:id',ctrl.deleteBook)









module.exports = router