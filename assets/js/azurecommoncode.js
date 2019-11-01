$(document).ready(function () {
    var sessionTimeOutvalue;
    var procductonurll;
    var cliendid;
    $.ajax({
               url: "configfile.json",
               method: "GET",
               dataType: 'json',
               async : false,
               success: function(data){
                      msg =  data;
                     sessionTimeOutvalue;
                     procductonurll;
                     cliendid;
                     console.log(msg.data[0].sessionTimeOut);
                     sessionTimeOutvalue = msg.data[0].sessionTimeOut
                     procductonurll = msg.data[0].productionurl
                     cliendid = msg.data[0].clientId
                     console.log(sessionTimeOutvalue);
                     console.log(procductonurll);
                     console.log(cliendid);
                },
                error:function() {
                    alert("Error")
                }
           });
    // #1: Set up ADAL
    var authContext = new AuthenticationContext({
        clientId: cliendid,
        postLogoutRedirectUri: window.location
    });
console.log(typeof(procductonurll));
    // #3: Handle redirect after token requests
    if (authContext.isCallback(procductonurll)) {

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

                            console.log(xhr.responseText);
                            var response_fromAD = xhr.responseText
                            console.log(response_fromAD);


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

})
