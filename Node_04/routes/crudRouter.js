var express = require('express');
var router = express.Router();

router.get("/:data/list",function(req,rex){

    let data = req.params.data
    if(data == 'book'){
        bookVO.find({},function(err,data){
            req.json(Data)
        })
    }
    else if(data =='member'){
        memberVO.find()
    }else if(data == 'address'){
        addressVO.find()
    }
    res.end("list")
})

router.get("/:data/insert",function(req,rex){
    // res.render("write")
    res.end("insert")
})

router.post("/:data/insert",function(req,res){
    //데이터를 추가하는 코드
    res.end("insert_post")
})

router.get("/:data/:id/update",function(req,res){

    // id를 기준으로 1개의 데이터를 조회
    // render에 건내주는 코드
    res.render("write")
})

router.put("/:data/:id/update",function(){

    res.end("update_put")
})

router.delete("/:data/:id/delete",function(){
    res.end("delete_delete")
})

module.exports = router
