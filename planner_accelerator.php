<?php
session_start();
if ($_SESSION['usernamee'] == '') {
	 header("location:index.php");
}
?>
<!DOCTYPE html>
<html lang="en">
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Wavemaker - WM FLOW</title>
	<?php include 'assets/includes/common_css.php'; ?>
	<?php include 'assets/includes/common_scripts.php';?>

	<script src="global_assets/js/demo_pages/uploader_bootstrap.js"></script>


	<script src="global_assets/js/plugins/uploaders/fileinput/plugins/purify.min.js"></script>
	<script src="global_assets/js/plugins/uploaders/fileinput/plugins/sortable.min.js"></script>
	<script src="global_assets/js/plugins/uploaders/fileinput/fileinput.min.js"></script>

	
	<script src="assets/js/accelerator.js"></script>
	<script>
	$(document).ready(function () {
	  $(".displaytoptextboxes").hide();
	  var authContext = new AuthenticationContext({
		 clientId: 'd3cc7c04-0c90-44d5-b40b-7f10a5cce951',
		 postLogoutRedirectUri: window.location
	 });

	 // #3: Handle redirect after token requests
	 if (authContext.isCallback('https://cin-webapp-indtvautop1-dev-02.azurewebsites.net/index.php')) {

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

	</script>

</head>

<body>

	<!-- Main navbar -->

	<!-- /main navbar -->

	<?php include 'header.php';?>
	<!-- Page content -->
	<div class="page-content">

		<?php include 'assets/includes/side_navbar.php';?>

		<div class="loading">
			<img src="assets/images/loading.gif" alt="">
		</div>


		<!-- Main content -->
		<div class="content-wrapper" >

			<!-- Content area -->
			<div class="content">

				<!-- Bootstrap file input -->
				<div class="card">
					<div class="">

						<div class="total_div">
							<div class="cprp new_plan">
                                <div class="step-content">
                            		<div class="step-content_">
                            			<div class="acce_div">
                            				<h6 class="font-weight-semibold">Upload Accelerator File</h6>
                            				<div class="col-lg-10">
												<div class="texttodisplay"></div>
                            					<input type="file" id="load-file" class="file-input-ajax" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" data-fouc>
                            				</div>
                            				<div class="col-lg-12 submit_btn">
                            					<button type="button" class="btn btn-primary" id="upl-btn">Upload <i class="icon-upload ml-2"></i></button>
                            				</div>
                            			</div>
										<div class="acce_File_">

										</div>
                            		</div>
                            	</div>
							</div>
						</div>
					</div>



					<div class="" style="height:30px;">

					</div>
				</div>
				<!-- /page content -->

			</body>


<!-- Mirrored from demo.interface.club/limitless/demo/bs4/Template/layout_1/LTR/default/full/uploader_bootstrap.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 12 Jun 2019 06:48:45 GMT -->
</html>
