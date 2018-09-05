const conn = require('./db.js')
const moment = require('moment')
module.exports = {
    testApI:(req,res)=>{
        res.send('ok~')
    },
    getAllBook:(req,res)=>{
        const sqlStr1 = 'select * from books'
        conn.query(sqlStr1,(err,data)=>{
            if(err) return res.send({status:500,msg:err.message,data:null})
            res.send({status:200,msg:'查询所有书籍信息成功',data:data})
        })
    },
    getBookById:(req,res)=>{
        const id = req.params.id
        const sqlStr2 = 'select * from books where id = ?'
        conn.query(sqlStr2,id,(err,data)=>{
            if(err) return res.send({status:500,msg:err.message,data:null})
            res.send({status:200,msg:'查询书籍信息成功',data:data})
        })
    },
    addBook:(req,res)=>{
        const book = req.body
        book.ctime = moment().format('YYYY-MM-DD HH:mm:ss')
        const sqlStr3 = 'insert into books set ?'
        conn.query(sqlStr3,book,(err,data)=>{
            if(err) return res.send({status:500,msg:err.message,data:null})
            res.send({status:200,msg:'新增书籍成功',data:data})
        })
    },
    updateBook:(req,res)=>{
        const id = req.params.id
        const book = req.body
        const sqlStr4 = 'update  books set ? where id= ?'
        conn.query(sqlStr4,[book,id],(err,data)=>{
            if(err) return res.send({status:500,msg:err.message,data:null})
            res.send({status:200,msg:'修改书籍成功',data:data})
        })
    },
    deleteBook:(req,res)=>{
        const id = req.params.id
        const sqlStr4 = 'update books set isrent = 1 where id =?'
        conn.query(sqlStr4,id,(err,data)=>{
            if(err) return res.send({status:500,msg:err.message,data:null})
            res.send({status:200,msg:'删除书籍成功',data:data})
        })
    }

}


