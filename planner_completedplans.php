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
    <title>Wavemaker</title>
	<?php include 'assets/includes/common_css.php'; ?>
	<?php include 'assets/includes/common_scripts.php';?>
	<script src="assets/js/completedplansjs.js"></script>

    <!-- Core JS files -->

    <!-- <script src="assets\js\sessiontimeoutjs.js"></script> -->


    <script>
	$(document).ready(function () {
	  $(".displaytoptextboxes").hide();
	})
      // var username = sessionStorage.getItem("usernamee");
      //debugger
        // if (username ==  null) {
        //     window.location.href="index.php";
        // }

    </script>

    <!-- /theme JS files -->

    <!-- /theme JS files -->

</head>
<style media="screen">
#logoutbtnid{
    background-color: #ffffff2e !important;
    border: none;
    border-radius: 5px;
    padding: 2px 15px;
    color: white;
}
/* .DownloadAllfiles{
    padding: 4px 20px;
    background: #4caf50;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 400;
    margin-right: 10px;
} */
.DownloadAllfiles{
   padding: 4px 20px;
    background: #bb512b;
    border: 1px solid #131514;
    /* border-radius: 5px; */
    font-size: 15px;
    font-weight: 400;
    margin-right: 10px;
    color: white;
}



/* .dataTables_filter{
    display: none;
} */
.hidden{
    display: none;
}
/* .replanmodal{
background-color: #ff3838;
border: none;
color: #000;
padding: 5px 22px;
border-radius: 4px;

} */

.datatable-header{
    display: none !important;
}

/* .DataTables_Table_0_wrapper{

} */
/* #DataTables_Table_0_wrapper{
margin-top: 45px;
} */
.content {
    /* background-color: red /* background-image: url(../images/wmflow.png) no-repeat; */
    /* background-image: url('asserts/images/wmflow.png') */
    /* background-image: url("assets/images/wmflow.png");
    background-repeat: no-repeat, repeat; */
    background-color: #1f2022;
}
.createbtn{
    border-radius: 3px;
    background-color: #b7cfe0;
    color: whi;
    font-size: 14px;
    padding: 6px 8px 5px 8px;
    color: #1a181f;
    cursor: pointer;
    border: none;
    font-weight: 500;
}
.linesss{
        position: absolute;
        top: 91px;
        width: 100%;
        border-top: 1px solid #484545;
        border-bottom: 1px solid #3e3b3b;
        padding: 1px;
}
div.oddevencolors
{
    /* border: 1px solid black; */
}
div.row_body div:nth-of-type(even)
{
    background-color: #131514;
}
div.row_body div:nth-of-type(odd)
{
    background-color : #1f1d1d;
}



.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 13px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
	position: absolute;
   top: 4px;
   left: 3px;
   height: 16px;
   width: 16px;
   background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #bb512b;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
	left: 5px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}
/* responsive */
.icon-paragraph-justify3:before {
    content: "\eec1";
	color: white;
	float: right;
}
@media screen and (max-width: 540px) {
	.content-wrapper{
		overflow-x:auto;
	}
}
@media screen and (max-width: 768px) {
	.content-wrapper{
		overflow-x:auto;
    }
	.page-content{
		width: 1000px;
    height: 100%;
	}
}
@media screen and (max-width: 1024px) {
	.content-wrapper{
		overflow-x:auto;
	}
}
@media screen  and (max-width: 425px)  and (min-width: 320px){
			.page-header{
				width: 1000px;
			}
			.card{
				width: 1000px;
			}
			body{
				width:fit-content;
			}
			.col-sm-2{
			  width: 150px;
		  }
		  .col-sm-1{
			  width: 150px;
			  margin-left: 800px;
		  }
		  .gobtn{
			  margin-top: -40px;
		  }
}
/* responsive */

</style>
<body>

    <!-- Main navbar -->

    <!-- /main navbar -->
    <?php	include 'header.php';?>

    <!-- Page content -->
    <div class="page-content">

        <?php	include 'assets/includes/side_navbar.php';?>

        <div class="loading">
            <img src="assets/images/loading.gif" alt="">
        </div>


        <div class="content-wrapper">

            <!-- Page header -->
            <div class="page-header page-header-light">

    					<div class="breadcrumb-line breadcrumb-line-light header-elements-md-inline" style="background-color:#1f2022;color: white;">
    							<div class="d-flex">
    									<div class="breadcrumb">
    											<a href="planner_ongoing_dashboard.php" class="breadcrumb-item"><i class="icon-home2 mr-2"></i> Home</a>
    											<span class="breadcrumb-item active">Completed Plans</span>
    											<!-- <span style="position:absolute;right:0px;margin-left:13px;">Help<img style="width:17px;height:17px;" title="'+client+'" src="assets/images/informicon.svg"/></span> -->
    											<p class="help">HELP
    												<img style="width:15px;" title="Write to adminwmflow@wmglobal.com to get details added" src="assets/images/informicon.svg">
    											</span>
    									</div>


    									<a href="#" class="header-elements-toggle text-default d-md-none"><i class="icon-more"></i></a>
    							</div>
    					</div>
    				</div>

            <!-- Main content -->
            <!-- <div class="content-wrapper"> -->

            <!-- Page header -->
            <!-- <div class="page-header page-header-light">

            <div class="breadcrumb-line breadcrumb-line-light header-elements-md-inline">
            <div class="d-flex">
            <div class="breadcrumb">
            <a href="index-2.html" class="breadcrumb-item"><i class="icon-home2 mr-2"></i> Home</a>
            <span class="breadcrumb-item active">Dashboard</span>
        </div>

        <a href="#" class="header-elements-toggle text-default d-md-none"><i class="icon-more"></i></a>
    </div>
