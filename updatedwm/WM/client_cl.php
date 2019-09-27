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
	<script src="global_assets/js/demo_pages/uploader_bootstrap.js"></script>
    <script src="global_assets/js/plugins/forms/styling/uniform.min.js"></script>
	<script src="global_assets/js/plugins/forms/styling/switchery.min.js"></script>
	<script src="global_assets/js/plugins/forms/styling/switch.min.js"></script>
    <script src="global_assets/js/demo_pages/form_checkboxes_radios.js"></script>
    <script src="global_assets/js/plugins/forms/selects/bootstrap_multiselect.js"></script>
	<script src="global_assets/js/plugins/forms/selects/select2.min.js"></script>
    <script src="global_assets/js/demo_pages/form_select2.js"></script>
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
.total_div{
	display: none;
}
.nav-tabs .nav-link.active {
	background-color: #cccccc87;
}
.file-preview {
	display: none;
}
</style>

<script>
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
</script>
<body>

	<!-- Main navbar -->

	<!-- /main navbar -->

	<?php	include 'header.php';?>
	<!-- Page content -->
	<div class="page-content">

		<?php include 'assets/includes/planner.php';?>


		<!-- Main content -->
		<div class="content-wrapper">




			<!-- Content area -->
			<div class="content">

				<!-- Bootstrap file input -->
				<div class="card">
					<div class="card-body">
						<!-- Form -->
						<form>
							<ul class="nav nav-tabs nav-justified alpha-grey mb-0">
								<li class="nav-item"><a href="#login-tab1" class="nav-link border-y-0 border-left-0 active" data-toggle="tab"><h5 class="my-1">User Inclusion</h5></a></li>
								<li class="nav-item"><a href="#login-tab2" class="nav-link border-y-0 border-right-0" data-toggle="tab"><h5 class="my-1">User Exclusion</h5></a></li>
							</ul>

							<div class="tab-content modal-body">
								<div class="tab-pane fade show active" id="login-tab1">
									<div class="cprp card">
										<div class="mb-4">
											<h6 class="font-weight-semibold">Cleint Lead</h6>
											<div class="row">
												<div class="col-md-6">
													<!-- <p>Client Lead</p> -->
													<input class="form-control" type="text" name="text"  placeholder="Name">
												</div>
												<div class="col-md-6">

													<input type="file" class="file-input" multiple="multiple" data-fouc>

												</div>
											</div>



										</div>
										<div class="mb-4">
											<h6 class="font-weight-semibold">Role</h6>
											<!-- <p class="mb-2">Select2 supports ability to add choices automatically as the user is typing into the search field. Try typing in the search field below and entering a space or a comma.</p> -->
											<div class="row">
												<div class="col-md-4">
													<select class="form-control select-multiple-tokenization" multiple="multiple" data-fouc data-placeholder="Select Campaign Duration">
														<option value="AZ">Arizona</option>
														<option value="CO">Colorado</option>
														<option value="ID">Idaho</option>
														<option value="WY">Wyoming</option>
														<option value="AL">Alabama</option>
														<option value="IA">Iowa</option>
														<option value="KS">Kansas</option>
														<option value="KY">Kentucky</option>
													</select>
												</div>
											</div>
										</div>
										<div class="mb-4">
											<h6 class="font-weight-semibold">ACD</h6>
											<!-- <p class="mb-2">Select2 supports ability to add choices automatically as the user is typing into the search field. Try typing in the search field below and entering a space or a comma.</p> -->
											<div class="row">
												<div class="col-md-4">
													<select class="form-control select-multiple-tokenization" multiple="multiple" data-fouc data-placeholder="Select ACD">
														<option value="AZ">Arizona</option>
														<option value="CO">Colorado</option>
														<option value="ID">Idaho</option>
														<option value="WY">Wyoming</option>
														<option value="AL">Alabama</option>
														<option value="IA">Iowa</option>
														<option value="KS">Kansas</option>
														<option value="KY">Kentucky</option>
													</select>
												</div>
											</div>
										</div>
										<div class="mb-4">
											<h6 class="font-weight-semibold">Client Name</h6>
											<!-- <p class="mb-2">Select2 supports ability to add choices automatically as the user is typing into the search field. Try typing in the search field below and entering a space or a comma.</p> -->
											<div class="row">
												<div class="col-md-4">
													<select class="form-control select-multiple-tokenization" multiple="multiple" data-fouc data-placeholder="Select Dispresion">
														<option value="AZ">Arizona</option>
														<option value="CO">Colorado</option>
														<option value="ID">Idaho</option>
														<option value="WY">Wyoming</option>
														<option value="AL">Alabama</option>
														<option value="IA">Iowa</option>
														<option value="KS">Kansas</option>
														<option value="KY">Kentucky</option>
													</select>
												</div>
											</div>
										</div>
										<div class="mb-4">
											<button type="submit" class="btn btn-primary cprp_submit" style="background: #4caf50;">Submit <i class="icon-paperplane ml-2"></i></button>
										</div>


									</div>
								</div>

								<div class="tab-pane fade" id="login-tab2">
									<div class="cprp card">
										<div class="mb-4">
											<h6 class="font-weight-semibold">Cleint Lead</h6>
											<div class="row">
												<div class="col-md-6">
													<!-- <p>Client Lead</p> -->
													<input class="form-control" type="text" name="text"  placeholder="Name">
												</div>
												<div class="col-md-6">

													<input type="file" class="file-input" multiple="multiple" data-fouc>

												</div>
											</div>



										</div>
										<div class="mb-4">
											<h6 class="font-weight-semibold">Role</h6>
											<!-- <p class="mb-2">Select2 supports ability to add choices automatically as the user is typing into the search field. Try typing in the search field below and entering a space or a comma.</p> -->
											<div class="row">
												<div class="col-md-4">
													<select class="form-control select-multiple-tokenization" multiple="multiple" data-fouc data-placeholder="Select Campaign Duration">
														<option value="AZ">Arizona</option>
														<option value="CO">Colorado</option>
														<option value="ID">Idaho</option>
														<option value="WY">Wyoming</option>
														<option value="AL">Alabama</option>
														<option value="IA">Iowa</option>
														<option value="KS">Kansas</option>
														<option value="KY">Kentucky</option>
													</select>
												</div>
											</div>
										</div>
										<div class="mb-4">
											<h6 class="font-weight-semibold">ACD</h6>
											<!-- <p class="mb-2">Select2 supports ability to add choices automatically as the user is typing into the search field. Try typing in the search field below and entering a space or a comma.</p> -->
											<div class="row">
												<div class="col-md-4">
													<select class="form-control select-multiple-tokenization" multiple="multiple" data-fouc data-placeholder="Select ACD">
														<option value="AZ">Arizona</option>
														<option value="CO">Colorado</option>
														<option value="ID">Idaho</option>
														<option value="WY">Wyoming</option>
														<option value="AL">Alabama</option>
														<option value="IA">Iowa</option>
														<option value="KS">Kansas</option>
														<option value="KY">Kentucky</option>
													</select>
												</div>
											</div>
										</div>
										<div class="mb-4">
											<h6 class="font-weight-semibold">Client Name</h6>
											<!-- <p class="mb-2">Select2 supports ability to add choices automatically as the user is typing into the search field. Try typing in the search field below and entering a space or a comma.</p> -->
											<div class="row">
												<div class="col-md-4">
													<select class="form-control select-multiple-tokenization" multiple="multiple" data-fouc data-placeholder="Select Dispresion">
														<option value="AZ">Arizona</option>
														<option value="CO">Colorado</option>
														<option value="ID">Idaho</option>
														<option value="WY">Wyoming</option>
														<option value="AL">Alabama</option>
														<option value="IA">Iowa</option>
														<option value="KS">Kansas</option>
														<option value="KY">Kentucky</option>
													</select>
												</div>
											</div>
										</div>
										<div class="mb-4">
											<button type="submit" class="btn btn-primary cprp_submit" style="background: #4caf50;">Submit <i class="icon-paperplane ml-2"></i></button>
										</div>


									</div>
								</div>
							</div>
						</form>
						<!-- /form -->

						<!-- <form action="#">


							<div class="form-group row">
								<h6 class="font-weight-semibold">Uploading Buying Basket:</h6>
								<div class="col-lg-10">
									<input type="file" class="file-input-ajax" multiple="multiple" data-fouc>
								</div>
								<div class="col-lg-12 submit_btn">
									<button type="submit" class="btn btn-primary" style="background: #4caf50;">Submit <i class="icon-paperplane ml-2"></i></button>
								</div>
							</div>
						</form> -->


					</div>

					<div class="row btns" style="margin-left: 15px;margin-right: 15px;">
						<div class="col-md-6">

							<!-- <button type="submit" class="btn btn-primary">Submit</button> -->

						</div>
						<div class="col-md-6">

							<button type="submit" class="btn btn-primary" style="float: right;background: #4caf50;">Submit</button>

						</div>
					</div>

					<div class="" style="height:30px;">

					</div>
				</div>
	<!-- /page content -->

</body>


<!-- Mirrored from demo.interface.club/limitless/demo/bs4/Template/layout_1/LTR/default/full/uploader_bootstrap.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 12 Jun 2019 06:48:45 GMT -->
</html>
