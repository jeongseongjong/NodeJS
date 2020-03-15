var mongoose = require('mongoose')
var galleryVO = mongoose.Schema({

    gStrTitle : String,
    gStrText : String,
    gUpLoadPhotoName : String, // 이미지를 업로드 할때 변환된 이름
    gOriginalPhotoName : String, // 원본이미지 이름
    gUpLoadStartDate : {
        type : Date,
        default : Date.now()
    }

})

module.exports = mongoose.model("tbl_gallery",galleryVO)