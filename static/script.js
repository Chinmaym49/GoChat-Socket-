$(document).ready(function() {
    $("#accreq").on("submit",function(event) {
        $.ajax( {
            data: {
                handle:$("button[name='accept']").val()
            },
            type:"POST",
            url:"/accept"
        })
        .done(function(data) {
            location.reload();
        });
        event.preventDefault();
    });

    // $("#sndmsg").on("submit",function(event) {
    //     $.ajax( {
    //         data: {
    //             rcvr:$("#rcvr").val(),
    //             msg:$("#msg").val()
    //         },
    //         type:"POST",
    //         url:"/sndrcv"
    //     })
    //     .done(function(data) {
    //         $("#msgblock").append("<p>"+data["timestamp"]+" | "+data["sender"]+" : "+$("#msg").val()+"</p>");
    //         $("#msg").val("");
    //     });
    //     event.preventDefault();
    // });
});