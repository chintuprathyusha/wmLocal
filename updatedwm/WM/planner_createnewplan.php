<!DOCTYPE html>
<html lang="en">

<!-- Mirrored from demo.interface.club/limitless/demo/bs4/Template/layout_1/LTR/default/full/uploader_bootstrap.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 12 Jun 2019 06:48:40 GMT -->
<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added by HTTrack -->
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Limitless - Responsive Web Application Kit by Eugene Kopyov</title>

	<!-- Global stylesheets -->
	<link href="https://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700,900" rel="stylesheet" type="text/css">
	<link href="global_assets/css/icons/icomoon/styles.min.css" rel="stylesheet" type="text/css">
	<link href="assets/css/bootstrap.min.css" rel="stylesheet" type="text/css">
	<link href="assets/css/bootstrap_limitless.min.css" rel="stylesheet" type="text/css">
	<link href="assets/css/layout.min.css" rel="stylesheet" type="text/css">
	<link href="assets/css/common.css" rel="stylesheet" type="text/css">
	<link href="assets/css/components.min.css" rel="stylesheet" type="text/css">
	<link href="assets/css/colors.min.css" rel="stylesheet" type="text/css">
	<!-- /global stylesheets -->

	<!-- Core JS files -->
	<script src="global_assets/js/main/jquery.min.js"></script>
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
</style>

