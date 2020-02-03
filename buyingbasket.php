<?php
session_start();
if ($_SESSION['usernamee'] == '') {
	 header("location:index.php");
}

?>


<!DOCTYPE html>
<html lang="en">

<!-- Mirrored from demo.interface.club/limitless/demo/bs4/Template/layout_1/LTR/default/full/ by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 12 Jun 2019 06:24:57 GMT -->
<!-- Added by HTTrack -->
<meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added by HTTrack -->

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Wavemaker - WM FLOW</title>

	<!-- Global stylesheets -->
	<!-- <link href="https://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700,900" rel="stylesheet" type="text/css"> -->
	<?php include 'assets/includes/common_css.php';?>

	<?php include 'assets/includes/common_scripts.php';?>
	<!-- /global stylesheets -->

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

	<script src="global_assets/js/demo_pages/uploader_bootstrap.js"></script>

	<link rel="stylesheet" href="assets/css/buyingbasket.css">
	<script src="global_assets/js/plugins/uploaders/fileinput/plugins/purify.min.js"></script>
	<script src="global_assets/js/plugins/uploaders/fileinput/plugins/sortable.min.js"></script>
	<!-- <script src="global_assets/js/plugins/uploaders/fileinput/fileinput.min.js"></script> -->

	<script src="assets/js/plannerongoing.js"></script>
	<script src="assets/js/buyingbasket.js"></script>
	<script src="assets/js/buyingbasket_validations.js"></script>
</head>
<!-- <script type="text/javascript">
			function CheckNumeric(e) {
			if (window.event) // IE
			{
			if ((e.keyCode < 48 || e.keyCode > 57) & e.keyCode != 8 && e.keyCode != 44) {
			event.returnValue = false;
			return false;
		}
	}
	else { // Fire Fox
	if ((e.which < 48 || e.which > 57) & e.which != 8 && e.which != 44) {
	e.preventDefault();
	return false;
}
}
}

</script> -->