</div>
</div> -->
<!-- /page header -->


<!-- Content area -->
<div class="content" style="">

    <!-- Main charts -->
    <div class="row" style="height:100%">
        <div class="col-xl-12" style="height:100%">
            <div class="card" style="height:100%;background-color: #1f2022;">
                <div class="card" style="background-color: #1f2022;color: white;">
                    <div style="padding:12px;">
                        <!-- <span style="font-size:16px;color: #eade47;
                    font-weight: 600;float: right;
                    text-decoration: none;">More Filters </span> -->
                    <img class="btn3" style="width:20px;height:20px;cursor:pointer !important;float:right;"src="assets/images/filter-icon.svg">
                    <!-- <button onclick="location.href='planner_createnewplan.php';" class="createbtn">Create plan</button> -->
                    <!-- <button class="btn3">More filters+</button> -->
                </div>
                <div class="row displaytoptextboxes">
                    <div style="margin-top:6px;margin-right:14px;margin-left:12px;" class="col-sm-2">
                        <input type="text" style="padding:5px;" placeholder="search for Campaign ID" class="form-control Campaignidclass"/>
                    </div>
                    <div style="margin-top:6px;" class="col-sm-2">
                        <input class="form-control startdateclass"  placeholder="start date" type="date"/>
                    </div>
                    <div style="margin-top:6px;" class="col-sm-2">
                        <input class="form-control enddateclass"  placeholder="end date" type="date"/>
                    </div>
                    <div style="margin-top:6px;" class="col-sm-2">
                        <select data-placeholder="Client Name" class="form-control select clientclass" id="clientt" data-fouc>
                            <option value=""></option>
                        </select>
                    </div>
                    <div style="margin-top:6px;" class="col-sm-2">
                        <select data-placeholder="Brand Name" class="form-control select brandclass" id="brandd" data-fouc>
                            <option value=""></option>
                        </select>
                    </div>
                    <div style="margin-top:6px;" class="col-sm-1">
                        <button style="background-color:#f07144;border:none;color:#fff;border:none;" class="form-control gobtn">GO</button>
                    </div>
                </div>
                <!-- <div class="linesss">
                </div> -->
                <table class="table datatable-multi-sorting" style="color:white;margin-top:30px">

                    <thead>
                        <tr>
							<th>Sl.no</th>
                            <th>Campaign ID</th>
                            <th>Brand</th>
                            <th>Client</th>
                            <th>Planner Name</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Replan</th>
                            <th>Download</th>
                        </tr>
                    </thead>
                    <tbody class="displaytabledata">
                    </table>
                </div>


            </div>
            <!-- /traffic sources -->

        </div>
    </div>
    <!-- /main charts -->
</div>

</div>

<!-- /main content -->

</div>

<div id="replanmodall" class="modal fade" tabindex="-1">
    <div class="modal-dialog modal-sm">
        <div class="modal-content" style="margin-top: 255px;">

            <!-- Form -->
            <div class="modal-body">
                <div class="text-center mb-3">
                    <!-- <i class="icon-spinner11 icon-2x text-warning border-warning border-3 rounded-round p-3 mb-3 mt-1"></i>
                    <h5 class="mb-0">Password recovery</h5>
                    <span class="d-block text-muted">We'll send you instructions in email</span> -->
                    <button class="form-control buyingbasketbtn" style="background-color: #192124;color: white;" style="color:#fff">Replan from Buying Basket Upload </button>

                </div>

                <div class="form-group form-group-feedback form-group-feedback-right">
                    <button class="form-control acceleratorbtn"style="background-color: #192124;color: white;" style="color:#fff">Replan by Uploading Revised Accelerator Plan</button>
                </div>

                <!-- <button type="submit" class="btn bg-blue btn-block"><i class="icon-spinner11 mr-2"></i> Reset password</button> -->
            </div>
            <!-- /form -->

        </div>
    </div>
</div>
</body>

<div id="downloadicon" class="modal fade" tabindex="-1"  data-backdrop="static" data-keyboard="false">
    <div class="modal-dialog modal-lg">
        <div class="modal-content" style="margin-top: 255px;background-color: #131514;border: 1px solid #b54d27;">
            <div class="modal-header">
                <!-- <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> -->
                <button type="button" style="color: #bb512b" class="close closeModal closeClass" data-dismiss="modal">&times;</button>
            </div>
            <!-- Form -->
			<div class="modal-body" style="padding-top: 0px;">
				<div class="row" style="display:block">
					<div class="row row_header">
						<div class="col-md-6">
						<button type="button" class="selectAll">Select All</button>
						<!-- <button type="button" class="downloadAll">Download </button> -->
						</div>
						<div class="col-md-6"><p style="color:white;">Click here to download all the files &nbsp &nbsp
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

<!-- Mirrored from demo.interface.club/limitless/demo/bs4/Template/layout_1/LTR/default/full/ by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 12 Jun 2019 06:41:06 GMT -->
</html>
