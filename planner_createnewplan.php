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
	<!-- Added by HTTrack -->
	<meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added by HTTrack -->
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Wavemaker - WM FLOW</title>

	<!-- Global stylesheets -->

	<?php include 'assets/includes/common_css.php'; ?>

	<?php include 'assets/includes/common_scripts.php';?>
	<link rel="stylesheet" href="assets/css/plannercreatenewplan.css">
</head>
<<<<<<< Updated upstream
=======
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
    background: #323335;
    padding: 30px;
    margin-top: 47px;
    border: 1px solid oramge;
    border: 1px solid #f07144!important;
}

p{
	height: auto;
}
/* .basetgstyle{
	padding: 12px !important;
} */

/* responsive */
@media screen and (max-width: 540px) {
	.select2-selection{
	width: 275px;
}
.campign_name{
	width: 275px;
}
.campign_id{
	width: 275px;
}
.icon-paragraph-justify3:before {
    content: "\eec1";
	color: white;
	float: right;
}
}

@media screen and (max-width: 320px) {
	.mb-12{
	width: 275px;
}
body{
	height : 200vh!important;
            }
.content{
	width: 260px;
			}
			.page-header{
				width: 318px
			}
			.content-wrapper{

				width: 100%;
			}
			.page-content{
				width: 333px!important;
			}
}

@media screen and (max-width: 540px) {
.cprp {
    padding: 30px 0px;
}
}
@media screen and (max-width: 768px) {
.page-content{
   width: 1000px!important;
   height: 120vh;
}
}
/* responsive */

>>>>>>> Stashed changes


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

				<div class="breadcrumb-line breadcrumb-line-light header-elements-md-inline">
					<div class="d-flex">
						<div class="breadcrumb">
							<a href="planner_ongoing_dashboard.php" class="breadcrumb-item"><i
									class="icon-home2 mr-2"></i> Home</a>
							<span class="breadcrumb-item active">Create New Plan</span>
							<!-- <span style="position:absolute;right:0px;margin-left:13px;">Help<img style="width:17px;height:17px;" title="'+client+'" src="assets/images/informicon.svg"/></span> -->
							<p class="help">HELP
								<img style="width:17px;" title="Write to adminwmflow@wmglobal.com to get details added"
									src="assets/images/informicon.svg">
							</p>
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
								<!-- <h5 class="font-weight-bold">CREATE NEW PLAN</h5>
								<hr> -->
								<div class="parent">

									<div class="mb-4">
										<div class="row">
											<div class="col-md-6">
												<div class="col-md-12">
													<h6 title="<?php echo $_SESSION['tool_tips']['CreateNewPlan_Client'];?>"
														class="font-weight-semibold">Client<span
															class="text-danger">*</span></h6>
												</div>
												<div class="col-md-12">
													<select class="form-control select client" required id="select"
														data-fouc data-placeholder="Select Client">
														<option value=""></option>
													</select>
													<div data-placeholder="" class="mm client_freezeclass" data-fouc>
													</div>
												</div>
											</div>

											<div class="col-md-6">
												<div class="col-md-12">
													<h6 title="<?php echo $_SESSION['tool_tips']['CreateNewPlan_Brand'];?>"
														class="font-weight-semibold">Brand<span
															class="text-danger">*</span>
													</h6>
												</div>
												<div class="col-md-12">
													<select class="form-control select" required id="select0" data-fouc
														data-placeholder="Select Brand">
														<option value=""></option>
													</select>
													<div data-placeholder="" class="freezebrand mm" data-fouc>
													</div>
												</div>
											</div>
										</div>
									</div>




									<div class="mb-4">
<<<<<<< Updated upstream
										<div class="row">

											<div class="col-md-6">
												<div class="col-md-12">
													<h6 title="<?php echo $_SESSION['tool_tips']['CreateNewPlan_CampaignNames'];?>"
														class="font-weight-semibold">Campaign Name<span
															class="text-danger">*</span>
													</h6>
												</div>
												<div class="col-md-12 capm_name_class">
													<input class="form-control campign_name" required data-fouc
														placeholder="Type the Campaign Name">
												</div>
											</div>
											<div class="col-md-6">
												<div class="col-md-12">
													<h6 title="<?php echo $_SESSION['tool_tips']['CreateNewPlan_Campaignid'];?>"
														class="font-weight-semibold">Campaign Id<span
															class="text-danger">*</span></h6>
												</div>
												<div class="col-md-12 camp_id">
													<!-- <option value=""></option>
											</select> -->
												</div>
											</div>
										</div>
									</div>







