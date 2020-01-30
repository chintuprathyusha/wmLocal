<?php
session_start();
if ($_SESSION['usernamee'] == '') {
	 header("location:index.php");
}
?>

<!DOCTYPE html>
<html lang="en">

<!-- Mirrored from demo.interface.club/limitless/demo/bs4/Template/layout_1/LTR/default/full/ by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 12 Jun 2019 06:24:57 GMT -->
<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added by HTTrack -->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Wavemaker - WM FLOW</title>

    <!-- Global stylesheets -->
    <!-- <link href="https://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700,900" rel="stylesheet" type="text/css"> -->

    <!-- <script src="assets/js/common.js"></script> -->
	<?php include 'assets/includes/common_css.php';?>
	<?php include 'assets/includes/common_scripts.php';?>
	<script src="assets/js/ongoing_dashboardjs.js"></script>
<link rel="stylesheet" href="assets/css/planner_dashboard.css">
    <!-- <script src="assets\js\sessiontimeoutjs.js"></script> -->

</head>
<script>
$(document).ready(function () {
  $(".displaytoptextboxes").hide();
  var username = sessionStorage.getItem("usernamee");
  // if (username ==  null) {
  //     window.location.href="index.php";
  // }
  var userrole = sessionStorage.getItem("role");
  // if (userrole!= 'Planner') {
  //     $('#hidepri').css('display','none');
  // }
  // else {
  //     $('#hidepri').css('display','block');
  //     $('.Prioritizebtn').empty()
  // }$(document).ready(function () {
  // $(".displaytoptextboxes").hide();
})
	// })

</script>

<body>

    <!-- Main navbar -->

    <!-- /main navbar -->
    <?php	include 'header.php';?>

    <!-- Page content -->
    <div class="page-content">
        <?php	include 'assets/includes/side_navbar.php';?>

        <div class="content-wrapper">

            <!-- Page header -->
            <div class="page-header page-header-light">

              <div class="breadcrumb-line breadcrumb-line-light header-elements-md-inline" >
                  <div class="">
                      <div class="breadcrumb">
                          <a href="planner_ongoing_dashboard.php" class="breadcrumb-item"><i class="icon-home2 mr-2"></i> Home</a>
                          <span class="breadcrumb-item active">OnGoing Plan</span>
                          <!-- <span style="position:absolute;right:0px;margin-left:13px;">Help<img style="width:17px;height:17px;" title="'+client+'" src="assets/images/informicon.svg"/></span> -->
                          <p class="help">HELP
                            <img style="width:15px;" title="Write to adminwmflow@wmglobal.com to get details added" src="assets/images/informicon.svg">
						</p>
                      </div>


                      <a href="#" class="header-elements-toggle text-default d-md-none"></a>
                  </div>
              </div>
            </div>



            <!-- Content area -->
            <div class="content cntnt">

                <!-- Main charts -->
                <div class="row row_" >
                    <div class="col-xl-12 colxl" >
                        <div class="card" >
                            <div class="btn3_" >
                                <!-- <span style="font-size:16px; color: #eade47;font-weight: 600;text-decoration: none;float:right;">More Filters </span> -->
                            <img class="btn3" src="assets/images/filter-icon.svg">
                            <!-- <button onclick="location.href='planner_createnewplan.php';" class="createbtn">Create plan</button> -->
                        </div>

                        <!-- Order direction sequence control -->
                        <!-- <div class="card" style="background-color: #222c31;"> -->
                        <div class="row displaytoptextboxes" style="display:none;" >
                            <!-- <div class="row"> -->
							<div class="col-sm-6 col-md-2 campid">
                                        <div class="s-e-campid">Campaign ID:
                                            <input type="text" placeholder="search for Campaign ID"
                                                class="form-control Campaignidclass" />
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-md-2 date">
                                        <div class="s-e-date">Start Date:
                                            <input class="form-control startdateclass" placeholder="start date"
                                                type="date" />
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-md-2 date">
                                        <div class="s-e-date">End Date:
                                            <input class="form-control startdateclass" placeholder="start date"
                                                type="date" />
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-md-2 client">
                                        <div class="s-e-client">Client Name:
                                            <select data-placeholder="Client Name"
                                                class="form-control select clientclass" id="clientt" data-fouc>
                                                <option value=""></option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-md-2 brand">
                                        <div class="s-e-brand">Brand Name:
                                            <select data-placeholder="BrandName" class="form-control select brandclass"
                                                id="brandd" data-fouc>
                                                <option value=""></option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-1 go">
                                        <button class="form-control gobtn">GO</button>
                                    </div>
                        </div>


                        <!-- <div class="linesss">
                        </div> -->
                        <table class="table datatable-multi-sorting" >
                            <thead>
                                <tr>
									<th>Sl.no</th>
                                    <th>Campaign ID</th>
                                    <th class="brnd">Brand</th>
                                    <th class="clnt">Client</th>
                                    <th>Planner Name</th>
                                    <th class="startdate">Start Date</th>
                                    <?php if ($_SESSION['role'] == 'ClientLead'): ?>
                                      <th >Prioritization</th>
                                    <?php endif; ?>
                                    <link href="assets/css/sweetalert.css" rel="stylesheet" type="text/css">
                                    <script src="assets/js/sweetalert.min.js"></script>
                                    <th>Download</th>
                                </tr>
                            </thead>
                            <tbody class="displaytabledata">
                                <!-- <tr>
                                <td><a href="#"></a></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr> -->

                        </tbody>
                    </table>
                </div>
                <!-- /order direction sequence control -->
            </div>
            <!-- /traffic sources -->

        </div>
    </div>
    <!-- /main charts -->
