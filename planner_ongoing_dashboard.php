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

	<link rel="stylesheet" type="text/css" href="assets/js/daterangepicker/daterangepicker.css" />

	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="assets/css/plannerongdashboard.css">
</head>

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
				<div class="breadcrumb-line breadcrumb-line-light header-elements-md-inline">
					<div class="">
						<div class="breadcrumb">
							<a href="planner_ongoing_dashboard.php" class="breadcrumb-item"><i
									class="icon-home2 mr-2"></i> Home</a>
							<span class="breadcrumb-item active">My Plans</span>
							<!-- <span style="position:absolute;right:0px;margin-left:13px;">Help<img style="width:17px;height:17px;" title="'+client+'" src="assets/images/informicon.svg"/></span> -->
							<p class="help">HELP
								<img style="width:15px;" title="Write to adminwmflow@wmglobal.com to get details added"
									src="assets/images/informicon.svg">
							</p>
						</div>
						<a href="#" class="header-elements-toggle text-default d-md-none"><i class=""></i></a>
					</div>
				</div>
			</div>


			<!-- /page header -->


			<!-- Content area -->
			<div class="content" style="">

				<!-- Main charts -->
				<div class="row row1">
					<div class="col-xl-12 row2">
						<div class="card">
							<div class="createbtn__">

								<button class="createbtn" style="display: inline-block;position: relative;top: 56px;">CREATE PLAN</button>
								<!-- <img class="btn3" src="assets/images/filter-icon.svg"> -->
							</div>



							<!-- ...startdate....klmkjkl -->
							<div class="flt-r" style="position: absolute;right: 0px;top:50px">
								<input type="text" id="dateFilter" class="flt-r" name="daterange"
									placeholder="Select Date Range" readonly />
								<span><i class="fa fa-calendar" style="font-size:16px;color:black;position: absolute;top: 30px;left: 7px;"></i></span>
								<!-- <i class="fa fa-caret-down"></i> -->
							</div>
							<!-- 




							<div class="row " >
								<div class="col-sm-4 colsm" >
									<div class="s-e-date">Start Date:
										<input class="form-control startdateclass"  placeholder="start date" type="date"/>
									</div>
								</div>
								<div class="col-sm-4 colsm" >
									<div class="s-e-date">End Date:
										<input  class="form-control enddateclass" placeholder="end date" type="date"/>
									</div>
								</div>
								<div class="col-sm-3 colsm">

									<div class="gobtndiv">
										<button  class="form-control gobtn">GO</button>
									</div>
								</div>
							</div> -->
							<div class="same_Class">
								On-Going Plans
							</div>
							<table class="table datatable-multi-sortingg">
								<thead style="">
									<tr>
										<th class="sino">S.No</th>
										<th>Campaign ID</th>
										<th class="campname">Campaign Name</th>
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

							<div class="same_Class">
								Completed Plans
							</div>
							<table class="table datatable-multi-sorting">
								<thead>
									<tr>
										<th class="sino">S.No</th>
										<th>Campaign ID</th>
										<th class="campname">Campaign Name</th>
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

	<div id="downloadicon" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<!-- <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> -->
					<button type="button" style="color: #bb512b" class="close closeModal closeClass"
						data-dismiss="modal">&times;</button>
				</div>
				<!-- Form -->
				<div class="modal-body mb">
					<div class="row" style="display:block">
						<div class="row row_header">
							<div class="col-md-6">
								<button type="button" class="selectAll">Select All</button>
								<!-- <button type="button" class="downloadAll">Download </button> -->
							</div>
							<div class="col-md-6">
								<p style="color:white;">Click here to download all the files &nbsp &nbsp
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
			<div class="modal-content mc">
				<div class="modal-body">
					<div class="text-center mb-3">
						<button class="form-control buyingbasketbtn">Re-Plan from Buying Basket Upload </button>
					</div>

					<div class="form-group form-group-feedback form-group-feedback-right">
						<button class="form-control acceleratorbtn">Re-plan by Uploading Revised Accelerator
							Plan</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- /page content -->

</body>

<script>
 $(function() {
        $( "#dateFilter" ).datepicker({  maxDate: new Date() });
      });
</script>

<script type="text/javascript" src="assets/js/daterangepicker/moment.min.js"></script>
<script type="text/javascript" src="assets/js/daterangepicker/daterangepicker.min.js"></script>

<script src="assets/js/user_dashboard.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Base64/1.0.2/base64.js"></script>

</html>