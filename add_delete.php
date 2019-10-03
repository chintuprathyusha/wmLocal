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
    <title>Wavemaker</title>

    <?php include 'assets/includes/common_css.php';?>

    <?php include 'assets/includes/common_scripts.php';?>

    <script src="assets/js/add_delete.js"></script>
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
.hidden{
    display: none;
}
#logoutbtnid{
    background-color: #ffffff2e !important;
    border: none;
    border-radius: 5px;
    padding: 2px 15px;
    color: white;
}
.content {
    /* background-color: red /* background-image: url(../images/wmflow.png) no-repeat; */
    /* background-image: url('asserts/images/wmflow.png') */
    /* background-image: url("assets/images/wmflow.png");
    background-repeat: no-repeat, repeat; */
    background-color: #1f2022;
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


    var alltooltips =  JSON.parse(localStorage.getItem("tool_tips"))
    var addemail=alltooltips.AddPlanner_UserEmails
    var addckientname = alltooltips.AddPlanner_Client;
    var deletclient = alltooltips.DeletePlanner_Client;
    var deletemail = alltooltips.DeletePlanner_Useremails;

    $('.appendaddemail').append('<img style="width:17px;height:17px;margin-left:10px;" title="'+addemail+'" src="assets/images/informicon.svg"/>')
    $('.appendaddckientname').append('<img style="width:17px;height:17px;margin-left:10px;" title="'+addckientname+'" src="assets/images/informicon.svg"/>')
    $('.appenddeletclient').append('<img style="width:17px;height:17px;margin-left:10px;" title="'+deletclient+'" src="assets/images/informicon.svg"/>')
    $('.appenddeletemail').append('<img style="width:17px;height:17px;margin-left:10px;" title="'+deletemail+'" src="assets/images/informicon.svg"/>')
    // $('.appendprimarytg').append('<img style="width:17px;height:17px;margin-left:10px;" title="'+ClientLeadEmailId+'" src="assets/images/informicon.svg"/>')
    // $('.appendbasetg').append('<img style="width:17px;height:17px;margin-left:10px;" title="'+ClientLeadEmailId+'" src="assets/images/informicon.svg"/>')
    // $('.appendendweek').append('<img style="width:17px;height:17px;margin-left:10px;" title="'+ClientLeadEmailId+'" src="assets/images/informicon.svg"/>')
    // $('.appendcampaignmarket').append('<img style="width:17px;height:17px;margin-left:10px;" title="'+ClientLeadEmailId+'" src="assets/images/informicon.svg"/>')

    // <img style="width:17px;height:17px;margin-left:10px;" src="assets/images/informicon.svg"/>


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
            <div class="page-header page-header-light">

                <div class="breadcrumb-line breadcrumb-line-light header-elements-md-inline" style="background-color: #1f2022;color: white;">
                    <div class="d-flex">
                        <div class="breadcrumb">
                            <a href="planner_ongoing_dashboard.php" class="breadcrumb-item"><i class="icon-home2 mr-2"></i> Home</a>
                            <span class="breadcrumb-item active">Assign Planner</span>
                            <!-- <span style="position:absolute;right:0px;margin-left:13px;">Help<img style="width:17px;height:17px;" title="'+client+'" src="assets/images/informicon.svg"/></span> -->
                            <span style="position:absolute;right:0px; font-size: 14px;font-weight: 500;float: left;margin-right: 30px;margin-top: 8px;color:red;text-decoration: underline;">Help
                                <img style="width:17px;" title="Write to adminwmflow@wmglobal.com to get details added" src="assets/images/informicon.svg">
                            </span>
                        </div>


                        <a href="#" class="header-elements-toggle text-default d-md-none"><i class="icon-more"></i></a>
                    </div>
                </div>
            </div>



            <!-- Content area -->
            <div class="content">

                <!-- Bootstrap file input -->
                <div class="card">
                    <div class="card-body">
                        <!-- Form -->

                        <ul class="nav nav-tabs nav-justified alpha-grey mb-0">
                            <li class="nav-item"><a href="#login-tab1" class="nav-link border-y-0 border-left-0 active" data-toggle="tab"><h5 class="my-1">Add planner</h5></a></li>
                            <li class="nav-item"><a href="#login-tab2" class="nav-link border-y-0 border-right-0 deleteheaderbtn" data-toggle="tab"><h5 class="my-1">Delete planner</h5></a></li>
                        </ul>

                        <div class="tab-content modal-body">
                            <div class="tab-pane fade show active" id="login-tab1">
                                <div class="cprp card">
                                    <div class="mb-4">
                                        <h6  title="<?php echo $_SESSION['tool_tips']['AddPlanner_UserEmails'];?>"  class="font-weight-semibold">UserEmail </h6>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <div class="mb-4">
                                                        <select data-placeholder="search for email id" class="form-control select-minimum emailvalue" data-fouc>
                                                            <option></option>
                                                            <optgroup class="allemailsvalues">
                                                                <option disabled value="select UserEmail">--select Email--</option>

                                                            </optgroup>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div class="mb-4">
                                        <h6  title="<?php echo $_SESSION['tool_tips']['AddPlanner_Client'];?>"  class="font-weight-semibold">ClientName</h6>
                                        <!-- <p class="mb-2">Select2 supports ability to add choices automatically as the user is typing into the search field. Try typing in the search field below and entering a space or a comma.</p> -->
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <select class="form-control select allclientnames" data-fouc>
                                                        <option value="">--select ClientName--</option>

                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-4">

                                        <!-- <p class="mb-2">Select2 supports ability to add choices automatically as the user is typing into the search field. Try typing in the search field below and entering a space or a comma.</p> -->
                                        <div class="row">
                                            <div class="col-md-2">
                                                <button style="background-color:#f07144;color:white;border: none;border-radius: 3px;" class="form-control addsavebtn">Add Planner</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div class="tab-pane fade" id="login-tab2">
                                <div class="cprp card">
                                    <div class="mb-4">
                                        <h6  title="<?php echo $_SESSION['tool_tips']['DeletePlanner_Client'];?>"  class="font-weight-semibold">ClientName</h6>
                                        <!-- <p class="mb-2">Select2 supports ability to add choices automatically as the user is typing into the search field. Try typing in the search field below and entering a space or a comma.</p> -->
                                        <div class="row">
                                            <div class="col-md-6">
                                                <select class="form-control select  clientdelete" id="select"  data-fouc >
                                                    <option disabled>--select ClientName--</option>

                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-4">
                                        <h6  title="<?php echo $_SESSION['tool_tips']['DeletePlanner_Useremails'];?>"  class="font-weight-semibold" >UserEmail</h6>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <select class="form-control select  deletemails" id="select0"  data-fouc >
                                                    <option disabled>--select UserEmail--</option>

                                                </select>
                                                <!-- <input type="text"  placeholder="User Email"  class="form-control"> -->
                                                <!-- <span class="form-text text-muted">Automatically convert a file input to a bootstrap file input widget by setting its class as <code>file-input</code>.</span> -->
                                            </div>
                                        </div>
                                    </div>

                                    <div class="mb-4">

                                        <!-- <p class="mb-2">Select2 supports ability to add choices automatically as the user is typing into the search field. Try typing in the search field below and entering a space or a comma.</p> -->
                                        <div class="row">
                                            <div class="col-md-2">
                                                <button style="background-color:#f07144;color:white;border: none;border-radius: 3px;" class="form-control deletesavebtn">Delete Planner</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>



                    <div class="" style="height:30px;">

                    </div>
                </div>
                <!-- /page content -->

            </body>


            <!-- Mirrored from demo.interface.club/limitless/demo/bs4/Template/layout_1/LTR/default/full/uploader_bootstrap.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 12 Jun 2019 06:48:45 GMT -->
            </html>