</div>
<!-- Footer -->
<!-- <div class="navbar navbar-expand-lg navbar-light">
<div class="text-center d-lg-none w-100">
<button type="button" class="navbar-toggler dropdown-toggle" data-toggle="collapse" data-target="#navbar-footer">
<i class="icon-unfold mr-2"></i>
Footer
</button>
</div>

<div class="navbar-collapse collapse" id="navbar-footer">
<span class="navbar-text">
&copy; 2015 - 2018. <a href="#">Limitless Web App Kit</a> by <a href="http://themeforest.net/user/Kopyov" target="_blank">Eugene Kopyov</a>
</span>

<ul class="navbar-nav ml-lg-auto">
<li class="nav-item"><a href="https://kopyov.ticksy.com/" class="navbar-nav-link" target="_blank"><i class="icon-lifebuoy mr-2"></i> Support</a></li>
<li class="nav-item"><a href="https://demo.interface.club/limitless/docs/" class="navbar-nav-link" target="_blank"><i class="icon-file-text2 mr-2"></i> Docs</a></li>
<li class="nav-item"><a href="https://themeforest.net/item/limitless-responsive-web-application-kit/13080328?ref=kopyov" class="navbar-nav-link font-weight-semibold"><span class="text-pink-400"><i class="icon-cart2 mr-2"></i> Purchase</span></a></li>
</ul>
</div>
</div> -->
<!-- /footer -->

</div>
<!-- /main content -->

</div>
</div>



<div id="replanmodal" class="modal fade" tabindex="-1">
    <div class="modal-dialog modal-sm">
        <div class="modal-content" >

            <!-- Form -->
            <form class="modal-body">
                <div class="text-center mb-3">
                    <!-- <i class="icon-spinner11 icon-2x text-warning border-warning border-3 rounded-round p-3 mb-3 mt-1"></i>
                    <h5 class="mb-0">Password recovery</h5>
                    <span class="d-block text-muted">We'll send you instructions in email</span> -->
                    <button class="form-control up" ><a href="buyingbasket.php" style="color:#fff">Re-Plan from Buying Basket Upload </a></button>

                </div>

                <div class="form-group form-group-feedback form-group-feedback-right">
                    <button class="form-control up" ><a href="planner_accelerator.php" style="color:#fff">Re-plan by Uploading Revised Accelerator Plan</a></button>
                </div>

                <!-- <button type="submit" class="btn bg-blue btn-block"><i class="icon-spinner11 mr-2"></i> Reset password</button> -->
            </form>
            <!-- /form -->

        </div>
    </div>
</div>
<div id="downloadicon" class="modal fade" tabindex="-1"  data-backdrop="static" data-keyboard="false">
    <div class="modal-dialog modal-lg">
        <div class="modal-content mc" >
            <div class="modal-header">
                <!-- <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> -->
                <button type="button" style="color: #bb512b" class="close closeModal closeClass" data-dismiss="modal">&times;</button>
            </div>
            <!-- Form -->
			<div class="modal-body sl" >
				<div class="row rowsl">
					<div class="row row_header">
						<div class="col-md-6">
						<button type="button" class="selectAll">Select All</button>
						<!-- <button type="button" class="downloadAll">Download </button> -->
						</div>
						<div class="col-md-6"><p class="down">Click here to download all the files  &nbsp &nbsp
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
<!-- /page content -->
<div class="loading">
    <img src="assets/images/loading.gif" alt="">
</div>
</body>

<!-- Mirrored from demo.interface.club/limitless/demo/bs4/Template/layout_1/LTR/default/full/ by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 12 Jun 2019 06:41:06 GMT -->
</html>