<body>



	<!-- Main navbar -->

	<!-- /main navbar -->
	<?php	include 'header.php';?>

	<!-- Page content -->
	<div class="page-content">

		<?php	include 'assets/includes/side_navbar.php';?>


		<!-- Main content -->
		<div class="content-wrapper">

			<!-- Content area -->
			<div class="content">

				<!-- Main charts -->
				<div class="row row_">
					<div class="card col-xl-12 row_">
						<div class="common_class row_">
							<div class="col-sm-2 camp_id_">
							</div>
							<div class="buying_basket">
								<div class="form-group row upload_msg_full_width">
									<h6 class="font-weight-semibold">Upload Buying Basket:</h6>
								
									<!-- <div class="card fadeInDown texttodisplay">

									</div> -->
									<div class="bb_files" style="display: inline-block;margin-left: 8px;font-size: 16px;margin-top: -1px;">

										<button id="uploadFileTrigger" style="	background: #f07144;border: none;color: #fff;padding: 9px;border-radius: 4px;">Click to Select File</button>

										<div class="buyingFileNameDisplay" style="display:inline-block;" ></div>
										<input type="file" value="myfile" style="display:none" name="myfile"
											class="file-input-ajax" id="load-file"
											accept=".csv, xlsm, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel">

										<!-- <input type="button" value="delete FIle" /> -->


										<!-- <span class="red_color">Accepts only Excel files</span> -->
									</div>
									<!-- <div class="col-lg-12 submit_btn">
										<button type="submit" class="btn btn-primary" style="background: #4caf50;" id="upl-btn">Upload <i class="icon-upload ml-2"></i></button>
									</div> -->
								</div>
							</div>
							<div class="radio_class">
								<!-- <button type="submit" value="Genre Level Budget Allocation"  key='1' class="common_main cprp_main">Genre Level Budget Allocation</button> -->
								<button type="submit" value="Genre Level Budget Allocation" key="1"
									class="common_main cprp_main">Genre Level Budget Allocation</button>
								<!-- <input type="radio" name="gender" value="Genre Level Budget Allocation"  key='1' class="common_main cprp_main"><span class="spanClass">Genre Level Budget Allocation</span> -->
								<!-- <button  type="submit"  value="Channel Level Budget Allocation" key='2' class="common_main budget_main">Channel Level Budget Allocation</button> -->
								<button type="submit" value="Channel Level Budget Allocation" key="2"
									class="common_main budget_main">Channel Level Budget Allocation</button>
								<!-- <input type="radio" name="gender" value="Channel Level Budget Allocation" key='2' class="common_main budget_main"><span class="spanClass_">Channel Level Budget Allocation</span><br> -->
							</div>
							<div class="cprp_div close_">
								<hr>
								<h6 class="font-weight-semibold weight">Weightage</h6>
								<div class="row">
									<div class="col-md-6">
										<h6 class="font-weight-semibold">CPRP <span class="appendcprp"></span></h6>
										<input class="inputboxstyle form-control touchspin-no-mousewheel input cprp_val"
											id="a" type="number" name="number" min="1" max="99"
											placeholder="Select the range till 100">
									</div>
									<div class="col-md-6">
										<h6 class="font-weight-semibold">Reach <span class="appendreach"></span></h6>
										<input
											class="inputboxstyle form-control touchspin-no-mousewheel input reach_val"
											id="b" type="number" name="number" min="0" max="100"
											placeholder="Select the range till 100">
									</div>
								</div>
								<div class="row row1">
									<div class="col-md-6">
										<h6 class="font-weight-semibold">CPRP Channels - Spots/day <span
												class="appendcprpchannels"></span></h6>
										<input
											class="inputboxstyle form-control touchspin-no-mousewheel input cprp_channel_val"
											type="number" name="number" min="1" max="50"
											onKeyUp="if(this.value>50){this.value='50';}else if(this.value<0){this.value='0';}"
											placeholder="Select the range till 50">
									</div>
									<div class="col-md-6">
										<h6 class="font-weight-semibold">Frequency Channels - Spots/day <span
												class="appendfreqchannels"></span></h6>
										<input
											class="inputboxstyle form-control touchspin-no-mousewheel input frequency_channel"
											type="number" name="number" min="0" max="50"
											onKeyUp="if(this.value>50){this.value='50';}else if(this.value<0){this.value='0';}"
											placeholder="Select the range till 50">
									</div>
								</div>
								<h6 class="font-weight-semibold cd">Campaign Duration (in Days) <span
										class="appendcampaignduration"></span></h6>
								<div class="row">
									<div class="col-md-6">
										<input class="inputboxstyle form-control campaign_days" type="number" min="0"
											max="365"
											onKeyUp="if(this.value>365){this.value='365';}else if(this.value<0){this.value='0';}"
											placeholder="Campaign Duration (in Days)">

									</div>
								</div>

								<div class="editDispersionDisplay mr-t-20">

								</div>
								<!-- <button data-remodal-action="close" type="button" class="remodal-close" aria-label="Close"></button> -->


								<div class="mr-t-10 text-right">
									<button class="btn remodal-add add_more">Add more</button>
									<button class="submit_ btn" data-toggle="modal"
										data-target="#myModal_">Submit</button>
								</div>


							</div>
							<div class="budget_div_ close_">
								<hr>
								<h6 class="font-weight-semibold row1">Campaign Duration (in Days)<span
										class="appendcampaigndays"></span></h6>
								<div class="row">
									<div class="col-md-6">
										<input class="form-control campaign_days_new" type="number" min="0" max="365"
											onKeyUp="if(this.value>365){this.value='365';}else if(this.value<0){this.value='0';}"
											placeholder="Campaign Duration (in Days)">

									</div>
								</div>

								<div class="editDispersionDisplay1 mr-t-20">

								</div>
								<div class="mr-t-10 text-right">
									<button class="btn remodal-add add_more_new">Add more</button>
									<button class="submit_new btn" data-toggle="modal"
										data-target="#myModal_">Submit</button>
								</div>
								<!-- <div class="mr-t-10" style="margin-top: 20px; text-align: right;"> -->
								<!-- <button class="btn btn-primary remodal-add add_more_new">Add more</button>
									<button class="submit_new btn btn-primary">Submit</button> -->

								<div class="mr-t-10" style="margin-top: 20px; text-align: right;">

								</div>
								<!-- </div> -->


							</div>
							<!-- <div class="channelbeing" style="margin-top:50px;background-color:#d1d8e0;">
								<h5 style="color:#000">Genre Level Budget Allocation Sheet being created.Once complete you will receive it in your inbox.</h5>
							</div> -->
							<div class="commonstyle forfirstpathtext">
								<!-- <h5 style="color:#000">Genre Level Budget Allocation Sheet being created.Once complete you will receive it in your inbox.</h5> -->
							</div>
							<div class="commonstyle forsecoundpathtext">
								<!-- <h5 style="color:#000">Channel Level Budget Allocation Sheet being created.Once complete you will receive it in your inbox.</h5> -->
							</div>

							<div class="spillover">
								<p class="uploadtext">Upload Budget Allocation Sheet Here<p>
										<p class="notetoupload"> Note : Fill in the budgets accross channels/genres
											before upload </p>
										<hr>
										<div class="form-group row">
											<div class="changediv">

											</div>
											<br>
											<div class="card fadeInDown spillovertexttodisplay">
												<h5 class="spillll">Genre Level Budget Allocation Sheet being
													created.Once complete you will receive it in your inbox.....</h5>

											</div>
											<div class="col-lg-12 ss_files" style="display: inherit;">


												<button id="uploadFileTrigger2" style="	background: #f07144;border: none;color: #fff;padding: 9px;border-radius: 4px;">Click to Select File</button>

                                                  <div class="GenreLevelFileNameDisplay"></div>


												<input type="file" style="display:none;" name="myfile" class="file-input-ajax"
													id="load-file__"
													accept=".csv, .xlsm, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel">

												<!-- <span class="red_color">Accepts only Excel files</span> -->
											</div>
											<!-- <div class="col-lg-12 submit_btn1">
												<button type="submit" class="btn btn-primary btn1" id="upl-btn__">Upload
													<i class="icon-upload ml-2"></i></button>
											</div> -->
										</div>

							</div>



							<div class="budgetdivnew">
								<p class="uploadtext">Upload Budget Allocation Sheet Here<p>
										<p class="notetoupload"> Note : Fill in the budgets accross channels/genres
											before upload </p>
										<hr>
										<div class="form-group row">
											<div class="changediv__">

											</div>
											<br>
											<div class="card fadeInDown budget_text" style="margin:auto">
												<h5 class="budget__">Genre Level Budget Allocation Sheet being
													created.Once complete you will receive it in your inbox.</h5>
											</div>
											<div class="col-lg-12 budget_files" style="display: inherit;">

											<button id="uploadFileTrigger1" style="	background: #f07144;border: none;color: #fff;padding: 9px;border-radius: 4px;">Click to Select File</button>

                                             <div class="ChannelLevelFileNameDisplay"></div>

												<input type="file"  style="display:none;"class="file-input-ajax" id="load-file1"
													accept=".csv, .xlsm, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel">

												<!-- <span class="red_color">Accepts only Excel files</span> -->
											</div>
											<!-- <div class="col-lg-12 submit_btn2">
												<button type="submit" class="btn btn-primary upbtn" id="upl-btn1">Upload
													<i class="icon-upload ml-2"></i></button>
											</div> -->
										</div>

							</div>



							<div class="card fadeInDown texttodisplayspill">
								<!-- <h5>Genre Level Budget Allocation Sheet being created.Once complete you will receive it in your inbox.
							</h5> -->
							</div>
							<div class="row">
								<div class="card acceleratorfiletext"></div>

							</div>
							<div class="mr-t-10 row1">
								<!-- <button class="btn btn-primary backclass" style="float:left;">Previous</button> -->
								<button type="submit" class="btn btn-primary fadeInDown backclass" title="Previous"
									tooltip="Previous"><span>PREVIOUS </span></button>
								<button type="submit" class="btn btn-primary fadeInDown next_" title="Next"
									tooltip="Next"><span>NEXT </span></button>

							</div>


						</div>


						<!-- keywords -->



						<!-- SubmitChannel -->

						<!-- /traffic sources -->
						<div class="loading">
							<img src="assets/images/loading.gif" alt="">
						</div>
					</div>
				</div>
				<!-- /main charts -->
			</div>


		</div>
		<!-- /main content -->

	</div>


