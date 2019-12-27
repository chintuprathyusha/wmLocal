<?php
session_start();
if ($_SESSION['usernamee'] == '') {
	header("location:index.php");
}

?>
<!DOCTYPE html>
<html lang="en">

<!-- Mirrored from demo.interface.club/limitless/demo/bs4/Template/layout_1/LTR/default/full/form_validation.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 12 Jun 2019 06:42:08 GMT -->
<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added by HTTrack -->
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Wavemaker - WM FLOW</title>

	<?php include 'assets/includes/common_css.php';?>
	<?php include 'assets/includes/common_scripts.php';?>

	<script src="global_assets/js/plugins/uploaders/fileinput/plugins/purify.min.js"></script>
	<script src="global_assets/js/plugins/uploaders/fileinput/plugins/sortable.min.js"></script>
	<script src="global_assets/js/plugins/uploaders/fileinput/fileinput.min.js"></script>
	<script src="global_assets/js/demo_pages/form_input_groups.js"></script>
	<script src="global_assets/js/demo_pages/uploader_bootstrap.js"></script>
    <script src="global_assets/js/demo_pages/form_validation.js"></script>
	<script src="assets/js/barc.js"></script>

</head>
<script>
$(document).ready(function() {
	$('.js-example-basic-single').select2();
});

</script>

<style media="screen">
.acce_File_{
	text-align: center;
}
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
.login-form {
	width: 100% ;
}
.select2-selection--single .select2-selection__rendered{
	padding-left: 2.75rem !important;
}
.form-control-feedback {
	position: absolute;
	top: 33px;
}
.form-group-feedback-left .form-control {
	padding-left: 10px;
}
.select2-selection--single .select2-selection__rendered{
	padding-left: 10px !important;
}
.hide{
	display: none;
}
.navbar-nav-link{
	display: none !important;
}


#logoutbtnid{
	background-color: #ffffff2e !important;
	border: none;
	border-radius: 5px;
	padding: 2px 15px;
	color: white;
}
.content{
	background-size: cover;
}
#admin{
	display: none !important;
}
#select2-error{
	display: none !important;
}
.validation-invalid-label{
	display: none !important;
}
.select2{
	width: 100% !important;
}
.cprp_submit{
	width: 100%;
}
.commonstyle{
	margin: auto;
	/* background: #f3713c; */
	padding: 30px;
	width: 600px;
	color:white;
}
.kv-file-upload {
	display: none;
}

/* responsive */
@media screen and (max-width: 320px) {
		.icon-paragraph-justify3:before {
			color: white;
			}
			.col-lg-3{
				margin-top:5px;
			}
			.col-lg-6{
				margin-top:5px;
			}
}
@media screen and (max-width: 768px) {
			.col-lg-3{
				margin-top:5px;
			}
			.col-lg-6{
				margin-top:5px;
			}

}

