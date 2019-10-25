$( document ).ready(function() {
    $('.loading').show();
    $('#upl-btn').prop('disabled', true);
    $('#upl-btn1').prop('disabled', true);
    $('#upl-btn__').prop('disabled', true);
    $('.budget_div_').hide();
    $('.cprp_div').hide();
    $('.spillover').hide();
    $('.budgetdivnew').hide();
    $('.texttodisplayspill').hide();
    $('.next_').prop('disabled', true);
    $(".budget_main").css("background-color", "#292828");
    $(".cprp_main").css("background-color", "#F07144");
    $('.radio_class').hide();
    $('.changediv').hide();
    debugger
    var planid = $.urlParam('planid');
    var userid = sessionStorage.getItem('userid');
    $('.spillovertexttodisplay').hide()
    $('.forfirstpathtext').hide()
    $('.forsecoundpathtext').hide()
    $('.channelbeing').hide();
    $('.acceleratorfiletext').hide();
    getData();
    var newcampaign_id;
    var buyingbasket_filename;
    var path_selection;
    var campaign_days;
    var acd_dispersion;
    var weightage;
    var spilloversheet_filename;
    var budgetallocation_filename;
    var PlanProcessed;
    var isFilePrepCompleted;
    var BudgetAllocationFilePath;
    var version = 1;
    var replan = false;
    var backclicked = "false";
    $.urlParam = function(name){
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results==null) {
            return null;
        }
        return decodeURI(results[1]) || 0;
    }
    var paramgoback = $.urlParam('goback');
    var parangonext = $.urlParam('gonext');
    var markascompleted;
    var channel_cprp;
    var channel_frequency;
    var acceleratedFilePath;
    var i;
    var campaignName;
    var acceleratedFilePathByRPA;
    $("#a").keyup(function(){
        var a = parseInt($('#a').val());
        var b = 100-a;
        var b = parseInt($('#b').val(b));
    })
    $("#a").mousewheel(function(){
        var a = parseInt($('#a').val());
        var b = 100-a;
        var b = parseInt($('#b').val(b));
    })
    $("#b").mousewheel(function(){
        var a = parseInt($('#b').val());
        var b = 100-a;
        var b = parseInt($('#a').val(b));
    })
    $("#b").keyup(function(){
        var a = parseInt($('#b').val());
        var b = 100-a;
        var b = parseInt($('#a').val(b));
    })
    var t = false
    $('.input').focus(function () {
        var $this = $(this)
        t = setInterval(
            function () {
                if (($this.val() < 0 || $this.val() > 100) && $this.val().length != 0) {
                    if ($this.val() < 0) {
                        $this.val(0)
                    }

                    if ($this.val() > 100) {
                        $this.val(100)
                    }
                }
            }, )
        })
        var t = false
        $('.campaign').focus(function () {
            var $this = $(this)
            t = setInterval(
                function () {
                    if (($this.val() < 0 || $this.val() > 100) && $this.val().length != 0) {
                        if ($this.val() < 0) {
                            $this.val(0)
                        }

                        if ($this.val() > 365) {
                            $this.val(365)
                        }
                    }
                }, )
            })
            function getData(){
                sendObj = {}
                sendObj.planid = planid;
                console.log(sendObj);
                var form = new FormData();
                form.append("file", JSON.stringify(sendObj));
                var settings11 = {
                    "async": true,
                    "crossDomain": true,
                    "url": aws_url+'buying_basket_freeze_1',
                    "method": "POST",
                    "processData": false,
                    "contentType": false,
                    "mimeType": "multipart/form-data",
                    "data": form
                };
                $.ajax(settings11).done(function (msg) {
                    //debugger
                    msg =JSON.parse(msg)
                    newcampaign_id=""
                    console.log(msg);
                    $('.loading').hide();
                    if (msg.data == "true") {
                        newcampaign_id = msg.CampaignId;
                        buyingbasket_filename = msg.BuyingBasketFilePath;
                        path_selection = msg.PathSelection;
                        campaign_days = msg.CampaignDuration;
                        acd_dispersion = msg.acd_dispersion;
                        weightage = msg.CPRPWeightage;
                        acceleratedFilePath = msg.AcceleratedFilePath;
                        spilloversheet_filename = msg.SpillOverSheetFilePath;
                        budgetallocation_filename = msg.BudgetAllocationFilePath;
                        markascompleted = msg.IsMarkAsComplete;
                        channel_cprp = msg.cprp_channel;
                        channel_frequency = msg.frequency_channel;
                        version = msg.Version;
                        campaignName = msg.CampaignName;
                        acceleratedFilePathByRPA = msg.AcceleratedFilePathByRPA;
                        PlanProcessed = msg.planProcessed;
                        isFilePrepCompleted = msg.isFilePrepCompleted;
                        newcampaign_id = msg.CampaignId;
                        campaignName = msg.CampaignName;
                        $(".camp_id_").html('<input class="form-control" placeholder="Campaign Name" type="text" value="'+campaignName+'" readonly style="background:#ccc";color:#000/>')
                        if (version > 1) {
                            replan = true;
                            $('.bb_files').show();
                            $('.bb_txt').show();
                            $('#upl-btn').show();
                        }
                        $('cprp_div').show();
                        if(path_selection == 1) {
                            $('.changediv').html('<h6 class="font-weight-semibold textforchange">Upload spillover sheet</h6>')
                            $('.spanClass').css('color', '#0de6f1');
                            $(".spanClass").css('font-weight', '700')
                            $(".spanClass").css('font-size', '22px')
                            $('.spanClass_').css('font-weight', '400')
                            $('.spanClass_').css('font-size', '14px')
                        }
                        else {
                            $('.spanClass_').css('color', '#0de6f1');
                            $(".spanClass_").css('font-weight', '700')
                            $(".spanClass_").css('font-size', '22px')
                            $('.spanClass').css('font-weight', '400')
                            $('.spanClass').css('font-size', '14px')
                            $('.changediv').html('<h6 class="font-weight-semibold textforchange">Upload Budget File</h6>')
                        }
                        if (PlanProcessed == 1) {
                            unfreezebuyinginfo();
                        }
                        else if (PlanProcessed == 2) {
                            $('.acceleratorfiletext').hide();
                            freezebuyinginfo();
                            $(".next_").prop('disabled', true);
                            $('.add_more').prop('disabled', true);
                            $('.submit_').prop('disabled', true);
                            $('.cprp_main').prop('disabled', true);
                            $('.budget_main').prop('disabled', true);
                            if (isFilePrepCompleted == "false") {
                                $('.spillover').hide();
                                $('.changediv').show();
                                $(".next_").prop('disabled', true);
                            }
                            else {
                                $('.channelbeing').hide();
                                if (path_selection == 1) {
                                    if (spilloversheet_filename == '' || spilloversheet_filename == null ) {
                                        $('.spillover').show();
                                        $('.budegtdivnew').hide();
                                        $('.changediv').hide();
                                        $('.channelbeing').hide();
                                    }
                                    else {
                                        $('.spillll').hide();
                                        $('.spillovertexttodisplay').show();
                                        $('.spillovertexttodisplay').append('<h5>Genre Level Budget Allocation Sheet is successfully uploaded</h5>')
                                        $(".next_").prop('disabled', true);
                                    }
                                }
                                else {
                                    if (budgetallocation_filename == '' || budgetallocation_filename == null) {
                                        $('.budgetdivnew').show();
                                        $('.spillover').hide();
                                        $('.changediv__').hide();
                                        $('.channelbeing').hide();
                                        $('.budget_text').hide();

                                    }
                                    else {
                                        $('.budget_text').show();
                                        $('.budget_files').hide();
                                        $('.budget_text').append('<h5>'+budgetallocation_filename+'</h5>')
                                        $(".next_").prop('disabled', true);
                                    }
                                }
                            }
                        }
                        else {
                            freezebuyinginfo();
                            if (path_selection == 1) {
                                if (acceleratedFilePathByRPA == null) {
                                    $(".next_").prop('disabled', true);
                                    $('.acceleratorfiletext').show();
                                    $('.acceleratorfiletext').append('<h5> Accelerator Output Sheet being created. Once complete you will receive it in your inbox. </h5>')
                                }
                                else {
                                    $(".next_").prop('disabled', false);
                                }
                                $('.channelbeing').hide();
                                $('.spillover').show();
                                $('.budgetdivnew').hide();
                                $('.changediv').show();
                                $('.ss_files').hide();
                                $('.submit_btn1').hide();
                                $('.spillovertexttodisplay').show();
                                $('.spillll').hide();
                                $('.spillovertexttodisplay').append('<h5>Genre Level Budget Allocation Sheet is successfully uploaded</h5>')
                            }
                        }
                    }
                    if (replan == false){
                        if (msg.message == "fail") {
                            $.alert({
                                title: 'Error',
                                content: 'Oops ! something went wrong',
                                animation: 'scale',
                                closeAnimation: 'scale',
                                opacity: 0.5,
                                buttons: {
                                    okay: {
                                        text: 'Okay',
                                        btnClass: 'btn-primary',
                                        action: function(){
                                            window.location.href="error.php"
                                        }
                                    }
                                }
                            });
                            $('.buying_basket').hide();
                            $('.backclass').hide();
                            $('.next_').hide();
                        }
                        else {
                            console.log(msg.BuyingBasketFilePath);
                            if (msg.BuyingBasketFilePath=='' || msg.BuyingBasketFilePath== null) {
                                $('.bb_files').show();
                                $('.bb_txt').show();
                                $('#upl-btn').show();
                                // $('.next_').prop('disabled', true)
                                $('.cprp_div').hide();
                                $('.radio_class').hide();
                            }
                            else {
                                $('.bb_files').hide();
                                $('#upl-btn').hide();
                                $('.texttodisplay').show()
                                $('.texttodisplay').html('<h5>Buying Basket file is succesfully uploaded</h5>')
                                $('.radio_class').show();
                                // $('.next_').prop('disabled', false)
                            }
                        }
                    }

                })
            }

            function freezebuyinginfo() {
                debugger
                if (isFilePrepCompleted == "false") {
                    $('.channelbeing').show();
                    if (path_selection == 2) {
                        $('.forfirstpathtext').hide();
                        $('.forsecoundpathtext').show();
                    }
                    else {
                        $('.forsecoundpathtext').hide();
                        $('.forfirstpathtext').show();
                    }
                }
                else {
                    if (path_selection == 2) {
                        $('.forfirstpathtext').hide();
                        $('.forsecoundpathtext').hide();
                        $('.spillover').hide();
                        if (budgetallocation_filename == '' || budgetallocation_filename == null) {
                            $('.budgetdivnew').show();
                            $('.spillover').hide();
                            $('.changediv__').hide();
                            $('.channelbeing').hide();

                            $('.budget_text').hide();
                            $('.budget_files').show();
                            $(".next_").prop('disabled', true);
                        }
                        else {
                            $('.budgetdivnew').show();
                            $('.budget_files').hide();
                            $('.budget_text').show();
                            $('.budget__').hide();
                            $('.submit_btn2').hide();
                            $('.budget_text').append('<h5 class="texttodisplayspill" style="color:#000">Channel Level Budget Allocation Sheet is successfully uploaded</h5>')
                            $(".next_").removeAttr('disabled');
                        }
                    }
                    else {
                        $('.budget_files').hide();
                        $('.spillover').show();
                    }
                }
                $('.radio_class').show()
                $('.cprp_div').show()
                $(".camp_id_").html('<label>Campaign Name</label><input class="form-control" placeholder="Campaign Name" type="text" value="'+campaignName+'" readonly style="background:black;color:#fff;"/>')
                if (buyingbasket_filename=='' || buyingbasket_filename== "NULL") {
                    $('.bb_files').show();
                    $('.bb_txt').show();
                    $('#upl-btn').show();
                }
                else {
                    $('.bb_files').hide();
                    $('#upl-btn').hide();
                    $('.texttodisplay').show()
                    $('.texttodisplay').html('<h5 style="color:#000">Buying Basket file is succesfully uploaded</h5>')
                }
                if(path_selection==2){
                    debugger
                    $('.add_more_new').prop('disabled', true);
                    $('.submit_new').prop('disabled', true);
                    $(".cprp_main").prop("disabled", true);
                    $(".cprp_main").css("background-color", "#292828");
                    $(".budget_main").css("background-color", "#F07144");
                    // $(".forsecoundpathtext").show()
                    $('.radio_class').show();
                    $('.cprp_div').hide();
                    $('.budget_div_').show()
                    $(".cprp_main").prop("checked", false);
                    $(".budget_main").prop("checked", true);
                    $('input[type="number"]').prop('readonly', true);
                    $('input[type="text"]').prop('readonly', true);
                    $('input[type="number"]').css('background', '#292828');
                    $('input[type="text"]').css('background', '#292828');
                    $('.campaign_days_new').val(campaign_days);
                    console.log(acd_dispersion);
                    acd_data = []
                    acd_value = []
                    $.each(acd_dispersion, function( key, value ) {
                        $.each(value, function( keyy, valuee ) {

                            acd_data.push(keyy)
                            acd_value.push(valuee)

                        })
                    })
                    $('.name_Class_new').val(acd_data.join(","))
                    $('.path_Class_new').val(acd_value.join(","))
                }
                else if(path_selection == 1){
                    $(".cprp_main").prop("checked", true);
                    $(".budget_main").prop("checked", false);
                    $(".budget_main").prop("disabled", true);
                    $(".cprp_main").css("background-color", "#F07144");
                    $(".budget_main").css("background-color", "#292828");
                    $('.campaign_days').val(campaign_days);
                    $('.cprp_channel_val').val(channel_cprp);
                    $('.frequency_channel').val(channel_frequency);
                    $('input[type="number"]').prop('readonly', true);
                    $('input[type="text"]').prop('readonly', true);
                    $('input[type="number"]').css('background', '#292828e8');
                    $('input[type="number"]').css('color', '#fff');
                    $('input[type="text"]').css('background', '#292828e8');
                    $('input[type="text"]').css('color', '#fff');
                    for(key in weightage){
                        $(".cprp_val").val(key);
                        $(".reach_val").val(weightage[key])
                    }
                    acd_data = []
                    acd_value = []
                    $.each(acd_dispersion, function( key, value ) {
                        $.each(value, function( keyy, valuee ) {

                            acd_data.push(keyy)
                            acd_value.push(valuee)

                        })
                    })
                    $('.name_Class').val(acd_data.join(","))
                    $('.path_Class').val(acd_value.join(","))
                }
                else {
                    $(".cprp_main").prop("checked", true);
                    $(".budget_main").prop("checked", false);
                }
                $('.add_more').prop('disabled', true);
                $('.submit_').prop('disabled', true);

                $.each(weightage ,function(key,value){
                    $('.cprp_val').val(key)
                    $('.reach_val').val(weightage[key])
                })
            }
            function unfreezebuyinginfo() {
                debugger
                $('.radio_class').show()
                $('.cprp_div').show()
                $(".camp_id_").html('<input class="form-control" placeholder="Campaign Name" type="text" value="'+campaignName+'" readonly style="background:#ccc;color:#000"/>')
                $('.texttodisplayspill').hide();

                if (buyingbasket_filename=='' || buyingbasket_filename== "NULL" || replan == true) {

                  $('.radio_class').hide();
                  $('.cprp_div').hide();
                  $('.budget_div_').hide();
                    $('.bb_files').show();
                    $('.bb_txt').show();
                    $('#upl-btn').show();
                }
                else {
                    if (replan==false) {
                        $('.bb_files').hide();
                        $('#upl-btn').hide();
                        $('.texttodisplay').show()
                        $('.texttodisplay').html('<h5 style="color:#000">Buying Basket file is succesfully uploaded</h5>')

                    }
                }


                if(path_selection==2){
                    $(".cprp_main").css("background-color", "#292828");
                    $(".budget_main").css("background-color", "#F07144");
                    $('.radio_class').show();
                    $('.cprp_div').hide();
                    $('.budget_div_').show()
                    $(".budget_main").prop("checked", true);
                    console.log(campaign_days);
                    $('.campaign_days_new').val(campaign_days);
                    obj_keyss = acd_dispersion;
                    $(".main_new .sub_div_new").remove()
                    $.each(obj_keyss, function( i, val ) {
                        $.each(val, function( ii, vall ) {
                            budget_allowcation = '<div class="sub_div_new" style="width:100%">'
                            budget_allowcation += '<div class="row keyword_new">'
                            budget_allowcation += '<div class="col-md-6">'
                            budget_allowcation += '<input type="number" class="form-control colorchange mods_inputs name_Class_new ' + i + '" value="'+ii+'" placeholder="Enter keyword">'
                            budget_allowcation += '</div>'
                            budget_allowcation += '<div class="col-lg-6">'
                            budget_allowcation += '<input type="number" class="form-control colorchange mods_inputs path_Class path_Class_new ' + i + '" value="'+vall+'" placeholder="Enter negative keyword">'
                            budget_allowcation += '<span>'
                            budget_allowcation += '<img src="assets/images/delete.svg" style="width:20px;" class="remove_new">'
                            budget_allowcation += '</span>'
                            budget_allowcation += '</div>'
                            budget_allowcation += '</div>'
                            budget_allowcation += '</div>'
                            $(".main_new").append(budget_allowcation)
                        })
                    })
                    $('.submit_new').prop('disabled', false);
                    $('.add_more_new').prop('disabled', false);
                }
                else if(path_selection == 1){
                    $(".budget_main").css("background-color", "#292828");
                    $(".cprp_main").css("background-color", "#F07144");
                    $(".cprp_main").prop("checked", true);
                    $('.budget_div_').hide()
                    $('.campaign_days').val(campaign_days);
                    $('.cprp_channel_val').val(channel_cprp);
                    $('.frequency_channel').val(channel_frequency);
                    for(key in weightage){
                        $(".cprp_val").val(key);
                        $(".reach_val").val(weightage[key])
                    }
                    obj_keys__ = {};
                    obj_keys = acd_dispersion;
                    $(".main .sub_div").remove()
                    for (var i = 0; i < obj_keys.length; i++) {
                        var key=Object.keys(obj_keys[i]).pop()
                        var val=Object.values(obj_keys[i]).pop()
                        ok = '<div class="sub_div" style="width:100%">'
                        ok += '<div class="row keyword">'
                        ok += '<div class="col-md-6">'
                        ok += '<input type="number" class="form-control colorchange mods_inputs name_Class ' + i + '" value="'+key+'" placeholder="Enter keyword">'
                        ok += '</div>'
                        ok += '<div class="col-lg-6">'
                        ok += '<input type="number"  style="" class="form-control colorchange mods_inputs path_Class path_Class ' + i + '" value="'+val+'" placeholder="Enter negative keyword">'
                        ok += '<span>'
                        ok += '<img src="assets/images/delete.svg" style="width:20px;" class="remove">'
                        ok += '</span>'
                        ok += '</div>'
                        ok += '</div>'
                        ok += '</div>'
                        $(".main").append(ok)
                    }
                    $('.submit_').prop('disabled', false);
                    $('.add_more').prop('disabled', false);
                }
                else {
                    $(".cprp_main").prop("checked", true);
                    $(".budget_main").prop("checked", false);
                }

                $.each(weightage ,function(key,value){
                    $('.cprp_val').val(key)
                    $('.reach_val').val(weightage[key])
                })
            }
            $('body').on('click', '.cprp_main', function(){
                $(".spanClass").css('color', 'rgb(13, 230, 241)')
                $(".spanClass").css('font-weight', '700')
                $(".spanClass").css('font-size', '22px')
                $(".cprp_main").css('background-color', '#f07144')
                $(".budget_main").css('background-color', '#211d1dbf')
                $(".budget_main").css('color', '#ccc6c6')
                $('.cprp_div').show(100);
                $('.budget_div_').hide(100);
                $(".spanClass_").css('color', 'rgb(165, 162, 162)');
                $(".spanClass_").css('font-weight', '400')
                $(".spanClass_").css('font-size', '14px')
            })
            $('body').on('click', '.budget_main', function(){
                $(".cprp_main").css('background-color', '#211d1dbf')
                $(".cprp_main").css('color', '#ccc6c6')
                $(".budget_main").css('background-color', '#f07144')
                $(".spanClass").css('color', 'rgb(165, 162, 162)')
                $(".spanClass").css('font-weight', '700')
                $(".spanClass").css('font-size', '22px')
                $("spanClass_").css('font-weight', '400')
                $(".spanClass").css('font-size', '14px')
                $('.cprp_div').hide(100);
                $('.budget_div_').show(100);
                $(".spanClass_").css('color', 'rgb(13, 230, 241)')
                $(".spanClass_").css('font-weight', '700')
                $(".spanClass_").css('font-size', '22px')
            })
            $('.budget_div').hide();
            var msg;
            $('input[type=number]').bind("mousewheel", function() {
                return false;
            });

            function nullCheck(value) {
                if (value != "" && value != null && value != undefined) {
                    return true;
                }
                else {
                    return false;
                }
            }
            var i; var c; var p; var s;
            $("body").on("click", ".add_more", function(){

                //debugger
                var x=0;

                thiss = $(this)
                val = $(this).html();
                children = $(".sub_div").children();

                var name_cls = $(children[0]).find(".name_Class").val()

                for (var i = 0; i < children.length; i++) {
                    var path_cls =  $(children[0]).find('.path_Class').val();
                    x = 0+parseInt(path_cls);
                }
                if (x>100) {
                    alert("error")
                }
                if (name_cls=="" && /^[a-zA-Z-, ]*$/.test(name_cls)) {

                    swal("Acd and Dispersion should not be empty");
                }
                else {
                    console.log(i);
                    $(".main").append('<div class="sub_div" style="width:100%"><div class="row keyword"><div class="col-md-6"><input type="number" class="inputboxstyle form-control mods_inputs name_Class ' + i + '" placeholder="Enter keyword"></div><div class="col-lg-6"><input type="number" class="inputboxstyle form-control mods_inputs path_Class path_Class ' + i + '" placeholder="Enter negative keyword"><span><img src="assets/images/delete.svg" style="width:20px;" class="remove"></span></div></div></div>')
                    $(".hide_").show();

                }
            })

            $("body").on("click", ".add_more_new", function(){
                var x=0;
                thiss = $(this)
                val = $(this).html();
                children = $(".sub_div_new").children();

                var name_cls = $(children[0]).find(".name_Class_new").val()
                for (var i = 0; i < children.length; i++) {
                    var path_cls =  $(children[0]).find('.path_Class_new').val();
                    x = 0+parseInt(path_cls);
                }
                if (x>100) {
                    alert("error")
                }
                if (name_cls=="" && /^[a-zA-Z-, ]*$/.test(name_cls)) {

                    swal("Acd and Dispersion should not be empty");
                }
                else {
                    console.log(i);
                    $(".main_new").append('<div class="sub_div_new" style="width:100%"><div class="row keyword_new"><div class="col-md-6"><input type="number" class="form-control mods_inputs name_Class_new ' + i + '" placeholder="Enter keyword" style="background-color:#303134;border:none;color:#fff;"></div><div class="col-lg-6"><input type="number" class="form-control mods_inputs path_Class_new path_Class_new ' + i + '" placeholder="Enter negative keyword" style="background-color:#303134;border:none;color:#fff;"><span><img src="assets/images/delete.svg" style="width:20px;" class="remove_new"></span></div></div></div>')
                    $(".hide_").show();
                }
            })

            $("body").on("click", ".remove_new", function(){
                $(this).closest('.sub_div_new').remove();
                $('.hide_').hide();
            })

            $("body").on("click", ".remove", function(){
                $(this).closest('.sub_div').remove();
                $('.hide_').hide();
            })
            var arr = [];
            var optn;
            var existing_keys ;
            var path_selection ='';
            var budget_text;
            var div_weitage;
            $("body").on("click", ".submit_new", function(){
                path_selection_ = $(this).closest('.common_class').find('.budget_main').attr('key');
                var campaign_days = $('.campaign_days_new').val();
                var userid = sessionStorage.getItem('userid');
                var plan_id = planid;
                var err=0;
                var arr_check = [];
                children = $(".sub_div_new").children();
                console.log(children);
                obj = {}
                sendObj = {}
                sendObj2 = {}
                sendObj2.path_selection = path_selection_;
                sendObj2.user_id = userid;
                sendObj2.plan_id = plan_id;
                sendObj2.campaign_days = campaign_days;
                var val_check =0 ;
                var unique_name_val;
                var oldArray;
                var val;
                val_check_this = 0;
                val_check_this_ = 0;
                empty = 0 ;
                subDivs = $(".sub_div_new");
                debugger
                obj_subdivs = []
                sum = 0;
                for (var sd = 0; sd < subDivs.length; sd++) {
                    kw = subDivs[sd].children[0].children[0].children[0].value
                    vl = subDivs[sd].children[0].children[1].children[0].value
                    sum += parseFloat(vl) || 0;
                    obj = {}
                    obj[kw] = vl;
                    obj_subdivs.push(obj)

                }
                console.log(obj_subdivs);
                if (campaign_days == '') {
                    $.alert({
                        title: 'Filed should not be empty',
                        content: 'Oops ! something went wrong',
                        animation: 'scale',
                        closeAnimation: 'scale',
                        className: "alert-class",
                        opacity: 0.5,
                        buttons: {
                            okay: {
                                text: 'Okay',
                                btnClass: 'btn-primary'
                            }
                        }
                    });
                }
                else if (sum!==100 || sum>100) {

                    $.alert({
                        title: 'Dispersion should be 100',
                        animation: 'scale',
                        closeAnimation: 'scale',
                        opacity: 0.5,
                        buttons: {
                            okay: {
                                text: 'Okay',
                                btnClass: 'btn-primary'
                            }
                        }
                    });
                }
                else {
                    $('.loading').show();
                    sendObj2.acd_dispersion = obj_subdivs;
                    console.log(sendObj2);
                    console.log(JSON.stringify(sendObj2));
                    var form = new FormData();
                    form.append("file", JSON.stringify(sendObj2));
                    var settings11 = {
                        "async": true,
                        "crossDomain": true,
                        "url": aws_url+'plan_selection_button',
                        "method": "POST",
                        "processData": false,
                        "contentType": false,
                        "mimeType": "multipart/form-data",
                        "data": form
                    };
                    $.ajax(settings11).done(function (msg) {
                        msg = JSON.parse(msg);
                        console.log(msg);
                        $('.loading').hide();

                        if (msg.message == "fail") {
                            $.alert({
                                title: 'Error',
                                content: 'Oops ! something went wrong, try again',
                                animation: 'scale',
                                closeAnimation: 'scale',
                                opacity: 0.5,
                                buttons: {
                                    okay: {
                                        text: 'Okay',
                                        btnClass: 'btn-primary'
                                    }
                                }
                            });
                        }
                        else {
                            $('.add_more_new').prop('disabled', true);
                            $('.submit_new').prop('disabled', true);
                            $(this).prop('disabled', true);
                            $('.remove_new').hide();
                            $('.spillover').hide();
                            $('.channelbeing').show();
                            $('.forsecoundpathtext').show();
                            $('#upl-btn1').hide();
                            $('.mods_inputs').css("background", "rgba(41, 40, 40, 0.91)");
                            $('.mods_inputs').css("color", "#fff");
                            $('input[type=text]').prop('readonly', true);
                            $('input[type=number]').prop('readonly', true);
                            $.alert({
                                title: 'Success',
                                content: 'Data submitted succesfully',
                                animation: 'scale',
                                closeAnimation: 'scale',
                                opacity: 0.5,
                                buttons: {
                                    okay: {
                                        text: 'Okay',
                                        btnClass: 'btn-primary'
                                    }
                                }
                            });
                            $('.add_more').prop('disbale', true);
                            $('.submit_').prop('disbale', true);
                            $('.loading').hide();
                            $('.cprp_main').prop('disabled', true);
                            sessionStorage.getItem('create_plan_id', 0);
                        }
                    })
                }

            })

            $("body").on("click", ".submit_", function(){
                path_selection = $(this).closest('.common_class').find('.cprp_main').attr('key');
                div_weitage = $(this).closest('.common_class').find('.cprp_div');
                var cprp_weitage = div_weitage.find('.cprp_val').val();
                var reach_weitage = div_weitage.find('.reach_val').val();
                var cprp_channel_val = div_weitage.find('.cprp_channel_val').val();
                var frequency_channel = div_weitage.find('.frequency_channel').val();
                var campaign_days = div_weitage.find('.campaign_days').val();
                var userid = sessionStorage.getItem('userid');
                var plan_id = planid;
                var err=0;
                var arr_check = [];
                children = $(".sub_div").children();
                console.log(children);
                obj = {}
                sendObj = {}
                sendObj2 = {}
                sendObj[cprp_weitage] = reach_weitage;
                sendObj2.path_selection = path_selection;
                sendObj2.user_id = userid;
                sendObj2.plan_id = plan_id;
                sendObj2.campaign_days = campaign_days;
                sendObj2.cprp_channel = cprp_channel_val;
                sendObj2.frequency_channel = frequency_channel;
                var val_check =0 ;
                var unique_name_val;
                var oldArray;
                var val;
                val_check_this = 0;
                val_check_this_ = 0;
                empty = 0 ;
                subDivs = $(".sub_div");
                obj_subdivs = []
                sum = 0;
                for (var sd = 0; sd < subDivs.length; sd++) {
                    kw = subDivs[sd].children[0].children[0].children[0].value
                    vl = subDivs[sd].children[0].children[1].children[0].value
                    sum += parseFloat(vl) || 0;
                    acdobj = {}
                    acdobj[kw] = vl;
                    obj_subdivs.push(acdobj)

                }
                console.log(obj_subdivs);
                if (campaign_days == '' || cprp_weitage == '' || reach_weitage == '') {

                    $.alert({
                        title: 'Alert',
                        content: 'Fields should not be empty'
                    });

                }
                else if (sum < 100 || sum>100) {
                    $.alert({
                        title: 'Alert',
                        content: 'Dispersion should be 100'
                    });
                }
                else {
                    $('.loading').show();
                    $('.add_more').prop('disabled', true);
                    $(this).prop('disabled', true);
                    $('.remove').hide();
                    $('.spillover').hide();
                    $('.channelbeing').show();
                    $('#upl-btn1').hide();
                    sendObj2.acd_dispersion = obj_subdivs;
                    sendObj2.weightage = sendObj;
                    console.log(sendObj2);
                    console.log(JSON.stringify(sendObj2));
                    var form = new FormData();
                    form.append("file", JSON.stringify(sendObj2));
                    var settings11 = {
                        "async": true,
                        "crossDomain": true,
                        "url": aws_url+'plan_selection_button',
                        "method": "POST",
                        "processData": false,
                        "contentType": false,
                        "mimeType": "multipart/form-data",
                        "data": form
                    };
                    $.ajax(settings11).done(function (msg) {
                        msg = JSON.parse(msg);
                        console.log(msg);
                        $('.loading').hide();
                        if(msg.message == "fail"){
                            $.alert({
                                title: 'Error',
                                content: 'Oops ! something went wrong, try again',
                                animation: 'scale',
                                closeAnimation: 'scale',
                                opacity: 0.5,
                                buttons: {
                                    okay: {
                                        text: 'Okay',
                                        btnClass: 'btn-primary',
                                        action: function(){
                                            window.location.href="error.php"
                                        }
                                    }
                                }
                            });
                        }
                        else {
                            $('.mods_inputs').css("color", "#fff");
                            $('.mods_inputs').css("background", "rgba(41, 40, 40, 0.91)");
                            $('input[type=text]').css("color", "#fff");
                            $('input[type=number]').css("background", "rgba(41, 40, 40, 0.91)");
                            $('input[type=text]').prop('readonly', true);
                            $('input[type=number]').prop('readonly', true);
                            $('.add_more').prop('disbale', true);
                            $('.submit_').prop('disbale', true);
                            sessionStorage.getItem('create_plan_id', 0);
                            $('.channelbeing').show();
                            $('.forfirstpathtext').show();
                            $('.budget_main').prop('disabled', true);
                            $.alert({
                                title: 'Success',
                                content: 'Data submitted succesfully'
                            });
                        }

                    })
                }

            })

            $("body").on("click", ".cprp_r", function(){
                $(".cprp").show();
                $(".budget").hide();
            })
            $("#cprp_upload").hide();
            $(".complete_cprp").hide();
            $(".complete_budget").hide();
            $("#budget_upload").hide();
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

            $("body").on("click", ".backclass", function(){
                window.location.href = 'planner_createnewplan.php?planid='+planid
            })


            $("body").on("click", ".next_", function(){
                window.location.href = "barc.php?planid="+planid
            })

            var plan_id = planid;
            var user_id = sessionStorage.getItem('userid');
            $('.camp_id').append('<input class="form-control" value="'+plan_id+'" type="text"/ readonly>')
            $('.radio_class').hide();
            var file_name_new;
            var main_output_new;
            fileobj_new = {};
            (function ($) {
                $('#load-file').on('change', function () {
                    //debugger
                    main_output = ''
                    var file = $('#load-file')[0].files[0];
                    file_name_new = file.name;
                    file_name_new = "Buying Basket.xlsx"

                    var fileReader = new FileReader();
                    fileReader.onloadend = function (e) {
                        blob___ = e.target.result;

                        fileobj_new.filename = file_name_new;

                        fileobj_new.blob = blob___;
                        fileobj_new.plan_id = plan_id;
                        fileobj_new.user_id = user_id;
                        console.log(fileobj_new);
                        $('#upl-btn').prop('disabled', false);
                    };

                    fileReader.readAsDataURL(file);
                });
            })(jQuery);


            var counting = 0;
            function exceltoblob(file) {
                pagesArr = [];
                window.PDFJS = window.pdfjsLib;
                PDFJS.disableWorker = true;
                PDFJS.getDocument(file).then(function getPdfHelloWorld(pdf) {
                    const go = async function(){
                        let h = 0;
                        for(var pageN = 1; pageN <= pdf.numPages; pageN++){
                            const page = await pdf.getPage(pageN);
                            var scale = 2;
                            var viewport = page.getViewport(scale);
                            //
                            // Prepare canvas using PDF page dimensions
                            //
                            var canvas = document.createElement('canvas');
                            //document.body.appendChild(canvas);
                            var context = canvas.getContext('2d');
                            canvas.height += viewport.height;
                            canvas.width = viewport.width;
                            //
                            // Render PDF page into canvas context
                            //
                            var task = page.render({ canvasContext: context, viewport: viewport })
                            await task.promise;
                            pages = canvas.toDataURL('image/jpeg');
                            pagesArr.push(pages)
                            if (pageN == pdf.numPages) {
                                displayImagesMain(pagesArr)
                            }
                        }
                    };
                    go();
                }, function(error){
                    //console.log(error);
                });
            }



            $("body").on("click", "#upl-btn", function(){
                //debugger
                $(".loading").show();
                fileobj_new.category = "buyingbasket";
                console.log(file_name_new);
                var form = new FormData();
                form.append("file", JSON.stringify(fileobj_new));
                var settings11 = {
                    "async": true,
                    "crossDomain": true,
                    "url":aws_url+'Buying_basket',
                    "method": "POST",
                    "processData": false,
                    "contentType": false,
                    "mimeType": "multipart/form-data",
                    "data": form
                };
                $.ajax(settings11).done(function (msg) {
                  // msg = JSON.parse(msg)
                    console.log(msg);
                      $('.loading').hide();
                    if(msg == "Path inserted Succesfully"){
                      $('.radio_class').show();
                        $('.texttodisplay').show();
                        $('.file-input').hide();
                        $('.red_color').hide();
                        $('#upl-btn').hide();
                        // alert(file_name_new)
                        // alert("kkk")
                        $('.texttodisplay').append('<h5 style="color:#000">Buying Basket file successfully uploaded</h5>')

                        $.alert({
                            title: 'Success',
                            content: 'File succesfully uploaded'
                        });

                    }
                    else{
                      $('.radio_class').hide();
                        $('#upl-btn').show();
                        $('.texttodisplay').hide();
                        $('.file-input').show();
                        $('.red_color').show();
                        $.alert({
                            title: 'Oops ! Seems you are uploading an incorrect file',
                            animation: 'scale',
                            closeAnimation: 'scale',
                            opacity: 0.5,
                            buttons: {
                                okay: {
                                    text: 'Okay',
                                    btnClass: 'btn-primary'
                                }
                            }
                        });

                    }


                });
            })


            //budget upload file path B//

            var file_name_;
            var main_output;
            fileobj = {};
            (function ($) {
                $('#load-file1').on('change', function () {
                    //debugger
                    main_output = ''
                    var file = $('#load-file1')[0].files[0];
                    filename = file.name;
                    filename ="ChannelLevelBudgetAllocation"+newcampaign_id+"_"+version+".xlsx"
                    var fileReader = new FileReader();
                    fileReader.onloadend = function (e) {
                        blob___ = e.target.result;

                        fileobj.filename = filename;
                        fileobj.blob = blob___;
                        fileobj.plan_id = planid;
                        fileobj.user_id = userid;
                        fileobj.category = "budgetallocation";
                        console.log(fileobj);
                        $('#upl-btn1').prop('disabled', false);
                        file_name_ = filename;
                    };

                    fileReader.readAsDataURL(file);
                });
            })(jQuery);


            //Path A//



            var file_name_2;
            var main_output2;
            fileobj2 = {};
            (function ($) {
                $('#load-file__').on('change', function () {
                    //debugger
                    main_output = ''
                    var file = $('#load-file__')[0].files[0];
                    filename = file.name;
                    filename ="GenreLevelBudgetAllocation_"+newcampaign_id+"_"+version+".xlsx"
                    var fileReader = new FileReader();
                    fileReader.onloadend = function (e) {
                        blob___ = e.target.result;

                        fileobj2.filename = filename;
                        fileobj2.blob = blob___;
                        fileobj2.plan_id = planid;
                        fileobj2.user_id = userid;
                        fileobj2.category = "spilloversheet";
                        console.log(fileobj2);
                        $('#upl-btn__').prop('disabled', false);
                        file_name_2 = filename;
                    };

                    fileReader.readAsDataURL(file);
                });
            })(jQuery);


            var counting = 0;
            function exceltoblob(file) {
                pagesArr = [];
                window.PDFJS = window.pdfjsLib;
                PDFJS.disableWorker = true;
                PDFJS.getDocument(file).then(function getPdfHelloWorld(pdf) {
                    const go = async function(){
                        let h = 0;
                        for(var pageN = 1; pageN <= pdf.numPages; pageN++){
                            const page = await pdf.getPage(pageN);
                            var scale = 2;
                            var viewport = page.getViewport(scale);
                            //
                            // Prepare canvas using PDF page dimensions
                            //
                            var canvas = document.createElement('canvas');
                            //document.body.appendChild(canvas);
                            var context = canvas.getContext('2d');
                            canvas.height += viewport.height;
                            canvas.width = viewport.width;
                            //
                            // Render PDF page into canvas context
                            //
                            var task = page.render({ canvasContext: context, viewport: viewport })
                            await task.promise;
                            pages = canvas.toDataURL('image/jpeg');
                            pagesArr.push(pages)
                            if (pageN == pdf.numPages) {
                                displayImagesMain(pagesArr)
                            }
                        }
                    };
                    go();
                }, function(error){
                    //console.log(error);
                });
            }

            //remove btn click

                $("body").on("click", ".fileinput-remove-button", function(){

                  $('#upl-btn').prop('disabled', 'disabled')


                })

            $("body").on("click", "#upl-btn1", function(){
                //debugger
                $(".loading").show();
                console.log(file_name_);
                var form = new FormData();
                form.append("file", JSON.stringify(fileobj));
                var settings11 = {
                    "async": true,
                    "crossDomain": true,
                    "url":aws_url+'Buying_basket',
                    "method": "POST",
                    "processData": false,
                    "contentType": false,
                    "mimeType": "multipart/form-data",
                    "data": form
                };
                $.ajax(settings11).done(function (msg) {
                    console.log(msg);
                    $(".loading").hide();
                    $('.acceleratorfiletext').hide();
                    if(msg == "Path inserted Succesfully"){
                        $('.texttodisplay').show();
                        $('.texttodisplayspill').show();
                        $('#upl-btn1').hide();
                        $('.bb_txt').hide();
                        $('.file-input').hide();
                        $('.red_color').hide();
                        $('.texttodisplayspill').append('<h5 style="color:#000">Genre Level Budget Allocation Sheet is successfully uploaded</h5>')
                        $('.next_').prop('disabled', false)
                        $.alert({
                            title: 'File succesfully uploaded',
                            animation: 'scale',
                            closeAnimation: 'scale',
                            opacity: 0.5,
                            buttons: {
                                okay: {
                                    text: 'Okay',
                                    btnClass: 'btn-primary'
                                }
                            }
                        });
                    }
                    else{
                        $('.texttodisplay').hide();
                        $('.texttodisplayspill').hide();
                        $('#upl-btn1').show();
                        $('.file-input').show();
                        $('.red_color').show();
                        $('.next_').prop('disabled', true)
                        $.alert({
                            title: 'Oops ! Seems you are uploading an incorrect file',
                            // content: 'Oops ! something went wrong',
                            animation: 'scale',
                            closeAnimation: 'scale',
                            opacity: 0.5,
                            buttons: {
                                okay: {
                                    text: 'Okay',
                                    btnClass: 'btn-primary'
                                }
                            }
                        });

                    }
                    version = 0;
                });
            })

            $("body").on("click", "#upl-btn__", function(){
                //debugger
                $(".loading").show();
                console.log(file_name_2);
                var form = new FormData();
                form.append("file", JSON.stringify(fileobj2));
                var settings11 = {
                    "async": true,
                    "crossDomain": true,
                    "url":aws_url+'Buying_basket',
                    "method": "POST",
                    "processData": false,
                    "contentType": false,
                    "mimeType": "multipart/form-data",
                    "data": form
                };
                $.ajax(settings11).done(function (msg) {
                    console.log(msg);
                    $(".loading").hide();
                    if(msg == "Path inserted Succesfully"){
                        if (path_selection == 1) {
                            $('.acceleratorfiletext').show();
                            $('.acceleratorfiletext').html('<h5>Accelerator Output Sheet being created. Once complete youwill receive it in your inbox. </h5>')
                        }
                        else {
                            $('.acceleratorfiletext').hide();
                            $('.next_').prop('disabled', false)
                        }
                        $('.texttodisplay').show();
                        $('.texttodisplayspill').show();
                        $('#upl-btn__').hide();

                        $('.bb_txt').hide();
                        $('.file-input').hide();
                        $('.red_color').hide();
                        // $('.texttodisplayspill').append('<h5 style="color:#000">'+file_name_2+' is successfully uploaded</h5>')
                        $('.texttodisplayspill').append('<h5 style="color:#000">Genre Level Budget Allocation Sheet  successfully uploaded</h5>')


                        $.alert({
                            title: 'File succesfully uploaded',
                            // content: 'Oops ! something went wrong',
                            animation: 'scale',
                            closeAnimation: 'scale',
                            opacity: 0.5,
                            buttons: {
                                okay: {
                                    text: 'Okay',
                                    btnClass: 'btn-primary'
                                }
                            }
                        });
                    }
                    else{
                        $('.texttodisplay').hide();
                        $('.texttodisplayspill').hide();
                        $('#upl-btn__').show();
                        $('.file-input').show();
                        $('.red_color').show();
                        $.alert({
                            title: 'Oops ! Seems you are uploading an incorrect file',
                            // content: 'Oops ! something went wrong',
                            animation: 'scale',
                            closeAnimation: 'scale',
                            opacity: 0.5,
                            buttons: {
                                okay: {
                                    text: 'Okay',
                                    btnClass: 'btn-primary'
                                }
                            }
                        });
                    }
                    version = 0;
                });
            })

            $("body").on("change", ".name_Class", function () {
                tlt = 0
                if ($(this).hasClass('0')) {
                    tlt = 100;
                }
                else {
                    vll = $(".path_Class");
                    x = 0;
                    for (var pc = 0; pc < vll.length; pc++) {
                        x += Number(vll[pc].value);
                    }
                    y = 100-x;
                    if (y < 0) {
                        tlt = 0;
                    }
                    else {
                        tlt = y
                    }
                }
                $(this).closest('.keyword').find('.path_Class').val(tlt);
            })

            $("body").on("change", ".name_Class_new", function () {
                tlt = 0
                if ($(this).hasClass('0')) {
                    tlt = 100;
                }
                else {
                    vll = $(".path_Class_new");
                    x = 0;
                    for (var pc = 0; pc < vll.length; pc++) {
                        x += Number(vll[pc].value);
                    }
                    y = 100-x;
                    if (y < 0) {
                        tlt = 0;
                    }
                    else {
                        tlt = y
                    }
                }
                $(this).closest('.keyword_new').find('.path_Class_new').val(tlt);
            })
            $('body').on('click', '.backclass', function(){
                sessionStorage.setItem('backclicked', true);
            })


        })