</body>

<script>
	$(document).ready(function () {

		var alltooltips = JSON.parse(localStorage.getItem("tool_tips"))
		var appendcprp = alltooltips.BuyingBasket_GenreLevelBudgetAllocation_CPRP;
		var appendreach = alltooltips.BuyingBasket_GenreLevelBudgetAllocation_Reach;
		var appendcprpchannels = alltooltips.BuyingBasket_GenreLevelBudgetAllocation_CPRPChannel_Spots_days;
		var appendfreqchannels = alltooltips.BuyingBasket_GenreLevelBudgetAllocation_FrequencyChannel_Spots_days;
		var appendcampaignduration = alltooltips.BuyingBasket_ChannelLevelBudgetAllocation_CampaignDuration;
		var appendaveragecommer = alltooltips.BuyingBasket_GenreLevelBudgetAllocation_AverageCommercialDuration;
		var appenddispers = alltooltips.BuyingBasket_GenreLevelBudgetAllocation_Dispersion;
		var appendcampaigndays = alltooltips.BuyingBasket_GenreLevelBudgetAllocation_CampaignDuration;
		var appedacd = alltooltips.BuyingBasket_ChannelLevelBudgetAllocation_AverageCommercialDuration;
		var appenddispersion = alltooltips.BuyingBasket_ChannelLevelBudgetAllocation_Dispersion;

		$('.appendcprp').append('<img style="width:17px;height:17px;margin-left:10px;" title="' + appendcprp +
			'" src="assets/images/informicon.svg"/>')
		$('.appendreach').append('<img style="width:17px;height:17px;margin-left:10px;" title="' + appendreach +
			'" src="assets/images/informicon.svg"/>')
		$('.appendcprpchannels').append('<img style="width:17px;height:17px;margin-left:10px;" title="' +
			appendcprpchannels + '" src="assets/images/informicon.svg"/>')
		// $('.appendlocation').append('<img style="width:17px;height:17px;margin-left:10px;" title="'+location+'" src="assets/images/informicon.svg"/>')
		$('.appendfreqchannels').append('<img style="width:17px;height:17px;margin-left:10px;" title="' +
			appendfreqchannels + '" src="assets/images/informicon.svg"/>')
		$('.appendcampaignduration').append('<img style="width:17px;height:17px;margin-left:10px;" title="' +
			appendcampaignduration + '" src="assets/images/informicon.svg"/>')
		// $('.appendlocation').append('<img style="width:17px;height:17px;margin-left:10px;" title="'+location+'" src="assets/images/informicon.svg"/>')
		$('.appendaveragecommer').append('<img style="width:17px;height:17px;margin-left:10px;" title="' +
			appendaveragecommer + '" src="assets/images/informicon.svg"/>')

		$('.appenddispers').append('<img style="width:17px;height:17px;margin-left:10px;" title="' +
			appenddispers + '" src="assets/images/informicon.svg"/>')
		$('.appendcampaigndays').append('<img style="width:17px;height:17px;margin-left:10px;" title="' +
			appendcampaigndays + '" src="assets/images/informicon.svg"/>')
		$('.appedacd').append('<img style="width:17px;height:17px;margin-left:10px;" title="' + appedacd +
			'" src="assets/images/informicon.svg"/>')
		$('.appenddispersion').append('<img style="width:17px;height:17px;margin-left:10px;" title="' +
			appenddispersion + '" src="assets/images/informicon.svg"/>')

		// <img style="width:17px;height:17px;margin-left:10px;" src="assets/images/informicon.svg"/>

	})
</script>

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

	
	</style>




</html>.

