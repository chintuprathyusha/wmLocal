$(document).ready(function () {
    $("body").on("click", ".login_btn", function () {
        debugger;
        currentdate = new Date().toLocaleString();
        username = $('.useridclass').val();
        password = $('.passwordclass').val();

        console.log(username+"...."+password);
        login(username, password, currentdate)
    })


    $('.login_input').keypress(function(event){
        currentdate = new Date().toLocaleString();
        username = $('.useridclass').val();
        password = $('.passwordclass').val();
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            username = $('.useridclass').val();
            password = $('.passwordclass').val();
            login(username, password, currentdate)
        }
    });


    function login(username, password) {
        sendObj = {};
        sendObj.useremail = username;
        sendObj.password = password;
        sendObj.currentdate = currentdate;
        console.log(sendObj);
        var form = new FormData();
        form.append("file", JSON.stringify(sendObj));
        var settings11 = {
            "async": true,
            "crossDomain": true,
            "url": aws_url+'Login_page',
            "method": "POST",
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
            "data": form
        };
        $.ajax(settings11).done(function (msg) {
            msg = JSON.parse(msg);
            console.log(msg);
            localStorage.setItem("allprevialges",JSON.stringify(msg.privilegers))
            sessionStorage.setItem("isnewuser",msg.isnewuser)
            sessionStorage.setItem("role",msg.role)
            sessionStorage.setItem("useremail",msg.useremail)
            sessionStorage.setItem("userid",msg.user_id)
            sessionStorage.setItem("sessionidd",msg.sessionid)
            // sessionStorage.setItem("usernamee",msg.username)
            sessionStorage.setItem("isprofile", msg.isprofile_created)

            if (msg.validlogin == "true") {
                login_obj = msg;
                login_obj.login_type = 'login'

                console.log(login_obj);

                console.log(msg);

                if(msg.role == "Admin"){
                    window.location.href="adminindex.php";
                }
                else {
                    if (msg.isnewuser == "true") {
                        window.location.href="userprofile.php";
                    }
                    else {
                        if (msg.isprofile_created == "true") {
                            window.location.href="planner_ongoing_dashboard.php";
                        }
                        else {
                            window.location.href="userprofile.php";
                        }
                    }
                }
            }
            else {
                swal("Invalid username/password")
            }


            $.ajax({
                url: 'assets/backgrounds/session_create.php',
                method: 'POST',
                data: login_obj,

                success: function (msg) {
                    console.log(msg);

                }
            })

        })
    }




})
