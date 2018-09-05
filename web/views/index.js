
$(function(){
    function getBookList(){
        // 获取所有书籍
        $.ajax({
            url:"http://127.0.0.1:5003/getallbook",
            type:'get',
            success:function(res){
                console.log(res)
               if(res.status==200){
                var html = template('row',res)
                // console.log(html)
                $('#tbd').html(html)
               }
            }
        })
    }
    
    getBookList()

    // 弹出层
    $('#add').on('click',function(){
        $('.ui.modal').modal('show');
        $('#modBtn').hide() // 编辑按钮显示
        $('#addBtn').show()
        $('.ui.modal .header').text('添加图书')
        $('[name="bname"]').val('')
        $('[name="bprice"]').val('')
    })

    // 添加图书
    $('#addBtn').on('click',function(){
        // console.log($('form').serialize())
        $.ajax({
            url:"http://127.0.0.1:5003/addbook",
            type:"post",
            data:$('form').serialize(),
            dataType:'json',
            success:function(res){
                console.log(res)
                if(res.status == 200){
                    getBookList()   // 成功 重新刷新页面
                }
            }
        })
    })


    // 删除图书  因为按钮是动态生成的 所以需要委托
    $('#tbd').on('click','.delBtn',function(){
        var id  = $(this).data('id')
        // console.log(id)
       $.ajax({
           url:"http://127.0.0.1:5003/deletebook/"+id,
           type:'post',
           success:function(res){
                console.log(res)
                if(res.status == 200){
                    getBookList()
                }
           }
       })
    })

    // 编辑图书
    $('#tbd').on('click','.editBtn',function(){
        $('.ui.modal').modal('show');
        $('.ui.modal .header').text('修改图书')

        $('#modBtn').show() // 编辑按钮显示
        $('#addBtn').hide()

        var id =$(this).data('id')
        $.ajax({
            url:'http://127.0.0.1:5003/getbook/'+id,
            type:'get',
            success:function(res){
                console.log(res)
                if(res.status == 200){
                    // console.log(res.data[0].bname)
                    $('[name="bname"]').val(res.data[0].bname)
                    $('[name="bprice"]').val(res.data[0].bprice)
                }
            }   
        })

        // 修改图书
        $('#modBtn').on('click',function(){
            // console.log($('form').serialize())
            $.ajax({
                url:'http://127.0.0.1:5003/updatebook/'+id,
                type:'post',
                data:$('form').serialize(),
                success:function(res){
                    console.log(res)
                    if(res.status == 200){
                        getBookList() // 修改成功重新刷新页面
                    }
                }
            })
        })







        return false  // 取消默认行为
    })






















})