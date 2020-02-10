<?php
session_start();
if ($_SESSION['usernamee'] == '') {
	 header("location:index.php");
}
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Wavemaker</title>
        <?php include 'assets/includes/common_css.php'; ?>
        <?php include 'assets/includes/common_scripts.php';?>
    </head>
<style>
.icon-paragraph-justify3:before {
    content: "\eec1";
    color: white;
    float: right;
}

</style>
    <body>
        <?php	include 'header.php';?>
        <div class="page-content">

            <?php	include 'assets/includes/side_navbar.php';?>
            <div class="content-wrapper">

                <!-- Page header -->
                <div class="page-header page-header-light">

                    <div class="breadcrumb-line breadcrumb-line-light header-elements-md-inline"
                        style="background-color:#1f2022;color: white;">
                        <div class="d-flex">
                            <div class="breadcrumb">
                                <a href="planner_ongoing_dashboard.php" class="breadcrumb-item"><i
                                        class="icon-home2 mr-2"></i> Home</a>
                                </span>
                            </div>


                            <a href="#" class="header-elements-toggle text-default d-md-none"><i
                                    class=""></i></a>
                        </div>
                    </div>
                </div>


                <div class="content" style="">

                    <!-- Main charts -->
                    <div class="row" style="height:100%">
                        <div class="col-xl-12" style="height:100%">
                            <div class="card" style="height:100%;background-color: #1f2022;">
                                <div class="card" style="background-color: #1f2022;color: white;">
                                    <div style="padding:12px;">
                                        <!-- <p style="font-size:20px;">Update Files to Help Document</p> -->
                                        Search:
                                        <input id="searchHelp"
                                            style="color:white;background-color: #1f2022;border-color: #f07144;border-top: none;border-left: none;border-right: none;width: 201px;"
                                            type="text" />
                                    </div>
                                    <table id="searchTable" class="table datatable-multi-sorting"
                                        style="color:white;margin-top:30px">

                                        <thead>
                                            <tr>
                                                <th style="width:130px;">Sl.no</th>
                                                <th>Help Document</th>
                                                <th>Download</th>
                                            </tr>
                                        </thead>
                                        <tbody style="color:white" class="table appendhere">
                                    </table>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <script src="assets/js/FileSaver.js"></script>
        <script src="assets/js/help.js"></script>
    </body>

</html>