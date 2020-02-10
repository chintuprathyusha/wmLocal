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
    <title>Wavemaker</title>
    <?php include 'assets/includes/common_css.php'; ?>
    <?php include 'assets/includes/common_scripts.php';?>
    <script src="assets/js/completedplansjs.js"></script>
    <link rel="stylesheet" href="assets/css/plannercompletedplans.css">
    <link rel="stylesheet" type="text/css" href="assets/js/daterangepicker/daterangepicker.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <!-- ========================= -->
    <script type="text/javascript" src="assets/js/daterangepicker/moment.min.js"></script>
    <script type="text/javascript" src="assets/js/daterangepicker/daterangepicker.min.js"></script>

    <!-- <script src="assets/js/user_dashboard.js"></script> -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Base64/1.0.2/base64.js"></script>
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

                <div class="breadcrumb-line breadcrumb-line-light header-elements-md-inline">
                    <div class="">
                        <div class="breadcrumb">
                            <a href="planner_ongoing_dashboard.php" class="breadcrumb-item"><i
                                    class="icon-home2 mr-2"></i> Home</a>
                            <span class="breadcrumb-item active">Completed Team Plans</span>
                            <!-- <span style="position:absolute;right:0px;margin-left:13px;">Help<img style="width:17px;height:17px;" title="'+client+'" src="assets/images/informicon.svg"/></span> -->
                            <p class="help">HELP
                                <img style="width:15px;" title="Write to adminwmflow@wmglobal.com to get details added"
                                    src="assets/images/informicon.svg">
                                </span>
                        </div>


                        <a href="#" class="header-elements-toggle text-default d-md-none"></a>
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
            <div class="content">
                <!-- Main charts -->
                <div class="row">
                    <div class="col-xl-12">
                        <div class="card">
                            <div class="filter">
                                <!-- <span style="font-size:16px;color: #eade47;
                    font-weight: 600;float: right;
                    text-decoration: none;">More Filters </span> -->
                                <!-- <img class="btn3" src="assets/images/filter-icon.svg"> -->
                                <!-- <button onclick="location.href='planner_createnewplan.php';" class="createbtn">Create plan</button> -->
                                <!-- <button class="btn3">More filters+</button> -->
                            </div>
                            <div class="card card1">

                                <div class="row ">
                                    <div class="col-sm-6 col-md-2 campid">
                                        <div class="s-e-campid">Campaign ID:
                                            <input type="text" onkeypress="return event.charCode >= 48 && event.charCode <= 57" placeholder="search for Campaign ID"
                                                class="form-control Campaignidclass" />
                                        </div>
                                    </div>
                                    <!-- <div class="col-sm-6 col-md-2 date">
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
                                    </div> -->
                                    <div class="col-sm-6 col-md-2 client">
                                        <div class="s-e-client">Client Name:
                                            <select data-placeholder="Client Name"
                                                class="form-control select clientclass" id="clientt" data-fouc>
                                                <option value="Select Client">--Select Client--</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-md-2 brand">
                                        <div class="s-e-brand">Brand Name:
                                            <select data-placeholder="Brand Name" class="form-control select brandclass"
                                                id="brandd" data-fouc>
                                                <option value="Select Brand">--Select Brand--</option>
                                            </select>
                                        </div>
                                    </div>


                                    <div class="col-sm-6 col-md-3 flt-r">
                                        <input type="text" id="dateFilter" class="flt-r" name="daterange"
                                            placeholder="Select Date Range" readonly />
                                        <span><i class="fa fa-calendar" style="font-size: 16px; color: black;margin-left: -24px"></i>
                                    </div>
                                    <div class="col-sm-12 col-md-1 go">
                                        <button class="form-control gobtn">GO</button>
                                    </div>
                                </div>
                                <!-- <div class="linesss">
                </div> -->
                                <table class="table datatable-multi-sorting">

                                    <thead>
                                        <tr>
                                            <th>S.No</th>
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
            <div class="modal-content mc">

                <!-- Form -->
                <div class="modal-body">
                    <div class="text-center mb-3">
                        <!-- <i class="icon-spinner11 icon-2x text-warning border-warning border-3 rounded-round p-3 mb-3 mt-1"></i>
                    <h5 class="mb-0">Password recovery</h5>
                    <span class="d-block text-muted">We'll send you instructions in email</span> -->
                        <button class="form-control buyingbasketbtn">Replan from Buying Basket Upload </button>

                    </div>

                    <div class="form-group form-group-feedback form-group-feedback-right">
                        <button class="form-control acceleratorbtn">Replan by Uploading Revised Accelerator
                            Plan</button>
                    </div>

                    <!-- <button type="submit" class="btn bg-blue btn-block"><i class="icon-spinner11 mr-2"></i> Reset password</button> -->
                </div>
                <!-- /form -->

            </div>
        </div>
    </div>
</body>

<div id="downloadicon" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <!-- <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> -->
                <button type="button" class="close closeModal closeClass" data-dismiss="modal">&times;</button>
            </div>
            <!-- Form -->
            <div class="modal-body">
                <div class="row row1">
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

<!-- Mirrored from demo.interface.club/limitless/demo/bs4/Template/layout_1/LTR/default/full/ by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 12 Jun 2019 06:41:06 GMT -->

</html>