<!-- <script>
$( document ).ready(function() {
	$(".budget").hide();
	$("body").on("click", ".cprp_r", function(){
		$(".cprp").show();
		$(".budget").hide();
	})
	$("body").on("click", ".budget_r", function(){
		debugger
		$(".budget").show();
		$(".cprp").hide();
		$("#cprp_upload").hide();
		$(".complete_cprp").hide();
	})
	$("#cprp_upload").hide();
	$(".complete_cprp").hide();
	$(".complete_budget").hide();
	$("#budget_upload").hide();
	$("body").on("click", ".cprp_submit", function(){
		// $(this).hide();
		$("#cprp_upload").show();
		$(".cprp").hide();
		$(".complete_cprp").show();
		$(".budget_r").attr('disabled', 'disabled');
		$(".uniform-choice span").addClass("disable_border")
		$(".cprp_r").attr('disabled', 'disabled');
	})
	$("body").on("click", ".submit_budget", function(){
		$("#budget_upload").show();
		$(".budget").hide();
		$(".complete_budget").show();
		$(".cprp_r").attr('disabled', 'disabled');
		$(".uniform-choice span").addClass("disable_border")
		$(".budget_r").attr('disabled', 'disabled');
	})

	$("body").on("click", ".cprp_slip", function(){
		$(".total_div").hide();
	})
	$("body").on("click", ".budget_slip", function(){
		$(".total_div").hide();
	})
});
</script> -->
<body>

	<!-- Main navbar -->

	<!-- /main navbar -->

	<?php include 'header.php';?>
	<!-- Page content -->
	<div class="page-content">

		<?php include 'assets/includes/planner.php';?>


		<!-- Main content -->
		<div class="content-wrapper">




			<!-- Content area -->
			<div class="content">

				<!-- Bootstrap file input -->
				<div class="card">
					<div class="">

						<div class="total_div">
							<div class="cprp card new_plan">
								<h5 class="font-weight-bold">CREATE NEW PLAN</h5>
								<hr>
								<div class="mb-4">
									<div class="row">
										<div class="col-md-2">
											<h6 class="font-weight-semibold">Client</h6>
										</div>
										<div class="col-md-4">
											<select class="form-control select client" data-fouc data-placeholder="Select Markets">
												<option value=""></option>
											</select>
										</div>
									</div>
								</div>
								<div class="mb-4">
									<!-- <p class="mb-2">Select2 supports ability to add choices automatically as the user is typing into the search field. Try typing in the search field below and entering a space or a comma.</p> -->
									<div class="row">
										<div class="col-md-2">
											<h6 class="font-weight-semibold">Brand
											</h6>
										</div>
										<div class="col-md-4">
											<select class="form-control select-multiple-tokenization brand" multiple="multiple" data-fouc data-placeholder="Select Primary TG">
												<option value=""></option>
											</select>
										</div>
									</div>
								</div>
								<div class="mb-4">
									<!-- <p class="mb-2">Select2 supports ability to add choices automatically as the user is typing into the search field. Try typing in the search field below and entering a space or a comma.</p> -->
									<div class="row">
										<div class="col-md-2">
											<h6 class="font-weight-semibold">Campaign Name
											</h6>
										</div>
										<div class="col-md-4">
											<input class="form-control campign_name"  data-fouc placeholder="Select Base TG">
										</div>
									</div>
								</div>
								<div class="mb-4">
									<!-- <p class="mb-2">Select2 supports ability to add choices automatically as the user is typing into the search field. Try typing in the search field below and entering a space or a comma.</p> -->
									<div class="row">
										<div class="col-md-2">
											<h6 class="font-weight-semibold">Campaign Id</h6>
										</div>
										<div class="col-md-4">
											<select class="form-control select-multiple-tokenization campign_id" multiple="multiple" data-fouc data-placeholder="Select End Week">
												<option value=""></option>
											</select>
										</div>
									</div>
								</div>
								<div class="mb-4">
									<!-- <p class="mb-2">Select2 supports ability to add choices automatically as the user is typing into the search field. Try typing in the search field below and entering a space or a comma.</p> -->
									<div class="row">
										<div class="col-md-2">
											<h6 class="font-weight-semibold">Primary TG</h6>
										</div>
										<div class="col-md-4">
											<select data-placeholder="Primary TG" class="form-control select primary_tg" data-fouc>
												<option value=""></option>
											</select>
										</div>
									</div>
								</div>
								<div class="mb-4">
									<!-- <p class="mb-2">Select2 supports ability to add choices automatically as the user is typing into the search field. Try typing in the search field below and entering a space or a comma.</p> -->
									<div class="row">
										<div class="col-md-2">
											<h6 class="font-weight-semibold">Base TG</h6>
										</div>
										<div class="col-md-4">
											<select data-placeholder="Base Tg" class="form-control select base_tg" data-fouc>
												<option value=""></option>
											</select>
										</div>
									</div>
								</div>
								<div class="mb-4">
									<!-- <p class="mb-2">Select2 supports ability to add choices automatically as the user is typing into the search field. Try typing in the search field below and entering a space or a comma.</p> -->
									<div class="row">
										<div class="col-md-2">
										<h6 class="font-weight-semibold">End Week</h6>
										</div>
										<div class="col-md-4">
											<select data-placeholder="end week" class="form-control select end_week" data-fouc>
												<option value=""></option>
											</select>
										</div>
									</div>
								</div>

								<div class="mb-4">
									<!-- <p class="mb-2">Select2 supports ability to add choices automatically as the user is typing into the search field. Try typing in the search field below and entering a space or a comma.</p> -->
									<div class="row">
										<div class="col-md-2">
											<h6 class="font-weight-semibold">Campaign Markets</h6>
										</div>
										<div class="col-md-4">
											<select class="form-control select-multiple-tokenization campign_markets" multiple="multiple" data-fouc data-placeholder="Select End Week">
												<option value=""></option>
											</select>
										</div>
									</div>
								</div>


								<div class="mb-12">
									<button type="submit" class="btn btn-primary cprp_submit create_plan" style="background: #4caf50;float:right;">Create <i class="icon-paperplane ml-2"></i></button>
								</div>
							</div>
						</div>
					</div>

					<div class="row btns" style="margin-left: 15px;margin-right: 15px;">
						<div class="col-md-6"></div>
						<div class="col-md-6">

							<button type="submit" class="btn btn-primary" style="float: right;background: #4caf50;">Next</button>

						</div>
					</div>

					<div class="" style="height:30px;">

					</div>
				</div>
				<!-- /page content -->

			</body>


<!-- Mirrored from demo.interface.club/limitless/demo/bs4/Template/layout_1/LTR/default/full/uploader_bootstrap.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 12 Jun 2019 06:48:45 GMT -->
</html>
