<?php
session_start();
	if ($_SESSION['usernamee'] == '') {
		 header("location:index.php");
	}
?>
<!DOCTYPE html>
<html lang="en">

<!-- Mirrored from demo.interface.club/limitless/demo/bs4/Template/layout_1/LTR/default/full/uploader_bootstrap.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 12 Jun 2019 06:48:40 GMT -->
<head>
	<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added by HTTrack -->
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Wavemaker - WM FLOW</title>

	<!-- Global stylesheets -->
	<!-- <link href="https://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700,900" rel="stylesheet" type="text/css"> -->
	<link href="assets/css/fonts.css" rel="stylesheet" type="text/css">
	<link href="global_assets/css/icons/icomoon/styles.min.css" rel="stylesheet" type="text/css">
	<link href="assets/css/bootstrap.min.css" rel="stylesheet" type="text/css">
	<link href="assets/css/bootstrap_limitless.min.css" rel="stylesheet" type="text/css">
	<link href="assets/css/layout.min.css" rel="stylesheet" type="text/css">
	<!-- <link href="assets/css/common.css" rel="stylesheet" type="text/css"> -->
	<link href="assets/css/common.css" rel="stylesheet" type="text/css">
	<link href="assets/css/components.min.css" rel="stylesheet" type="text/css">
	<link href="assets/css/colors.min.css" rel="stylesheet" type="text/css">
	<link href="assets/css/sweetalert.css" rel="stylesheet" type="text/css">

	<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.css"> -->
	<link href="global_assets/css/extras/animate.min.css" rel="stylesheet" type="text/css">
	<script src="global_assets/js/main/jquery.min.js"></script>
	<link href="assets/css/jquery-confirm.css" rel="stylesheet" type="text/css">
	<!-- <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.10/css/select2.min.css" rel="stylesheet" /> -->


	<script src="assets/js/jquery-confirm.js" charset="utf-8"></script>
	<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.10/js/select2.min.js"></script> -->

	<?php include 'assets/includes/common_scripts.php';?>

	<script src="assets/js/common.js" charset="utf-8"></script>
	<script src="assets/js/azurecode.js"></script>

	<script type="text/javascript">
	$(document).ready(function () {
	  $(".displaytoptextboxes").hide();
	  var authContext = new AuthenticationContext({
		  clientId: '39fb1160-df4a-4ece-bb64-67eb14426482',
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

	<!-- /global stylesheets -->

	<!-- /theme JS files -->

</head>
<style>
.file-drop-zone-title {
	padding: 11px;
}
.submit_btn{
	margin-top: 19px;
	float: right;
	text-align: right;
}
.cursor_pointer{
	cursor: pointer;
}
.cprp{
	padding: 30px 55px;
}
.budget{
	padding: 30px 55px;
}
.disabled {
	color: #999;
}
.disable_border{
	border:1px solid #ccc !important;
	cursor: auto;
}
.next_btn a{
	color: white;
}
.file_download{
	float: right;
}
#logoutbtnid{
	background-color: #ffffff2e !important;
	border: none;
	border-radius: 5px;
	padding: 2px 15px;
	color: white;
}
.hidden{
	display: none;
}
.sendpath h5{
	cursor: pointer;
}
.select2-selection{
	width: 400px;
}
.campign_name{
	width: 400px;
}
.campign_id{
	width: 400px;
}
/* added */
.cprp{
	background-color: #1f2022;
}
.content{
	color: white;
}

.datatable-header{
	display: none !important;
}
.content {
	/* background-image: url("assets/images/wmflow.png");
	background-repeat: no-repeat, repeat; */
	background-color: #1f2022;
	/* background-size: cover; */
}
.texttodisplay {
	margin: auto;
	background: #f3713c;
	padding: 30px;
	margin-top: 47px;
}
p{
	height: auto;
}
/* .basetgstyle{
	padding: 12px !important;
} */

</style>

<body>

	<!-- Main navbar -->

	<!-- /main navbar -->

	<?php include 'header.php';?>
	<!-- Page content -->
	<div class="page-content">

		<?php include 'assets/includes/side_navbar.php';?>
		<div class="content-wrapper">

			<!-- Page header -->
			<div class="page-header page-header-light">

				<div class="breadcrumb-line breadcrumb-line-light header-elements-md-inline" style="background-color: #1f2022;color: white;">
					<div class="d-flex">
						<div class="breadcrumb">
							<a href="planner_ongoing_dashboard.php" class="breadcrumb-item"><i class="icon-home2 mr-2"></i> Home</a>
							<span class="breadcrumb-item active">Create New Plan</span>
							<!-- <span style="position:absolute;right:0px;margin-left:13px;">Help<img style="width:17px;height:17px;" title="'+client+'" src="assets/images/informicon.svg"/></span> -->
							<span style="position:absolute;right:0px; font-size: 14px;font-weight: 500;float: left;margin-right: 30px;margin-top: 8px;color:red;text-decoration: underline;">Help
								<img style="width:17px;" title="Write to adminwmflow@wmglobal.com to get details added" src="assets/images/informicon.svg">
							</span>
						</div>


						<a href="#" class="header-elements-toggle text-default d-md-none"><i class="icon-more"></i></a>
					</div>
				</div>
			</div>

			<!-- Main content -->
			<!-- <div class="content-wrapper"> -->




			<!-- Content area -->
			<div class="content">

				<!-- Bootstrap file input -->
				<div class="">
					<div class="">

						<div class="total_div">
							<div class="cprp card new_plan">
								<h5 class="font-weight-bold">CREATE NEW PLAN</h5>
								<hr>
								<div class="parent">
									<div class="mb-4">
										<div class="row">
											<div class="col-md-3">
												<h6  title="<?php echo $_SESSION['tool_tips']['CreateNewPlan_Client'];?>" class="font-weight-semibold">Client<span class="text-danger">*</span></h6>
											</div>
											<div class="col-md-4">
												<select class="form-control select client" required id="select" data-fouc data-placeholder="Select Client">
													<option value=""></option>
												</select>
												<div data-placeholder="" class="mm client_freezeclass" data-fouc>

												</div>
											</div>
										</div>
									</div>
									<div class="mb-4">
										<!-- <p class="mb-2">Select2 supports ability to add choices automatically as the user is typing into the search field. Try typing in the search field below and entering a space or a comma.</p> -->
										<div class="row">
											<div class="col-md-3">
												<h6  title="<?php echo $_SESSION['tool_tips']['CreateNewPlan_Brand'];?>" class="font-weight-semibold">Brand<span class="text-danger">*</span>
												</h6>
											</div>
											<div class="col-md-4">
												<select class="form-control select" required id="select0" data-fouc data-placeholder="Select Brand">
													<option value=""></option>
												</select>
												<div data-placeholder="" class="freezebrand mm" data-fouc>

												</div>
											</div>
										</div>
									</div>
									<div class="mb-4">
										<!-- <p class="mb-2">Select2 supports ability to add choices automatically as the user is typing into the search field. Try typing in the search field below and entering a space or a comma.</p> -->
										<div class="row">
											<div class="col-md-3">
												<h6  title="<?php echo $_SESSION['tool_tips']['CreateNewPlan_CampaignNames'];?>" class="font-weight-semibold">Campaign Name<span class="text-danger">*</span>
												</h6>
											</div>
											<div class="col-md-4 capm_name_class">
												<input class="form-control campign_name" required  data-fouc placeholder="Type the Campaign Name">
											</div>
										</div>
									</div>
									<div class="mb-4">
										<!-- <p class="mb-2">Select2 supports ability to add choices automatically as the user is typing into the search field. Try typing in the search field below and entering a space or a comma.</p> -->
										<div class="row">
											<div class="col-md-3">
												<h6  title="<?php echo $_SESSION['tool_tips']['CreateNewPlan_Campaignid'];?>" class="font-weight-semibold">Campaign Id<span class="text-danger">*</span></h6>
											</div>
											<div class="col-md-4 camp_id">
												<!-- <option value=""></option>
											</select> -->
										</div>
									</div>
								</div>
								<div class="mb-4">
									<!-- <p class="mb-2">Select2 supports ability to add choices automatically as the user is typing into the search field. Try typing in the search field below and entering a space or a comma.</p> -->
									<div class="row">
										<div class="col-md-3">
											<h6  title="<?php echo $_SESSION['tool_tips']['CreateNewPlan_PrimaryTGId'];?>" class="font-weight-semibold">Primary TG<span class="text-danger">*</span></h6>
										</div>
										<div class="col-md-4">
											<!-- <select data-placeholder="Primary TG" required class="form-control select primary_tg" data-fouc>
												<option value=""></option>
											</select> -->
											<select  data-placeholder="Primary TG" class="form-control js-example-basic-single primary_tg" name="state">
												<option value=""></option>

												</select>
											<div class="primary_freeze">
												<!-- <input class="form-control" required  data-fouc placeholder="Type the Campaign Name"> -->
											</div>
										</div>
									</div>
								</div>
								<div class="mb-4">
									<!-- <p class="mb-2">Select2 supports ability to add choices automatically as the user is typing into the search field. Try typing in the search field below and entering a space or a comma.</p> -->
									<div class="row">
										<div class="col-md-3">
											<h6  title="<?php echo $_SESSION['tool_tips']['CreateNewPlan_BaseTGId'];?>" class="font-weight-semibold">Base TG<span class="text-danger">*</span></h6>
										</div>
										<div class="col-md-4">
											<!-- <select data-placeholder="Base Tg" required class="form-control select base_tg" data-fouc>
												<option value=""></option>
											</select> -->

											<select  data-placeholder="Base Tg" class="form-control js-example-basic-single  base_tg" name="state">
												<option value=""></option>

												</select>

											<div class="base_freeze">
												<!-- <input class="form-control" required  data-fouc placeholder="Type the Campaign Name"> -->
											</div>
										</div>
									</div>
								</div>
								<div class="mb-4">
									<!-- <p class="mb-2">Select2 supports ability to add choices automatically as the user is typing into the search field. Try typing in the search field below and entering a space or a comma.</p> -->
									<div class="row">
										<div class="col-md-3">
											<h6  title="<?php echo $_SESSION['tool_tips']['CreateNewPlan_EndWeek'];?>" class="font-weight-semibold">End Week<span class="text-danger">*</span></h6>
										</div>
										<div class="col-md-4">
											<select data-placeholder="End week" required class="form-control select end_week" data-fouc>
												<option value=""></option>
											</select>
											<div class="endfreeze">

											</div>
										</div>
									</div>
								</div>

								<div class="mb-4">
									<!-- <p class="mb-2">Select2 supports ability to add choices automatically as the user is typing into the search field. Try typing in the search field below and entering a space or a comma.</p> -->
									<div class="row">
										<div class="col-md-3">
											<h6  title="<?php echo $_SESSION['tool_tips']['CreateNewPlan_CampaignMarkets'];?>" class="font-weight-semibold">Campaign Markets<span class="text-danger">*</span></h6>
										</div>
										<div class="col-md-4">
											<select multiple="multiple" class="form-control select-fixed-multiple campign_markets" required data-fouc data-placeholder="Select Campaign Markets">
												<option value=""></option>
											</select>
											<div class="select_markets">

											</div>
										</div>
									</div>
								</div>

								<div class="row">
									<div class="col-md-6">

									</div>
									<div class="col-md-6" style="margin-bottom: 35px;">

										<button type="button" name="button" class="btn btn-primary file_download" data-toggle="modal" data-target="#myModal">File Download</button>
									</div>
								</div>
								<div class="mb-12">

									<button type="submit" class="btn form-control cprp_submit create_plan" style="background: #4b6584 !important;color: #fff;">Create <i class="icon-paperplane ml-2"></i></button>
								</div>
							</div>
							<div class="card fadeInDown texttodisplay" style="background: #d1d8e0;">
								<h5 style="color:#000;">Channel Selection Sheet being created. Once complete you will receive it in your inbox.
								</h5>
							</div>
						</div>


					</div>
				</div>

				<div class="row btns" style="margin-left: 15px;margin-right: 15px;">
					<div class="col-md-6"></div>
					<div class="col-md-6">

						<button type="submit" class="btn btn-primary fadeInDown next_btn" title="Next" tooltip="Next"style="color: #fff;border:none;float: right;background-color: transparent !Important;"><span>Next </span><img src="assets/images/right.svg" style="width:30px;"></button>

					</div>
				</div>
				<div class="loading">
					<img src="assets/images/loading.gif" alt="">
				</div>
				<div class="" style="height:30px;">

				</div>
			</div>
			<!-- /page content -->

			<!-- Modal -->
			<div class="modal fade" id="myModal" role="dialog">
				<div class="modal-dialog" style="margin-top: 211px;">

					<!-- Modal content-->
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal">&times;</button>
							<!-- <h4 class="modal-title">Modal Header</h4> -->
						</div>
						<div class="modal-body">

						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-default" data-dismiss="modal" style="background: #f1efefbd;
							border: 1px solid #ccc;
							border-radius: 5px;">Close</button>
						</div>
					</div>

				</div>
			</div>

		</div>
		<div class="ExportTableMain hidden">

		</div>

		<!-- Core JS files -->

		<!-- <script src="assets/js/sample.js" charset="utf-8"></script> -->
	</body>
	<script src="global_assets/js/main/bootstrap.bundle.min.js"></script>
	<script src="global_assets/js/plugins/loaders/blockui.min.js"></script>
	<!-- /core JS files -->

	<!-- Theme JS files -->
	<script src="global_assets/js/plugins/uploaders/fileinput/plugins/purify.min.js"></script>
	<script src="global_assets/js/plugins/uploaders/fileinput/plugins/sortable.min.js"></script>
	<script src="global_assets/js/plugins/uploaders/fileinput/fileinput.min.js"></script>

	<script src="assets/js/app.js"></script>
	<script src="assets/js/create.js"></script>
	<script src="global_assets/js/demo_pages/uploader_bootstrap.js"></script>
	<script src="global_assets/js/plugins/forms/styling/uniform.min.js"></script>
	<script src="global_assets/js/plugins/forms/styling/switchery.min.js"></script>
	<script src="global_assets/js/plugins/forms/styling/switch.min.js"></script>
	<script src="global_assets/js/demo_pages/form_checkboxes_radios.js"></script>
	<script src="global_assets/js/plugins/forms/selects/bootstrap_multiselect.js"></script>
	<script src="global_assets/js/plugins/forms/selects/select2.min.js"></script>
	<script src="global_assets/js/demo_pages/form_select2.js"></script>
	<script src="global_assets/js/plugins/tables/datatables/datatables.min.js"></script>
	<script src="global_assets/js/demo_pages/datatables_sorting.js"></script>

	<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.js"></script> -->
	<script src="global_assets/js/demo_pages/form_validation.js"></script>
	<script src="assets/js/sweetalert.min.js"></script>

	<script src="global_assets/js/demo_pages/animations_css3.js"></script>
	<script src="assets/js/sidenavjscode.js"></script>
	<script src="assets/js/exportExcel.js" charset="utf-8"></script>
	<script src="assets/js/FileSaver.min.js" charset="utf-8"></script>
	<script src="assets/js/xlsx.full.min.js" charset="utf-8"></script>
	<script src="assets/js/common.js" charset="utf-8"></script>
	<script>
	$(document).ready(function() {
	    $('.js-example-basic-single').select2();
	});

	</script>

	<!-- Mirrored from demo.interface.club/limitless/demo/bs4/Template/layout_1/LTR/default/full/uploader_bootstrap.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 12 Jun 2019 06:48:45 GMT -->
	</html>