=======
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
>>>>>>> Stashed changes
									<div class="mb-4">
										<!-- <p class="mb-2">Select2 supports ability to add choices automatically as the user is typing into the search field. Try typing in the search field below and entering a space or a comma.</p> -->
										<div class="row">
											<div class="col-md-6">

												<div class="col-md-12">
													<h6 title="<?php echo $_SESSION['tool_tips']['CreateNewPlan_PrimaryTGId'];?>"
														class="font-weight-semibold">Primary TG<span
															class="text-danger">*</span></h6>
												</div>
												<div class="col-md-12">
													<!-- <select data-placeholder="Primary TG" required class="form-control select primary_tg" data-fouc>
												<option value=""></option>
											</select> -->
													<select data-placeholder="Primary TG"
														class="form-control js-example-basic-single primary_tg"
														name="state">
														<option value=""></option>

													</select>
													<div class="primary_freeze">
														<!-- <input class="form-control" required  data-fouc placeholder="Type the Campaign Name"> -->
													</div>
												</div>
											</div>
											<div class="col-md-6">
												<div class="col-md-12">
													<h6 title="<?php echo $_SESSION['tool_tips']['CreateNewPlan_BaseTGId'];?>"
														class="font-weight-semibold">Secondary TG<span
															class="text-danger">*</span></h6>
												</div>
												<div class="col-md-12">
													<!-- <select data-placeholder="Base Tg" required class="form-control select base_tg" data-fouc>
												<option value=""></option>
											</select> -->
													<select data-placeholder="Secondary TG"
														class="form-control js-example-basic-single  base_tg"
														name="state">
														<option value=""></option>
													</select>
													<div class="base_freeze">
														<!-- <input class="form-control" required  data-fouc placeholder="Type the Campaign Name"> -->
													</div>
												</div>
											</div>
										</div>
									</div>




									<div class="mb-4">
										<!-- <p class="mb-2">Select2 supports ability to add choices automatically as the user is typing into the search field. Try typing in the search field below and entering a space or a comma.</p> -->
										<div class="row">
											<div class="col-md-6">
												<div class="col-md-12">
													<h6 title="<?php echo $_SESSION['tool_tips']['CreateNewPlan_EndWeek'];?>"
														class="font-weight-semibold">Pre-eval End Week<span
															class="text-danger">*</span></h6>
												</div>
												<div class="col-md-4">
													<select data-placeholder="End week" required
														class="form-control select end_week" data-fouc>
														<option value=""></option>
													</select>
													<div class="endfreeze">
													</div>
												</div>
											</div>
                                                 </div>
												   </div>
												   



									 <div class="mb-4" style="margin-left: 8px;">
									<!-- <p class="mb-2">Select2 supports ability to add choices automatically as the user is typing into the search field. Try typing in the search field below and entering a space or a comma.</p> -->
									 <div class="row">
										<div class="col-md-12">
											<h6  title="<?php echo $_SESSION['tool_tips']['CreateNewPlan_CampaignMarkets'];?>" class="font-weight-semibold">Campaign Markets<span class="text-danger">*</span></h6>
										</div>
										<div class="col-md-12">
											<select multiple="multiple" class="form-control select-fixed-multiple campign_markets" required data-fouc data-placeholder="Select Campaign Markets">
												<option value=""></option>
											</select>
											<div class="select_markets">

											</div>
										</div>
									</div>
								</div>
												 <!-- <div class="mb-4">
													 <div class="row">
													 <div class="col-md-12">
													<h6 title="<?php echo $_SESSION['tool_tips']['CreateNewPlan_CampaignMarkets'];?>"
														class="font-weight-semibold">Campaign Markets<span
															class="text-danger">*</span></h6>
                                                 
												<div class="col-md-12">
													<select multiple="multiple"
														class="form-control select-fixed-multiple campign_markets"
														required data-fouc data-placeholder="Select Campaign Markets">
														<option value=""></option>
													</select>
													<div class="select_markets">
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
<<<<<<< Updated upstream
								</div> -->






								<div class="mb-4">
									<!-- <p class="mb-2">Select2 supports ability to add choices automatically as the user is typing into the search field. Try typing in the search field below and entering a space or a comma.</p> -->
									<div class="row">
										<div class="col-md-6">
											<div class="col-md-12">
												<h6 title="<?php echo $_SESSION['tool_tips']['CreateNewPlan_CampaignMarkets'];?>"
													class="font-weight-semibold">Channel Selection Report<span
														class="text-danger">*</span></h6>
											</div>

											<!-- <p>YES</p> -->
											<p class="onclass">ON</p>
											<p class="offclass">OFF</p>
											<div class="col-md-12">
												<!-- <input type="radio">Yes -->
												<!-- <label style="padding: 12px;"><input type="radio" name="Admin">YES</label>
								 											<label style=""><input type="radio" name="Admin">NO</label> -->
												<!-- <form id="channel_selection">
																				  <input type="radio" name="channel__" value="YES" /> YES &nbsp;&nbsp;&nbsp;
																				  <input type="radio" name="channel__" value="NO" /> NO
																			</form> -->
												<div class="channel_selection_freez">

												</div>

												<label class="switch">
													<input type="checkbox" id="channel_selection" checked value="true"
														name="disableYXLogo">
													<div class="slider round"></div>
												</label>


												<!-- <div class="channel_selection_freez">

