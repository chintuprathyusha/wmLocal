<?php
session_start();
if ($_SESSION['usernamee'] == '') {
	 header("location:index.php");
}
?>
<!DOCTYPE html>
<html lang="en">

<!-- Mirrored from demo.interface.club/limitless/demo/bs4/Template/layout_1/LTR/default/full/uploader_bootstrap.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 12 Jun 2019 06:48:40 GMT -->
<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added by HTTrack -->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Wavemaker - WM FLOW</title>

    <!-- Global stylesheets -->
    <!-- <link href="https://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700,900" rel="stylesheet" type="text/css"> -->
	<?php include 'assets/includes/common_css.php';?>

    <?php include 'assets/includes/common_scripts.php';?>

    <!-- Theme JS files -->
    <script src="global_assets/js/plugins/uploaders/fileinput/plugins/purify.min.js"></script>
    <script src="global_assets/js/plugins/uploaders/fileinput/plugins/sortable.min.js"></script>
    <script src="global_assets/js/plugins/uploaders/fileinput/fileinput.min.js"></script>

    <script src="global_assets/js/demo_pages/uploader_bootstrap.js"></script>
    <script src="assets/js/adminmasterdatajs.js"></script>
    <script src="assets/js/adminuserprevilagesjs.js"></script>
    <script src="assets/js/exportExcel.js" charset="utf-8"></script>
    <script src="assets/js/FileSaver.min.js" charset="utf-8"></script>
    <script src="assets/js/xlsx.full.min.js" charset="utf-8"></script>
    <!-- /theme JS files -->

</head>
<style>
.content{
    /* background-image: url('./assets/images/wmflow.png'); */
    	background-size: cover;
}
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
.my-custom-scrollbar {
    position: relative;
    height: 200px;
    overflow: auto;
}
.table-wrapper-scroll-y {
    display: block;
}
.fileinput-upload{
    display: none;
}
.editdropdown{
    display: none;
}
.beforeedit{
    display: block;
}
.btn_style{
}
.masterdata_new{
    display: none;
}
.table-bordered{
    color: #fff !important;
}
.nav-tabs .nav-link.active {
    background-color: #f07144;
}
/* responsive */

@media screen and (min-width: 570px) and (max-width: 1024px) {
    .font-weight-semibold {
        width: 123px;
        margin-left: -39px;
        font-size: 13.5px!important;

    }
    .masterdatastamp li {
        font-size: 12px;

    }

}
@media screen and (max-width: 768px) and (min-width: 560px) {
    .page-content {
        width: 950px;
    }
    .masterdatastamp li {
        font-size: 12px;
        width: 289px;
    }
}
@media screen and (max-width: 570px) and (min-width: 300px) {
    /* .tab-content modal-body{
        width: 328px;
        margin-left: -79px;

     }  */
     .content {
        width: 365px;
        margin-left: -26px;

     }
    .cprp.card{

        width: 331px;
        margin-left: -47px;

    }
    .font-weight-semibold {
        font-size: 13px;
    }
    .row.timestampfiles {
        width: 372px;
        margin-left: -55px;
    }
    .masterdatastamp li {
        font-size: 12px;
    }
    .icon-paragraph-justify3:before {
        content: "\eec1";
        color: white;
    }
}

/* responsive */
</style>

