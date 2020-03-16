var mongoose = require('mongoose')

var bookVO = mongoose.Schema({

    search : String,
    title : String,
    image : String,
    author : String,
    price : String,
    discount : String,
    publisher : String,
    isbn : String,
    pubdate : String
})

module.exports = mongoose.model("tbl_book",bookVO)