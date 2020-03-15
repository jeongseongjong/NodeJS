$(function(){

    // station_small.pug 중 .bus_tr을 클릭하면
    $(".bus_tr").click(function(){
        
        // 그안의 data-id값을 받아 let id로 지정
        let id = $(this).data('id')

        $.ajax({

            // gjbus의 bustime으로 url을 지정
            url : "/gjbus/bustime",

            // 좌측 id는 /gjbus/bustime의 req.query.id의 id로 넘어가고
            // 우측 id는 station_small.pug에서 받아온 data-id를 값으로 지정한다.
            data : {id : id},
            success : function(result){

                // 추출된 결과를 gjBusRouter의 bustime 메소드로 전송한다.
                $("#bustime").html(result)
            }
        })
    })
})