@media screen and (max-width: 768px) and (min-width: 570px) {
    .btn.btn-primary {
        margin-top: 10px;

    }
    .file-caption {
        margin-top: 12px!important;
    }
}
@media screen and (max-width: 570px) and (min-width: 320px) {
    .icon-paragraph-justify3 {
    content: "\eec1";
    color: white;
    }
    .btn.btn-primary {
        margin-top: 10px;

    }
    .file-caption {
        margin-top: 12px!important;
    }
}
/* responsive */
</style>
<body>
	<?php include 'header.php';?>
	<!-- Main navbar -->

	<!-- /main navbar -->


	<!-- Page content -->
	<div class="page-content">
		<?php	include 'assets/includes/side_navbar.php';?>



		<!-- Main content -->
		<div class="content-wrapper">




			<!-- Content area -->
			<div class="content">

				<!-- Form validation -->
				<div class="card">

					<div class="card-body">

						<div>
							<fieldset class="mb-3">
								<div class="acce_File_">

								</div>
								<div class="text-center mb-3 acce_div">


									<div style="width: 100%;">
										<div class="row">
											<h6 class="font-weight-semibold">Upload Accelerator File</h6>
											<div class="col-lg-10">
												<div class="texttodisplay" style=""></div>
												<input type="file" id="load-file" class="file-input-ajax" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" data-fouc>
											</div>
											<div class="col-lg-12 submit_btn">
												<button type="button" class="btn btn-primary" id="upl-btn" style="background: #4caf50;">Upload <i class="icon-upload ml-2"></i></button>
											</div>
										</div>
									</div>
									<!-- <span class="d-block text-muted">All fields are required</span> -->
									<hr>
								</div>
								<h5 class="mb-0" style="text-align:center">BARC Evaluation</h5>
								<br>
								<div class="form-group row">
									<label title="<?php echo $_SESSION['tool_tips']['BARC_CampaignMarkets'];?>"  class="col-form-label col-lg-3">Campaign Markets <span class="text-danger">*</span><span class="appendcampaignmarket"></span></label>
									<div class="col-lg-9">
										<select multiple="multiple" class="form-control select-fixed-multiple campaign_markets" required data-fouc data-placeholder="Select Campaign Markets">
											<option value=""></option>
										</select>
										<div data-placeholder="" class="freezeLoc select_markets" data-fouc>

										</div>
									</div>
								</div>
								<div class="form-group row">
									<label title="<?php echo $_SESSION['tool_tips']['BARC_PrimaryTGId'];?>" class="col-form-label col-lg-3">Selected Primary TG <span class="text-danger">*</span><span class="appendselectedpritg"></span></label>
									<div class="col-lg-9">

										<select name="select2" data-placeholder="Selected Primary TG" class="form-control js-example-basic-single form-control-select2 Primary_Tg_dt" required data-fouc>
											<option value=""></option>

										</select>

										<div data-placeholder="" class="freezeLoc primary_freeze" data-fouc>

										</div>
									</div>
								</div>
								<div class="form-group row">
									<label title="<?php echo $_SESSION['tool_tips']['BARC_BaseTGId'];?>" class="col-form-label col-lg-3">Selected Secondary TG <span class="text-danger">*</span><span class="appendselectedbasetg"></span></label>
									<div class="col-lg-9">

										<select name="select2" data-placeholder="Selected Secondary TG" class="form-control js-example-basic-single form-control-select2 base_tg" required data-fouc>
											<option value=""></option>

										</select>
										<div data-placeholder="" class="freezeLoc base_freeze" data-fouc>

										</div>
									</div>
								</div>
								<div class="form-group row">
									<label title="<?php echo $_SESSION['tool_tips']['BARC_EndWeek'];?>" class="col-form-label col-lg-3">Selected End Week<span class="text-danger">*</span><span class="appendselectedendweek"></span></label>
									<div class="col-lg-9">
										<select name="select2" data-placeholder="Selected End Week" class="form-control form-control-select2 End_Week_dt" required data-fouc>
											<option></option>
										</select>
										<div data-placeholder="" class="freezeLoc endfreeze" data-fouc>

										</div>
									</div>
								</div>


							</fieldset>
							<!-- <hr> -->
							<div class="row">
								<div class="col-lg-3">
									<button type="submit" class="btn btn-primary cprp_submit edit_barc" style="background: #F07144 !important;">Edit <i class="icon-paperplane ml-2"></i></button>

								</div>
								<div class="col-lg-3">
									<button type="submit" class="btn btn-primary cprp_submit confirm_barc" style="background: #F07144 !important;">Confirm <i class="icon-paperplane ml-2"></i></button>

								</div>
								<div class="col-lg-6">
									<button type="submit" class="btn btn-primary cprp_submit submit_barc" style="background-color: #BB2734 !important;color:#fff">Submit <i class="icon-paperplane ml-2"></i></button>

								</div>
							</div>
							<!-- <div class="" style="float:right">
							</div>
							<div class="" style="text-align:center;margin-top: 80px;">
							</div> -->
						</div>
						<div class="mr-t-10" style="margin-top: 20px;">
							<!-- <button class="btn btn-primary backclass" title="Previous" tooltip="Previous"style="color: #fff;border:none;float: left;background-color: transparent !Important;"><span>Previous </span><img src="assets/images/left.svg" style="width:30px;"></button> -->
							<button class="btn btn-primary backclass" title="Previous" tooltip="Previous"style="color: #F07144;border:none;float: left;background-color: transparent !Important;"><span>PREVIOUS </span></button>


						</div>
						<div class="commonstyle barcmsg" style="margin-top:50px;background: #323335;border: 1px solid #f07144!important;">
							<!-- <h5 style="color:#000">Genre Level Budget Allocation Sheet being created.Once complete you will receive it in your inbox1232kavya.</h5> -->
						</div>
					</div>
				</div>
				<!-- /form validation -->

			</div>
			<!-- /content area -->


			<div class="loading">
				<img src="assets/images/loading.gif" alt="">
			</div>

		</div>
		<!-- /main content -->

	</div>
	<!-- /page content -->

</body>
</html>
