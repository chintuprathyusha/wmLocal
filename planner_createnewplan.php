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


						<a href="#" class="header-elements-toggle text-default d-md-none"></a>
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
											<div class="col-md-6 mr-b-20">
												<h6 title="<?php echo $_SESSION['tool_tips']['CreateNewPlan_Client'];?>"
													class="font-weight-semibold">Client<span
														class="text-danger">*</span></h6>
												<select class="form-control select client" required id="select"
													data-fouc data-placeholder="Select Client">
													<option value=""></option>
												</select>
												<div data-placeholder="" class="mm client_freezeclass" data-fouc>
												</div>
											</div>

											<div class="col-md-6 mr-b-20">
												<h6 title="<?php echo $_SESSION['tool_tips']['CreateNewPlan_Brand'];?>"
													class="font-weight-semibold">Brand<span class="text-danger">*</span>
												</h6>
												<select class="form-control select" required id="select0" data-fouc
													data-placeholder="Select Brand">
													<option value=""></option>
												</select>
												<div data-placeholder="" class="freezebrand mm" data-fouc>
												</div>
											</div>

											<div class="col-md-6 mr-b-20">
												<h6 title="<?php echo $_SESSION['tool_tips']['CreateNewPlan_CampaignNames'];?>"
													class="font-weight-semibold">Campaign Name<span
														class="text-danger">*</span>
												</h6>
												<div class="capm_name_class">
													<input class="form-control campign_name" required data-fouc
														placeholder="Type the Campaign Name">
												</div>
											</div>
											<div class="col-md-6 mr-b-20">
												<h6 title="<?php echo $_SESSION['tool_tips']['CreateNewPlan_Campaignid'];?>"
													class="font-weight-semibold">Campaign ID<span
														class="text-danger">*</span></h6>
												<div class="camp_id">
													<!-- <option value=""></option>
											</select> -->
												</div>
											</div>





											<div class="col-md-6 mr-b-20">
												<h6 title="<?php echo $_SESSION['tool_tips']['CreateNewPlan_PrimaryTGId'];?>"
													class="font-weight-semibold">Primary TG<span
														class="text-danger">*</span></h6>
												<select data-placeholder="Primary TG"
													class="form-control js-example-basic-single primary_tg"
													name="state">
													<option value=""></option>

												</select>
												<div class="primary_freeze">
													<!-- <input class="form-control" required  data-fouc placeholder="Type the Campaign Name"> -->
												</div>
											</div>
											<div class="col-md-6 mr-b-20">
												<h6 title="<?php echo $_SESSION['tool_tips']['CreateNewPlan_BaseTGId'];?>"
													class="font-weight-semibold">Secondary TG<span
														class="text-danger">*</span></h6>
												<!-- <select data-placeholder="Base Tg" required class="form-control select base_tg" data-fouc>
												<option value=""></option>
											</select> -->
												<select data-placeholder="Secondary TG"
													class="form-control js-example-basic-single  base_tg" name="state">
													<option value=""></option>
												</select>
												<div class="base_freeze">
													<!-- <input class="form-control" required  data-fouc placeholder="Type the Campaign Name"> -->
												</div>
											</div>
											<div class="col-md-6 mr-b-20">
												<h6 title="<?php echo $_SESSION['tool_tips']['CreateNewPlan_EndWeek'];?>"
													class="font-weight-semibold">Pre-Eval End Week<span
														class="text-danger">*</span></h6>
												<select data-placeholder="End Week" required
													class="form-control select end_week" data-fouc>
													<option value=""></option>
												</select>
												<div class="endfreeze">
												</div>
											</div>
											
											<div class="col-md-12 mr-b-20">
												<h6 title="<?php echo $_SESSION['tool_tips']['CreateNewPlan_CampaignMarkets'];?>"
													class="font-weight-semibold">Campaign Markets<span
														class="text-danger">*</span></h6>
												<select multiple="multiple"
													class="form-control select-fixed-multiple campign_markets" required
													data-fouc data-placeholder="Select Campaign Markets"
													style="width: 100%">
													<option value=""></option>
												</select>
												<div class="select_markets">
												</div>
											</div>
											<div class="col-md-6 mr-b-20" style="margin-top: 2px">
												<h6 title="<?php echo $_SESSION['tool_tips']['CreateNewPlan_CampaignMarkets'];?>"
													class="font-weight-semibold">Channel Selection Report<span
														class="text-danger">*</span></h6>

												<p class="onclass">ON</p>
												<p class="offclass">OFF</p>
												<div class="channel_selection_freez">

												</div>

												<label class="switch">
													<input type="checkbox" id="channel_selection" checked value="true"
														name="disableYXLogo">
													<div class="slider round"></div>
												</label>

											</div>
											<div class="col-md-6 mr-b-20">
												<h6 title="<?php echo $_SESSION['tool_tips']['CreateNewPlan_CampaignMarkets'];?>"
													class="font-weight-semibold">Program Performance Report<span
														class="text-danger">*</span></h6>
												<p class="onnclass">ON</p>
												<p class="offfclass">OFF</p>
												<div class="program_performance_freez">
												</div>
												<label class="switch">
													<input type="checkbox" id="program_performance" checked value="true"
														name="disableYXLogo">
													<div class="slider round"></div>
												</label>
											</div>
											
										</div>
									</div>

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

<!-- Mirrored from demo.interface.club/limitless/demo/bs4/Template/layout_1/LTR/default/full/uploader_bootstrap.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 12 Jun 2019 06:48:45 GMT -->

</html>