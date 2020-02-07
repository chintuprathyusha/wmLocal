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
        <title>Wavemaker - WM FLOW</title>
        <?php include 'assets/includes/common_css.php';?>
        <link rel="stylesheet" href="assets/css/adminindex.css">
    </head>

    <body>
        <?php include 'header.php';?>
        <div class="page-content">
            <?php include 'assets/includes/side_navbar.php';?>
            <div class="content-wrapper">
                <div class="content">
                    <div class="card mr-b-0">
                        <div class="card-body pd-b-0">
                            <ul class="nav nav-tabs nav-justified alpha-grey mb-0">
                                <li class="nav-item">
                                    <a href="#login-tab1" class="nav-link border-y-0 border-left-0 active"
                                        data-toggle="tab">
                                        <h5 class="my-1">Master Data Settings</h5>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#login-tab2" class="nav-link border-y-0 border-right-0" data-toggle="tab">
                                        <h5 class="my-1">User Role Privileges</h5>
                                    </a>
                                </li>
                            </ul>

                            <div class="tab-content modal-body pd-b-0">
                                <div class="tab-pane fade show active" id="login-tab1">
                                    <div class="cprp card mr-b-0">
                                        <div class="mb-4">
                                            <h6 class="font-weight-semibold displayInlineBlock mr-r-15">Master Data </h6>
                                            <input type="file" class="file-input-ajax displayNone" id="masterFile">
                                            <button type="submit" class="btn btn-primary" id="masterUploadBtn">Upload <i class="icon-upload ml-2"></i></button>
                                            <p class="masterFileName file_nameView"></p>
                                        </div>
                                        <div class="mb-4">
                                            <h6 class="font-weight-semibold displayInlineBlock mr-r-15">Accelerator Master and Instructions File</h6>
                                            <input type="file" class="file-input displayNone" id="acceleratorFile">
                                            <button type="submit" class="btn btn-primary" id="acceleratorBtn">Upload <i class="icon-upload ml-2"></i></button>
                                            <p class="acceleratorFileName file_nameView"></p>
                                        </div>
                                    </div>
                                    <div class="row timestampfiles">
                                        <h4 class="h4">Recent uploaded files </h4>
                                        <div class="col-lg-6 col-md-6 col-sm-6">
                                            <h2>Master </h2>
                                            <div class="masterdatastamp">
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6">
                                            <div class="channelstamp">
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" class="btn btn-primary downloadall" name="button">Download all
                                        admin files</button>
                                </div>

                                <div class="tab-pane fade" id="login-tab2">
                                    <div class="cprp card mr-b-0">
                                        <div class="mb-4">
                                            <h6 class="font-weight-semibold">User Groups</h6>
                                            <!-- <p class="mb-2">Select2 supports ability to add choices automatically as the user is typing into the search field. Try typing in the search field below and entering a space or a comma.</p> -->
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <select id="usergrp" class="form-control select"
                                                        data-placeholder="Select a State...">
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12 mr-b-0">
                                            <!-- <button class="form-control editclass" style="width: 100px;background-color: #b75b26;color:white;float:right">Download all latest files</button> -->
                                        </div>

                                        <div class="mb-4">
                                            <div class="table-wrapper-scroll-y my-custom-scrollbar">

                                                <table class="table table-bordered table-striped mb-0">
                                                    <thead>
                                                        <tr>
                                                            <!-- <th scope="col">#</th> -->
                                                            <th scope="col" class="scope">User role previlages </th>
                                                            <th scope="col" class="scope">Status</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody class="displayhere">
                                                </table>
                                            </div>
                                        </div>
                                        <div class="mr-b-0">
                                            <button type="submit" class="btn btn-primary submitbtn">Submit <i
                                                    class="icon-paperplane ml-2"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>






                        </div>
                    </div>
                </div>
                <!-- </form> -->
                <!-- /form -->

            </div>

            <div class="loading">
                <img src="assets/images/loading.gif" alt="">
            </div>

            <div class="null">

            </div>
            <div class="loading">
                <img src="assets/images/loading.gif" alt="">
            </div>
        </div>
        <!-- /page content -->
        <?php include 'assets/includes/common_scripts.php';?>

        <!-- Theme JS files -->
        <script src="assets/js/adminmasterdatajs.js"></script>
        <script src="assets/js/adminuserprevilagesjs.js"></script>
        <script src="assets/js/exportExcel.js" charset="utf-8"></script>
        <script src="assets/js/FileSaver.min.js" charset="utf-8"></script>
        <script src="assets/js/xlsx.full.min.js" charset="utf-8"></script>


    </body>

</html>