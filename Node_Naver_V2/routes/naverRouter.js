var naver = require("../config/naver_secret")
var express = require("express")
var router = express.Router()
var request = require('request')

// vo가 들어있는 경로
var book = require('../models/bookVO')

var reqOptions = (api_url) => {
    var options = {
        url: api_url,
        headers: {
            'X-Naver-Client-Id': naver.client_id,
            'X-Naver-Client-Secret': naver.client_secret
        }
    }
    return options
}

// modele화 된 app을 
module.exports = (app) => {
    router.get("/", (req, res) => {
        res.json(naver)
    })

    router.get('/book', (req, res) => {

        let search = req.query.search
        let api_url = naver.book_url
        api_url += "?query=" + encodeURI(search)

        console.log(api_url)

        request.get(reqOptions(api_url), (err, response, body) => {

            console.log(response.statusCode)

            if (err) {
                console.log(err)
                res.send(response.statusMessage)
            } else if (response.statusCode == 200) {

                // 좌측 search : db또는 가져오는 api의 칼럼
                // 우측 search : 입력한 값
                // query에 날려보낸 search값이 search라는 칼럼과 같다면 data를 보내는데
                book.find({ search: search }, (err, data) => {

                    // 보낸 data를 length로 길이를 추출하여
                    var dataLength = Object.keys(data).length

                    // 있다면(0보다 크다면)
                    if (dataLength > 0) {

                        // view단의 book/list에서 books에 data를 담아준다.
                        res.render("book/list", { books: data })
                    } else {

                        // 없다면 search된 items를 파싱하여 naverJson에 담아주고
                        var naverJson = JSON.parse(body).items

                        // 담긴 naverJson을 반복문(forEach)로 반복하여 
                        // ex) forEach(CommentVO vo : search)
                        //             naverJson element search
                        // 형식으로 들어간다고 생각하면 된다.

                        naverJson.forEach(element => {
                            element.search = search
                        });

                        // book : bookVO의 경로
                        // bookVO가 들어있는 book을 collection화 해서 insert한다
                        // naverJson의 내용을 book에 넣는데 성공하면 result값을, 실패하면 err를 보낸다.
                        book.collection.insertMany(naverJson, (err, result) => {

                            console.log(err)
                            console.log(result)
                            if (err) {
                                res.send("DATA BULK INSERT ERROR")
                            } else {

                                // 에러가 나지 않는다면 view단의 book/list에게
                                // naverJson값을 books에게 배열로 넘겨줄 것이다.
                                res.render("book/list", { books: naverJson })
                            }
                        })
                    }
                })

            } else {
                res.send("unKnown Error response")
            }
        })
    })

    return router
}
