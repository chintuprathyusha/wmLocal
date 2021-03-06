<html>
    <head>
        <title>Minimal sample using ADAL.JS</title>
        <script src="https://secure.aadcdn.microsoftonline-p.com/lib/1.0.11/js/adal.min.js"></script>
    </head>
    <body>
        <p>
            <!-- #2: Use ADAL's login() to sign in -->
            <a href="#" onclick="authContext.login(); return false;">Log in</a> |
            <a href="#" onclick="authContext.logOut(); return false;">Log out</a>
        </p>

        <script type="text/javascript">

            // #1: Set up ADAL
            var authContext = new AuthenticationContext({
                clientId: 'c24f035c-1ff6-4dfa-b76d-c75a29ad2c3c',
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
                                    // TODO: Do something with the response
                                    console.log(xhr.responseText);
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
        </script>
    </body>
