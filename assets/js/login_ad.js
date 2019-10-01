// #1: Set up ADAL
var authContext = new AuthenticationContext({
    clientId: '39fb1160-df4a-4ece-bb64-67eb14426482',
    postLogoutRedirectUri: window.location
});

// #3: Handle redirect after token requests
if (authContext.isCallback(window.location.hash)) {

    authContext.handleWindowCallback();
    var err = authContext.getLoginError();
    if (err) {
        // TODO: Handle errors signing in and getting tokens
    }

} else {

    // If logged in, get access token and make an API request
    var user = authContext.getCachedUser();
    if (user) {

        console.log('Signed in as: ' + user.userName);

        // #4: Get an access token to the Microsoft Graph API
        authContext.acquireToken(
            'https://graph.microsoft.com',
            function (error, token) {

                // TODO: Handle error obtaining access token
                if (error || !token) { return; }

                // #5: Use the access token to make an AJAX call
                var xhr = new XMLHttpRequest();
                xhr.open('GET', 'https://graph.microsoft.com/v1.0/me', true);
                xhr.setRequestHeader('Authorization', 'Bearer ' + token);
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        $(".loading").show();
                        console.log(xhr.responseText);
                        var response_fromAD = xhr.responseText
                        console.log(response_fromAD);
                        currentdate = new Date().toLocaleString();
                        sendObj = {};
                        sendObj.responsefromad = response_fromAD;
                        sendObj.currentdate = currentdate;
                        console.log(sendObj);
                        var form = new FormData();
                        form.append("file", JSON.stringify(sendObj));
                        var settings11 = {
                            "async": true,
                            "crossDomain": true,
                            "url": aws_url+'Login_ad',
                            "method": "POST",
                            "processData": false,
                            "contentType": false,
                            "mimeType": "multipart/form-data",
                            "data": form
                        };
                        $.ajax(settings11).done(function (msg) {
                            $(".loading").hide();
                            msg = JSON.parse(msg);
                            console.log(msg);
                            localStorage.setItem("allprevialges",JSON.stringify(msg.privilegers))
                            sessionStorage.setItem("isnewuser",msg.isnewuser)
                            sessionStorage.setItem("role",msg.role)
                            sessionStorage.setItem("useremail",msg.useremail)
                            sessionStorage.setItem("userid",msg.user_id)
                            sessionStorage.setItem("sessionidd",msg.sessionid)
                            sessionStorage.setItem("usernamee",msg.username)
                            sessionStorage.setItem("isprofile", msg.isprofile_created)
                            if (msg.validlogin == "true") {
                                login_obj = msg;

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

                    } else {
                        // TODO: Do something with the error
                        // (or other non-200 responses)
                    }
                };
                xhr.send();
            }
        );
    } else {

        console.log('Not signed in.')
    }
}