</div>							</div> -->
											</div>
										</div>
										<div class="col-md-6">
											<div class="col-md-12">
												<h6 title="<?php echo $_SESSION['tool_tips']['CreateNewPlan_CampaignMarkets'];?>"
													class="font-weight-semibold">Program Performance Report<span
														class="text-danger">*</span></h6>
											</div>
											<p class="onnclass">ON</p>
											<p class="offfclass">OFF</p>
											<div class="col-md-12">
												<!-- <input type="radio">Yes -->
												<!-- <label style="padding: 12px;"><input type="radio" name="Admin">YES</label>
								 											<label style=""><input type="radio" name="Admin">NO</label> -->
												<!-- <form id="program_performance">
																				  <input type="radio" name="progran__" value="YES" /> YES &nbsp;&nbsp;&nbsp;
																				  <input type="radio" name="progran__" value="NO" /> NO
																				</form> -->
												<div class="program_performance_freez">

												</div>

												<label class="switch">
													<input type="checkbox" id="program_performance" checked value="true"
														name="disableYXLogo">
													<div class="slider round"></div>
												</label>
=======
<!-- change -->
<div class="mb-4">
	<div class="row">
		<div class="col-md-3">
			<h6  title="<?php echo $_SESSION['tool_tips']['CreateNewPlan_Client'];?>" class="font-weight-semibold">year<span class="text-danger">*</span></h6>
		</div>
		<div class="col-md-4">
			<select class="form-control select year" required id="selectyear" data-fouc data-placeholder="Select Client">
				<option value=""></option>
			</select>
			<div data-placeholder="" class="mm yearfreez" data-fouc>

			</div>
		</div>
	</div>
</div>
<div class="mb-4">
	<!-- <p class="mb-2">Select2 supports ability to add choices automatically as the user is typing into the search field. Try typing in the search field below and entering a space or a comma.</p> -->
	<div class="row">
		<div class="col-md-3">
			<h6  title="<?php echo $_SESSION['tool_tips']['CreateNewPlan_Brand'];?>" class="font-weight-semibold">Pre-eval End Week<span class="text-danger">*</span>
			</h6>
		</div>
		<div class="col-md-4">
			<select class="form-control select endweeek" required id="selectendweek" data-fouc data-placeholder="Select Brand">
				<option value=""></option>
			</select>
			<div data-placeholder="" class="endfreeze mm" data-fouc>

			</div>
		</div>
	</div>
</div>





							 <!-- change -->
>>>>>>> Stashed changes


											</div>
										</div>
									</div>
								</div>

								<!-- <p class="mb-2">Select2 supports ability to add choices automatically as the user is typing into the search field. Try typing in the search field below and entering a space or a comma.</p> -->








								<div class="row">
									<div class="col-md-6">

									</div>
									<div class="col-md-6" style="margin-bottom: 35px;">

										<button type="button" name="button" class="btn btn-primary file_download"
											data-toggle="modal" data-target="#myModal">File Download</button>
									</div>
								</div>


								<div class="mb-12">
									<div class="row">
										<div class="col-md-4"></div>
										<div class="col-md-4">
											<button type="submit"
												class="btn form-control cprp_submit create_plan">Create <i
													class="icon-paperplane ml-2"></i></button>
										</div>
										<div class="col-md-4"></div>
									</div>


								</div>
							</div>
							<div class="card fadeInDown texttodisplay" style="">
								<!-- <h5 style="color:#000;">Channel Selection Sheet being created. Once complete you will receive it in your inbox. -->
								</h5>
							</div>
						</div>


					</div>
				</div>

				<div class="row btns">
					<div class="col-md-6"></div>
					<div class="col-md-6">

						<button type="submit" class="btn btn-primary fadeInDown next_btn" title="Next"
							tooltip="Next"><span>NEXT </span></button>

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
				<div class="modal-dialog">

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

<script src="assets/js/create.js"></script>
<!-- <script src="assets/js/common.js" charset="utf-8"></script> -->
<script>
	$(document).ready(function () {
		$('.js-example-basic-single').select2();
	});
</script>


<style>


.select2-dropdown .select2-dropdown--below{

	width:400px !important;
}
	</style>
<!-- Mirrored from demo.interface.club/limitless/demo/bs4/Template/layout_1/LTR/default/full/uploader_bootstrap.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 12 Jun 2019 06:48:45 GMT -->

</html>