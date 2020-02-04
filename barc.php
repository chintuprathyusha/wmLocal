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
	<!-- <script src="global_assets/js/plugins/uploaders/fileinput/fileinput.min.js"></script> -->
	<script src="global_assets/js/demo_pages/form_input_groups.js"></script>
	<script src="global_assets/js/demo_pages/uploader_bootstrap.js"></script>
    <script src="global_assets/js/demo_pages/form_validation.js"></script>
	<script src="assets/js/barc.js"></script> 
	 <link rel="stylesheet" href="assets/css/barc.css">
	 <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<script>
$(document).ready(function() {
	$('.js-example-basic-single').select2();
});

</script>
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
											<div class="col-lg-4">
												<div  class="texttodisplay" style=""></div>
												

                                     <!-- <input type="file"  style="display:none"  class="file-input-ajax" id="load-file" accept=".csv, xlsm, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"></span> -->
 
									 <button id="uploadFileTrigger2" style="background: #f07144;border: none;color: #fff;padding: 9px;border-radius: 4px;position: absolute;left: 7px;top: -5px;">Click to Select File</button>

									         <div class="acceleratorFileNameDisplay" style="position: relative;left: 80px;top:3px;"></div>
												<input type="file" name="myfile" style="display:none;" id="load-file" class="file-input-ajax" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel">
											</div>
											<!-- <div class="col-lg-12 submit_btn">
												<button type="button" class="btn btn-primary" id="upl-btn" style="background: #4caf50;">Upload <i class="icon-upload ml-2"></i></button>
											</div> -->
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
									<label title="<?php echo $_SESSION['tool_tips']['BARC_EndWeek'];?>" class="col-form-label col-lg-3">Selected Year<span class="text-danger">*</span><span class="appendselectedendweek"></span></label>
									<div class="col-lg-9">
										<select name="select2" data-placeholder="Selected End Week" class="form-control form-control-select2 End_Week_dt" required data-fouc>
											<option></option>
										</select>
										<div data-placeholder="" class="freezeLoc endfreeze" data-fouc>

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
									<button type="submit" class="btn btn-primary cprp_submit edit_barc" style="background: #F07144 !important;">Edit <i class="fa fa-pencil ml-2" style="font-size: 18px;"></i></button>

								</div>
								<div class="col-lg-3">
									<button type="submit" class="btn btn-primary cprp_submit confirm_barc" style="background: #F07144 !important;">Confirm <i class="fa fa-check ml-2" style="font-size: 18px;"></i></button>

								</div>
								<div class="col-lg-6">
									<button type="submit" class="btn btn-primary cprp_submit submit_barc" style="background-color: #BB2734 !important;color:#fff">Submit <i class="icon-paperplane ml-2" style="font-size: 18px;"></i></button>

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
<script>
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myclick");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
</script>
<style>

.uploadbtn{
	display: block;
    width: 150px;
    padding: 7px 0px;
    border: none;
    border-radius: 6px;
    /* height: 30px; */
    color: #fff;
    background-color: #F07144;
    margin-top: -3px;
}
   .texttodisplay{margin: auto;
    background: none !important;
    color: #fff;
    text-align: center;
    padding: 0px !important;
	
    margin-top: 0px !important;
	border: none!important;
   }
	</style>
</html>
