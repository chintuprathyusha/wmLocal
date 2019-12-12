<?php
session_start();
if ($_SESSION['usernamee'] == '') {
	header("location:index.php");
}
// echo $_SESSION['allprevialges']
?>

<!DOCTYPE html>
<html lang="en">
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Wavemaker</title>

	<?php include 'assets/includes/common_css.php'; ?>
	<?php include 'assets/includes/common_scripts.php';?>

	<script src="assets/js/user_dashboard.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/Base64/1.0.2/base64.js"></script>
	<!-- <script type="assets/js/configfile.json"></script> -->

</head>

<style media="screen">

.displaytoptextboxes{
	display: none;
}

.DownloadAllfiles{
	padding: 4px 20px;
	background: #4caf50;
	border: 1px solid #ccc;
	border-radius: 5px;
	font-size: 15px;
	font-weight: 400;
	margin-right: 10px;
}
#DataTables_Table_0_wrapper{
	padding: 10px 10px;
}
#DataTables_Table_1_wrapper{
	padding: 10px 10px;
}
.dataTables_paginate .paginate_button.disabled{
	background-color: #37474f3b;

}
.content {
	background-color: #1f2022;
}
.createbtn{
	background-color: #BB2734;
	color: white;
	font-size: 14px;
	color: #ffffff;
	cursor: pointer;
	border: none;
	width: 214px;
	padding: 5px;
}

</style>
<body>

	<!-- Main navbar -->

	<!-- /main navbar -->
	<?php	include 'header.php';?>
	<div class="loading">
		<img src="assets/images/loading.gif" alt="">
	</div>

	<!-- Page content -->
	<div class="page-content">

		<?php	include 'assets/includes/side_navbar.php';?>


		<!-- Main content -->
		<div class="content-wrapper">

			<!-- Page header -->
			<div class="page-header page-header-light">

				<div class="breadcrumb-line breadcrumb-line-light header-elements-md-inline" style="background-color: #1f2022;color: white;">
					<div class="d-flex">
						<div class="breadcrumb">
							<a href="planner_ongoing_dashboard.php" class="breadcrumb-item"><i class="icon-home2 mr-2"></i> Home</a>
							<span class="breadcrumb-item active">My Plans</span>
							<!-- <span style="position:absolute;right:0px;margin-left:13px;">Help<img style="width:17px;height:17px;" title="'+client+'" src="assets/images/informicon.svg"/></span> -->
							<p class="help">HELP
								<img style="width:15px;" title="Write to adminwmflow@wmglobal.com to get details added" src="assets/images/informicon.svg">
							</span>
						</div>


						<a href="#" class="header-elements-toggle text-default d-md-none"><i class="icon-more"></i></a>
					</div>
				</div>
			</div>


			<!-- /page header -->


			<!-- Content area -->
			<div class="content" style="">

				<!-- Main charts -->
				<div class="row" style="height:100%">
					<div class="col-xl-12" style="height:100%">
						<div class="card" style="height:100%;background-color: #1f2022;color:white;">
							<div class="createbtn__">

								<button class="createbtn">CREATE PLAN</button>
								<img class="btn3" style="width:20px;height:20px;float:right;cursor:pointer;cursor:pointer !important;"src="assets/images/filter-icon.svg">
							</div>

							<div class="row displaytoptextboxes" style="display:none;">
								<div class="col-sm-4" style="display: inline-block;">
									<div style="margin-top:12px;margin-right:12px;padding:12px;">Start Date:
										<input class="form-control startdateclass"  placeholder="start date" type="date"/>
									</div>
								</div>
								<div class="col-sm-4" style="display: inline-block;">
									<div style="margin-top:12px;margin-right:12px;padding:12px;">End Date:
										<input  class="form-control enddateclass" placeholder="end date" type="date"/>
									</div>
								</div>
								<div class="col-sm-3" style="display: inline-block;">

									<div style="margin-top: 32px;margin-right: 12px;padding: 12px;">
										<button style="background-color:#f07144;border:none;color:#fff;width:55px;" class="form-control gobtn">GO</button>
									</div>
								</div>
							</div>
							<div class="same_Class" style="color:#f07144">
								On-Going Plans
							</div>
							<table class="table datatable-multi-sortingg" style="color:white;width:100% !important;">
								<thead style="">
									<tr>
										<th  style="text-align:center;">Sl.no</th>
										<th>Campaign ID</th>
										<th>Campaign Name</th>
										<th>Client</th>
										<th>Brand</th>
										<th>Start Date</th>
										<th>Mark As Complete</th>
										<th>Download</th>
									</tr>
								</thead>
								<tbody class="displayincompletedplans">

								</tbody>
							</table>

							<div class="same_Class" style="color:#f07144">
								Completed Plans
							</div>
							<table class="table datatable-multi-sorting" style="color:white;margin-top:30px;">
								<thead>
									<tr>
										<th style="text-align:center;">Sl.no</th>
										<th>Campaign ID</th>
										<th>Campaign Name</th>
										<th>Client</th>
										<th>Brand</th>
										<th>Replan</th>
										<th>End Date</th>
										<th>Download</th>
									</tr>
								</thead>
								<tbody class="displaycompletedplans">

								</tbody>
							</table>
						</div>
						<!-- /order direction sequence control -->
					</div>
				</div>
			</div>
			<!-- /main charts -->
		</div>

	</div>
	<!-- /main content -->

	<div id="downloadicon" class="modal fade" tabindex="-1"  data-backdrop="static" data-keyboard="false">
		<div class="modal-dialog modal-lg">
			<div class="modal-content" style="margin-top: 255px;">
				<div class="modal-header">
					<!-- <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> -->
					<button type="button" class="close closeModal closeClass" data-dismiss="modal">&times;</button>
				</div>
				<!-- Form -->
				<div class="modal-body" style="padding-top: 0px;">
					<div class="row" style="display:block">
						<div class="row row_header">
							<div class="col-md-6">
								<button type="button" class="selectAll">Select All</button>
								<button type="button" class="downloadAll">Download </button>
							</div>
							<div class="col-md-6"><p>Click here to download all the files
								<button type="button" class="DownloadAllfiles">Download All Files</button></p>
							</div>
						</div>
						<div class="row row_body">

						</div>
					</div>
				</div>



			</div>
			<!-- /form -->

		</div>
	</div>
	<div id="replanmodal" class="modal fade" tabindex="-1">
		<div class="modal-dialog modal-sm">
			<div class="modal-content" style="margin-top: 255px;">
				<div class="modal-body">
					<div class="text-center mb-3">
						<button class="form-control buyingbasketbtn" style="background-color: #192124;color: white;">Re-Plan from Buying Basket Upload </button>
					</div>

					<div class="form-group form-group-feedback form-group-feedback-right">
						<button class="form-control acceleratorbtn"style="background-color: #192124;color: white;" >Re-plan by Uploading Revised Accelerator Plan</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- /page content -->

</body>
