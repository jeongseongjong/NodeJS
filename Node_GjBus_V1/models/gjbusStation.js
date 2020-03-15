var mongoose = require('mongoose')

var gjStationVO = mongoose.Schema({

    STATION_NUM : String, // 레코드 구분
    BUSSTOP_ID : String, // 정류소 ID
    BUSSTOP_NAME : String,
    NAME_E : String, //정류소 명
    LONGITUDE : String, // 위도
    LATITUDE : String, // 경도
    ARS_ID : String, //
    NEXT_BUSSTOP : String // 다음 정류소
})

module.exports = mongoose.model('gjstation',gjStationVO)

