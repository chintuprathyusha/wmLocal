<?php
session_start();
if ($_SESSION['usernamee'] == '') {
	header("location:index.php");
}
// if ($_SESSION['userid'] = '') {
// 	 header("location:index.php");
// }

// echo ($_SESSION['userid'])


//
// $EmailId = $_SESSION['tool_tips']['CreateProfile_EmailId'];
// // echo $EmailId;
// $Location = $_SESSION['tool_tips']['CreateProfile_Location'];
// $Client = $_SESSION['tool_tips']['CreateProfile_Client'];
// $ClientLeadEmailId = $_SESSION['tool_tips']['CreateProfile_ClientLeadEmailId'];

?>
<!DOCTYPE html>
<html lang="en">
<meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added by HTTrack -->
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Wavemaker - WM FLOW</title>

	<!-- Global stylesheets -->
	<!-- <link href="https://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700,900" rel="stylesheet" type="text/css"> -->

	<?php include 'assets/includes/common_css.php';?>
	<!-- Theme JS files -->
	<?php include 'assets/includes/common_scripts.php';?>
	<script src="global_assets/js/demo_pages/form_validation.js"></script>
	<script src="assets/js/plannerprofile.js"></script>
	<link rel="stylesheet" href="assets/css/userprofile.css">


	<!-- /theme JS files -->

</head>

<body>
	<?php include 'header.php';?>
	<!-- Main navbar -->

	<!-- /main navbar -->


	<!-- Page content -->
	<div class="page-content" >
		<?php	include 'assets/includes/side_navbar.php';?>
		<div class="content-wrapper">

			<!-- Page header -->
			<div class="page-header page-header-light">

				<div class="breadcrumb-line breadcrumb-line-light header-elements-md-inline">
					<div class="">
						<div class="breadcrumb">
							<a href="planner_ongoing_dashboard.php" class="breadcrumb-item"><i class="icon-home2 mr-2"></i> Home</a>
							<span class="breadcrumb-item active">User Profile</span>
							<!-- <span style="position:absolute;right:0px;margin-left:13px;">Help<img style="width:17px;height:17px;" title="'+client+'" src="assets/images/informicon.svg"/></span> -->
							<p class="help">HELP
								<img style="width:17px;" title="Write to adminwmflow@wmglobal.com to get details added" src="assets/images/informicon.svg">
							</p>	
						</div>


						<a href="#" class="header-elements-toggle text-default d-md-none"></a>
					</div>
				</div>
			</div>

			<!-- Content area -->
			<div class="content">

				<!-- Form validation -->
				<div class="card">

					<div class="card-body bodyy">
						<!-- <p class="mb-4">Validate.js makes simple clientside form validation easy, whilst still offering plenty of customization options. The plugin comes bundled with a useful set of validation methods, including URL and email validation, while providing an API to write your own methods. All bundled methods come with default error messages in english and translations into 37 other languages. <strong>Note:</strong> <code>success</code> callback is configured for demo purposes only and can be removed in validation setup.</p> -->

						<!-- <form class="form-validate-jquery textcolor" action="#"> -->
						<fieldset class="mb-3">
							<!-- <legend class="text-uppercase font-size-sm font-weight-bold">Basic inputs</legend> -->
							<div class="text-center mb-3">
								<!-- <i class="icon-plus3 icon-2x text-success border-success border-3 rounded-round p-3 mb-3 mt-1"></i> -->
								<h5 class="mb-0">Create Profile</h5>
								<span class="d-block text-muted">All fields are required</span>
								<!-- <button type="button" name="button" class="edit_createprofile">Edit</button> -->
							</div>


                           <div class="row">
                         <div class="col-md-6">
							<div class="form-group row">

								<label title="<?php echo $_SESSION['tool_tips']['CreateProfile_EmailId'];?>" class="col-form-label col-lg-12">Email Id <span class="text-danger">*</span> </label>
								<div class="col-lg-12 email">
									<!-- <input type="email" name="email" class="form-control" id="email" required placeholder="Enter a valid email address"> -->
								</div>
							</div>
							</div>
							<!-- /email field -->

                             <div class="col-md-6">
							<div class="form-group row planner_div">
								<label title="<?php echo $_SESSION['tool_tips']['CreateProfile_Location'];?>" class="col-form-label col-lg-12">Location <span class="text-danger">*</span></label>
								<div class="col-lg-12">
									<select name="select2" data-placeholder="Select Location" class="form-control locationClass form-control-select2" required data-fouc>
										<option></option>
									</select>
									<div data-placeholder="" class="freezeLoc" data-fouc>

									</div>
								</div>
							</div>
							</div>
							</div>


							<div class="form-group row">
								<label title="<?php echo $_SESSION['tool_tips']['CreateProfile_Client'];?>" class="col-form-label col-lg-3">Client<span class="text-danger">*</span></label>
								<div class="col-lg-9 select_">

									<select data-placeholder="Select Client" required class="form-control select clientClass"  multiple  data-fouc>
										<option value=""></option>
									</select>

									<select data-placeholder="Select Client" required class="form-control select clientClass__"  data-fouc>
										<option value=""></option>
									</select>

									<div data-placeholder="" class="freezeclient" data-fouc>

									</div>
								</div>
                        <!--<select data-placeholder="Select Client" required class="form-control select clientClass"  multiple  data-fouc>
							<option value=""></option>
						</select> -->
							</div>

							<div class="form-group row">
								<label title="<?php echo $_SESSION['tool_tips']['CreateProfile_ClientLeadEmailId'];?>" class="col-form-label col-lg-3">Client Lead Email Id's<span class="text-danger">*</span></label>
								<div class="col-lg-9">
									<input type="text" name="" value="" required placeholder="Client Email Id's" readonly class="form-control CLemId">
									<!-- <input type="text" name="text" class="form-control CLemId" readonly placeholder="Enter a valid email address"> -->
									<div data-placeholder="Client Lead" class="clientleadClass" data-fouc>

									</div>
									<div class="freezeClientLead">

									</div>
								</div>
							</div>
						</fieldset>
						<div class="row">
							<div class="col-md-5"></div>
							<div class="col-md-2">
						<div class="d-flex justify-content-end align-items-center">
							<!-- <button type="reset" class="btn btn-light" id="reset">Reset <i class="icon-reload-alt ml-2"></i></button> -->
							<button type="submit" class="form-control btn create_btn create_plan">Create <i class="icon-paperplane ml-2"></i></button>
						</div>
						</div>
						</div>
						<!-- </form> -->
					</div>
				</div>
				<!-- /form validation -->

			</div>
			<!-- /content area -->


			<!-- Footer -->

			<!-- /footer -->
			<div class="loading">
				<img src="assets/images/loading.gif" alt="">
			</div>
			<!-- </div> -->
			<!-- /main content -->

		</div>
	</div>
	<!-- /page content -->

</body>
<!-- Mirrored from demo.interface.club/limitless/demo/bs4/Template/layout_1/LTR/default/full/form_validation.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 12 Jun 2019 06:42:09 GMT -->
</html>
