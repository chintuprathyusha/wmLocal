$(document).ready(function () {

    $("body").on("click", ".logoutbtn", function () {
        debugger;
        var sessionidddd = sessionStorage.getItem("sessionidd");
        var currentdate = new Date().toLocaleString();
        obj = {}
        obj.sessionid = sessionidddd
        obj.loggedoutdatetime = currentdate
        obj.issessiontimedout = "false"
        console.log(obj);
        var form = new FormData();
        form.append("file", JSON.stringify(obj));
        var settings11 = {
            "async": true,
            "crossDomain": true,
            "url": aws_url+'logout_button',
            "method": "POST",
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
            "data": form
        };
        $.ajax(settings11).done(function (msg) {
            msg = JSON.parse(msg);
            console.log(msg);
            if (msg == "logoutdone") {
                window.location.href="index.php";
                sessionStorage.clear();
                localStorage.clear();
            }
        })
    })




    $("body").on("click", ".logutAD", function () {
        alert()

        var sessionidddd = sessionStorage.getItem("sessionidd");
        alert(sessionidddd)
        var currentdate = new Date().toLocaleString();
        obj = {}
        obj.sessionid = sessionidddd
        obj.loggedoutdatetime = currentdate
        obj.issessiontimedout = "false"
        console.log(obj);
        var form = new FormData();
        form.append("file", JSON.stringify(obj));
        var settings11 = {
            "async": true,
            "crossDomain": true,
            "url": aws_url+'logout_button',
            "method": "POST",
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
            "data": form
        };
        $.ajax(settings11).done(function (msg) {
            msg = JSON.parse(msg);
            console.log(msg);
            if (msg == "logoutsuccess") {
                authContext.logOut();
                window.location.href="index.php";
                authContext.logOut();
                sessionStorage.clear();
                localStorage.clear();
            }

        })


    })




    $('body').on('click', '.sidebar-main-toggle', function(){
        // $(this).addClass('min');
        if($(this).hasClass('min')){
            $(this).removeClass('min');
            $(this).addClass('max');
        }
        else {
            $(this).removeClass('max');
            $(this).addClass('min');
        }
    })
})