<script>
$( document ).ready(function() {
    $(".budget").hide();
    $("body").on("click", ".cprp_r", function(){
        $(".cprp").show();
        $(".budget").hide();
    })
    $("body").on("click", ".budget_r", function(){
        //debugger
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

    $(function() {
        $(".materialS").select2({
            placeholder: 'Material types'
        });
    });
    $('#locationuploadbtn').submit(function (e) {

        // Prevent form submission which refreshes page
        e.preventDefault();

        // Serialize data
        var formData = $(this).serialize();

        // Make AJAX request
        $.post("process.php", formData).complete(function() {
            console.log("Success");
        });
    });


});
</script>
<body>

    <!-- Main navbar -->

    <!-- /main navbar -->

    <?php	include 'header.php';?>
    <!-- Page content -->
    <div class="page-content">

        <?php include 'assets/includes/side_navbar.php';?>


        <!-- Main content -->
        <div class="content-wrapper">




            <!-- Content area -->
            <div class="content">

                <!-- Bootstrap file input -->
                <div class="card">
                    <div class="card-body">
                        <!-- Form -->
                        <!-- <form> -->
                        <ul class="nav nav-tabs nav-justified alpha-grey mb-0">
                            <li class="nav-item"><a href="#login-tab1" class="nav-link border-y-0 border-left-0 active" data-toggle="tab"><h5 class="my-1">Master Data Settings</h5></a></li>
                            <li class="nav-item"><a href="#login-tab2" class="nav-link border-y-0 border-right-0" data-toggle="tab"><h5 class="my-1">User Privileges</h5></a></li>
                        </ul>

                        <div class="tab-content modal-body">
                            <div class="tab-pane fade show active" id="login-tab1">
                                <div class="cprp card">
                                    <div class="row mb-4">
                                        <div class="col-md-2">
                                            <h6 class="font-weight-semibold">Master Data </h6></div>
                                            <div class="col-md-8 masterdata_">
                                                <!-- <input type="file" class="file-input" multiple="multiple" data-fouc> -->
                                                <!-- <div class="col-md-4"> -->
                                                <input type="file" class="file-input-ajax" id="locationclass" data-fouc>

                                                <!-- <span><button id="locationuploadbtn">Upload</button></span> -->

                                                <!-- </div> -->
                                                <!-- <span class="form-text text-muted">Automatically convert a file input to a bootstrap file input widget by setting its class as <code>file-input</code>.</span> -->
                                            </div>
                                            <div class="col-md-8 masterdata_new">
                                            </div>
                                            <div class="col-md-2">
                                                <span class="btn_style">  <button type="submit" class="btn btn-primary" style="background: #4caf50;" id="locationuploadbtn">Upload <i class="icon-upload ml-2"></i></button></span>
                                            </div>
                                        </div>
                                        <div class="row mb-4">
                                            <div class="col-md-2">
                                                <h6 class="font-weight-semibold">Accelerator Master and Instructions File</h6>
                                            </div>
                                            <div class="col-md-8 channel_">
                                                <input type="file" class="file-input"  id="channelgenre"  data-fouc>
                                                <!-- <span><button id="clientuploadbtn">Upload</button></span> -->

                                            </div>
                                            <div class="col-md-2">
                                                <span class="btn_style">  <button type="submit" class="btn btn-primary" style="background: #4caf50;"  id="channelgenrebtn">Upload <i class="icon-upload ml-2"></i></button></span>
                                            </div>
                                        </div>
                                        <!-- <div class="mb-4">
                                        <h6 class="font-weight-semibold">Brand</h6>
                                        <div class="col-md-8">
                                        <input type="file" class="file-input" id="brandclass"  data-fouc>

                                        <span>  <button type="submit" class="btn btn-primary" style="background: #4caf50;"  id="branduploadbtn">Upload <i class="icon-upload ml-2"></i></button></span>

                                    </div>
                                </div>



                                <div class="mb-4">
                                <h6 class="font-weight-semibold">TG</h6>
                                <div class="col-md-8">
                                <input type="file" class="file-input"  id="tgclass" data-fouc>

                                <span>  <button type="submit" class="btn btn-primary" style="background: #4caf50;"  id="tguploadbtn">Upload <i class="icon-upload ml-2"></i></button></span>

                            </div>
                        </div>


                        <div class="mb-4">
                        <h6 class="font-weight-semibold">Campaign Markets</h6>
                        <div class="col-md-8">
                        <input type="file" class="file-input" id="Campaignclass"   data-fouc>

                        <span>  <button type="submit" class="btn btn-primary" style="background: #4caf50;"  id="Campaignuploadbtn">Upload <i class="icon-upload ml-2"></i></button></span>

                    </div>
                </div>
                <div class="mb-4">
                <h6 class="font-weight-semibold">Accelerator Master and Instructions File</h6>
                <div class="col-md-8">
                <input type="file" id="channeluploadbtn" class="file-input" id="channelclass"  data-fouc>

                <span>  <button type="submit" class="btn btn-primary" style="background: #4caf50;"  id="Campaignuploadbtn">Upload <i class="icon-upload ml-2"></i></button></span>

            </div>
        </div> -->



    </div>
    <div class="row timestampfiles">
        <h4 style="width:100%; text-align:center">Recent uploaded files </h4>
        <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="masterdatastamp">
                <h5>Master Data:</h5>
            </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="channelstamp">
                <h5>Accelerator Master and Instructions File:</h5>
            </div>
        </div>
    </div>
    <button type="button" class="btn btn-primary downloadall" name="button" style="float:right">Download all admin files here</button>
</div>

<div class="tab-pane fade" id="login-tab2">
    <div class="cprp card">
        <div class="mb-4">
            <h6 class="font-weight-semibold">User Groups</h6>
            <!-- <p class="mb-2">Select2 supports ability to add choices automatically as the user is typing into the search field. Try typing in the search field below and entering a space or a comma.</p> -->
            <div class="row">
                <div class="col-md-6">
                    <!-- <select id="usergrp" class="form-control select-multiple-tokenization" data-placeholder="Select Usergroup"  data-fouc> -->
                    <select id="usergrp" class="form-control select" data-placeholder="Select a State...">
                        <!-- <option disabled>choose anyone</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option> -->
                    </select>
                    <!-- <option value="AZ">Arizona</option>
                    <option value="CO">Colorado</option>
                    <option value="ID">Idaho</option>
                    <option value="WY">Wyoming</option>
                    <option value="AL">Alabama</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option> -->
                    <!-- </select> -->
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <!-- <button class="form-control editclass" style="width: 100px;background-color: #b75b26;color:white;float:right">Download all latest files</button> -->
        </div>

        <div class="mb-4">
            <div class="table-wrapper-scroll-y my-custom-scrollbar">

                <table class="table table-bordered table-striped mb-0">
                    <thead>
                        <tr>
                            <!-- <th scope="col">#</th> -->
                            <th scope="col" style="width: 443px;font-weight: 600;font-size: 15px;">User role previlages </th>
                            <th scope="col" style="width: 443px;font-weight: 600;font-size: 15px;">Status</th>

                        </tr>
                    </thead>
                    <tbody class="displayhere">
                        <!-- <tr>
                        <th scope="row">1</th>
                        <td>View User Role </td>
                        <td>
                        <select class="form-control select" data-placeholder="Select a State...">
                        <option disabled>choose anyone</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </td>
            </tr> -->
        </table>

    </div>
</div>


<div class="mb-4">
    <button type="submit" class="btn btn-primary submitbtn" style="background: #4caf50;float:right">Submit <i class="icon-paperplane ml-2"></i></button>
</div>


</div>
</div>
</div>






</div>
</div>
</div>
<!-- </form> -->
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

<div class="loading">
  <img src="assets/images/loading.gif" alt="">
</div>



<div class="" style="height:30px;">

</div>
<div class="loading">
	<img src="assets/images/loading.gif" alt="">
</div>
</div>
<!-- /page content -->

</body>
