var express = require('express')
var router = express.Router()

// /Hello 함께 path mapping이 된다.
router.get("/",function(req,res){
    // write() 함수를 사용해서 web 브라우저에
    // 문자열 형태로 데이터를 표시하도록 하기
    // write() 문자열들을 전송하고
    // 끝에 반드시 end()를 전송해 주어야 한다.
    // 한줄의 문자열만 전송할 때는 write() 없이
    // end()만 전송하면 된다.
    res.write("Hello")
    res.end()
})

const retData = {
    nation : "Korea",
    name : "Hong Kil Dong",
    age : 30
}

router.get("/json",function(req,res){

    
    res.json(retData)

})

// router의 call 함수의 파라메터
// 첫번째 파라메터는(req) web에서 전송되는 request정보가 담길 변수
// 두번째 파라메터는(res) 서버에서 웹에게 응답할때 데이터를 담거나
// 여러정보를 담아서 보낼 객체
router.get("/view",function(req,res){
    res.render("myview",
    {
        nation:'Korea',
        name : 'Hong',
        age : 22
    })

})

router.get("/model",function(req,res){
    res.render("mymodel",{mydata:retData})
})

// 서버에 request요청할 때 queryString으 로 데이터를 보내면
// req.query객체를 참조하여 값을 받을 수 있다.
router.get("/insert",function(req,res){
    let name = req.query.name
    let nation = req.query.nation

    let retData = {name:this.name,nation:nation1}

    res.json(retData)
})

// path valiable 방식으로 데이터를 받기
router.get("/update/:id/:age",function(req,res){

    let id = req.params.id
    let age = req.params.age

    let retData = {id:id, age:age}
    res.json(retData)
})
router.get("/add",function(req,res){
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"})
    res.end("숫자가 없어서 덧셈불가")
})

router.get("/add/:num1",function(req,res){
    res.writeHead(200,{
        "Content-Type":"text/html;charset=UTF-8"
    })
    res.end("덧셈을 수행하려면 숫자2개를 붙여주세요")
})

router.get("/add/:num1/:num2",function(req,res){

    let intNum1 = parseInt(req.params.num1)
    let intNum2 = parseInt(req.params.num2)

   

    let ret ={
        숫자1 : intNum1,
        숫자2 : intNum2,
        합계 : intNum1 + intNum2
    }
    res.json(ret)
})

module.exports = router
