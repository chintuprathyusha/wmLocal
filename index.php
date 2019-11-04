<?php
session_start();
?>
<!DOCTYPE html>
<meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added by HTTrack -->
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Wavemaker - WM FLOW</title>

	<!-- <link href="https://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700,900" rel="stylesheet" type="text/css"> -->
	<?php include 'assets/includes/common_css.php';?>

    <?php include 'assets/includes/common_scripts.php';?>

	<script src="assets/js/login.js" charset="utf-8"></script>

</head>
<style>
/* .content{
/* background-image: ('assets/images/wmflow.png') */
/* background-image: url('assets/images/wmflow.png');
} */
</style>


<body>

	<!-- Page content -->
	<div class="page-content login-cover">

		<!-- Main content -->
		<div class="content-wrapper">

			<!-- Content area -->
			<div class="content d-flex justify-content-center align-items-center">

				<!-- Login form -->

				<div class="card mb-0">
					<div class="tab-content card-body">
						<div class="tab-pane fade show active" id="login-tab1">
							<div class="card-body" style="width:400px;">
								<div class="text-center mb-3">
									<blink style="font-size: 17px;color: red;" class="updatesinprogress">Updates in progress. Kindly check back later </blink>
									<img src="assets/images/2nd Folder/blacklogo.png" alt="" style="width: 200px;height: 100%;">
								</div>

								<!-- <div class="form-group form-group-feedback form-group-feedback-left">
									<input type="text" class="form-control  login_input useridclass" placeholder="Username">
									<div class="form-control-feedback">
										<i class="icon-user text-muted"></i>
									</div>
								</div>

								<div class="form-group form-group-feedback form-group-feedback-left">
									<input type="password" class="form-control login_input  passwordclass" placeholder="Password">
									<div class="form-control-feedback">
										<i class="icon-lock2 text-muted"></i>
									</div>
								</div> -->

								<div class="form-group">
									<!-- <button type="submit"  class="login_btn btn btn-primary btn-block">Login</button>
									<p class="text-center mr-t-10">(or)</p> -->
									<button onclick="authContext.login(); return false;" class="loginbtnn btn btn-primary btn-block" >LOGIN</button>
									<!-- <button  onclick="authContext.logOut(); return false;">Log out AD</button> -->
								</div>
							</div>
						</div>


					</div>
				</div>

				<!-- /login form -->

			</div>
			<!-- /content area -->

		</div>
		<!-- /main content -->

	</div>
	<div class="loading">
		<img src="assets/images/loading.gif" alt="">
	</div>
	<!-- /page content -->
	<script src="assets/js/common.js" charset="utf-8"></script>
	<script type="text/javascript">
		$(".loading").hide();
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
							currentdate = generateDateTime();
							sendObj = {};
							sendObj.responsefromad = response_fromAD;
							sendObj.currentdate = currentdate;
							debugger
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
									login_obj.login_type = 'ad'

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
	</script>
	<div class="loading">
		<img src="assets/images/loading.gif" alt="">
	</div>
</body>
