$(document).ready(function () {
    var urlType = getUrlParameter('type');
    $(".loading").show();
    $('.file_download').hide();
    $('#select2').val([]);
    $('#select2').val();
    $('#select2').select2('destroy').val('').select2();
    var plan_id = '';
    var userid='';
    var isnewuser = ''
    var global_object;
    var ischannelselectioncompleted;
    var markascompleted;
    var create_plan_id='';
    var filenames;
    var paths;
    var backclicked = "false";
    
    var paramgoback = $.urlParam('goback');

    $(".texttodisplay").hide();
    js_yyyy_mm_dd_hh_mm_ss();
    var camp_id_;
    var base_tg_;
    var brandId_;
    var createplanid;

    var campaignId_;
    var campaignMarketId_;
    var campaignName_;
    var clientId_;
    var endWeekId_;
    var primaryTGTd_;
    var userId_;
    var client_name;
    $(".next_btn").hide();
    $(".client_freezeclass").hide()
    $('.primary_freeze').hide();
    $('.base_freeze').hide();
    $('.endfreeze').hide();
    $(".select_markets").hide();
    if (urlType != 'new') {
        plan_id = $.urlParam('planid');
    }


    function js_yyyy_mm_dd_hh_mm_ss () {
        now = new Date();
        year = "" + now.getFullYear().toString().substr(2,2);
        month = "" + (now.getMonth() + 1);
        if (month.length == 1) {
            month = "0" + month;
        }
        day = "" + now.getDate();
        if (day.length == 1) {
            day = "0" + day;
        }
        hour = "" + now.getHours();
        if (hour.length == 1) {
            hour = "0" + hour;
        }
        minute = "" + now.getMinutes(); if (minute.length == 1) { minute = "0" + minute; }
        second = "" + now.getSeconds(); if (second.length == 1) { second = "0" + second; }
        camp_id_ =  day + "" + month + "" + year +"" + hour + "" + minute + "" + second;
        $(".camp_id").append('<input class="form-control campign_id" type="text" value="'+camp_id_+'" readonly>');
    }

    isnewuser = sessionStorage.getItem('isnewuser');

    console.log(isnewuser)
    console.log(plan_id);
    if (plan_id != "0") {
        get_freezeDetails();
    }
    else if(plan_id == null || plan_id == "" || plan_id == "0"){
        createPlan();
    }
    var count = 0;
    var base_tg,
    client,
    brand,
    campign_name,
    campign_id,
    primary_tg,
    campign_markets

    function createPlan() {
        sendObj = {};
        sendObj.user_id = sessionStorage.getItem('userid');
        console.log(sendObj);
        var form = new FormData();
        form.append("file", JSON.stringify(sendObj));
        var settings11 = {
            "async": true,
            "crossDomain": true,
            "url": aws_url+'Create_plan',
            "method": "POST",
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
            "data": form
        };
        $.ajax(settings11).done(function (msg) {
            console.log(msg);
            msg = JSON.parse(msg);
            console.log(msg);
            $(".loading").hide();
            if(msg.message == "fail"){
                $.confirm({
                    title: 'Alert',
                    content: 'Oops ! something went wrong',
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
            base_tg = msg.Base_Tg;
            console.log(base_tg);
            primary_tg = msg.Primary_Tg;
            campign_markets = msg.Campaign_Market;
            console.log(Object.values(campign_markets));
            campign_markets = Object.values(campign_markets);
            // campign_markets = Object.Values(msg.Campaign_Market);
            campign_markets = campign_markets.sort();
            end_week = msg.End_Week;
            data = msg.Client;
            // console.log(data);

            $.each(data ,function(key,i){
                $('#select').append('<option value='+key+'>'+key+'</option>')
            })

            var $dropdown = $('#select');
            console.log($dropdown);
            $dropdown.on('change', function() {
                console.log($dropdown);
                $('#select0').empty();
                // var a=data[$dropdown.val()];
                var a=data[$.trim($dropdown[0].selectedOptions[0].text)];
                $.each(a,function(j){
                    console.log(a[j]);
                    $('#select0').append('<option value='+a[j]+'>'+a[j]+'</option>')
                })
            });

            $dropdown.trigger('change');

            for(key in base_tg){
                console.log();
                $(".base_tg").append('<option value='+base_tg[key]+' class="get_base_tg-'+count+'" key='+key+'>'+base_tg[key]+'</option>');
                count++
            }


            for(key in campign_markets){
                $(".campign_markets").append('<option value='+campign_markets[key]+' class="get_campign_markets-'+count+'" key='+key+'>'+campign_markets[key]+'</option>');
                count++
            }

            for(key in primary_tg){
                $(".primary_tg").append('<option value='+primary_tg[key]+' class="get_primary_tg-'+count+'" key='+key+'>'+primary_tg[key]+'</option>');
                count++
            }

            for(key in end_week){
                $(".end_week").append('<option value='+end_week[key]+' class="get_end_week-'+count+'" key='+key+'>'+end_week[key]+'</option>');
                count++
            }
        }
        })
    }
    $("body").on("click", ".create_plan", function(){
        $('.loading').show();
        userid = sessionStorage.getItem('userid');

        camp_markets = []
        selectedValues = $(".campign_markets").select2('data');

        for (var i = 0; i < selectedValues.length; i++) {
            camp_markets.push(selectedValues[i].text);
        }


        cclinet = []
        clientselectedValues = $(".client").select2('data');
        for (var i = 0; i < clientselectedValues.length; i++) {
            cclinet.push(clientselectedValues[i].text);
        }

        brand__ = []
        brandselectedValues = $("#select0").select2('data');
        for (var i = 0; i < brandselectedValues.length; i++) {
            brand__.push(brandselectedValues[i].text);
        }


        var campign_id = $(".campign_id").val();
        var primary_tg = $(".primay_tg").val();
        var key_primary_tg = $(".primary_tg").find("option:selected").attr('key');
        var base_tg = $(".base_tg").val();
        var key_base_tg = $(".base_tg").find("option:selected").attr('key');

        var campign_name = $(".campign_name").val();
        var brand =$.unique(brand__);

        var client = $.unique(cclinet);
        var end_week = $(".end_week").val();
        var key_end_week = $(".end_week").find("option:selected").attr('key');
        console.log(camp_markets, campign_id, primary_tg, base_tg,campign_name,brand,client, end_week);
        if (client == '' || campign_name  == '' || primary_tg == 'undefined' || base_tg == '' || end_week == '' || selectedValues == '') {
            $.confirm({
                title: 'Alert',
                content: 'All fields are required',
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
            $('.loading').hide();
        }else{
            obj = {};
            obj.ClientId = client;
            obj.CampaignMarketId = $.unique(camp_markets);
            obj.BrandId = brand;
            obj.CampaignName = campign_name;
            obj.CampaignId = campign_id;
            obj.PrimaryTGTd = parseInt(key_primary_tg);
            obj.BaseTGId = parseInt(key_base_tg);
            obj.EndWeekId = parseInt(key_end_week);
            obj.user_id = userid;
            console.log(obj);
            var form = new FormData();
            form.append("file", JSON.stringify(obj));
            var settings11 = {
                "async": true,
                "crossDomain": true,
                "url": aws_url+'Create_plan_button',
                "method": "POST",
                "processData": false,
                "contentType": false,
                "mimeType": "multipart/form-data",
                "data": form
            };
            $.ajax(settings11).done(function (msg) {
                msg = JSON.parse(msg);
                $('.loading').hide();

                console.log(msg);
                if(msg.message == "fail"){
                    $.confirm({
                        title: 'Plan has been not created, try again',
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
                else {
                    $.confirm({
                        title: 'Alert',
                        content: 'Plan created succesfully',
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
                    createplanid = parseInt(msg.createplanid);
                    $('.campign_name').prop('disabled', true);
                    $('.campign_id').prop('disabled', true);
                    $(".select2-hidden-accessible").prop('disabled', true);
                    $(".texttodisplay").show();
                    $(".next_btn").hide();
                    $(this).prop("disabled", true);
                    $(this).parent(".new_plan");

                    $('.create_plan').prop('disabled', true);
                    sessionStorage.setItem('create_plan_id', createplanid);

                }




            })
        }

    })

    function get_freezeDetails(){
        $('.next_btn').show();
        $('.client_freezeclass').show();
        $('.select2-hidden-accessible').hide();
        $(".select2").hide();
        $('.campign_name').hide()
        $('.campign_id').hide()
        $('.primary_freeze').show();
        $('.base_freeze').show();
        $('.endfreeze').show();
        $(".select_markets").show();
        // $('.select').hide();

        sendObj = {};
        sendObj.createplanid = plan_id;
        console.log(sendObj);
        var form = new FormData();
        form.append("file", JSON.stringify(sendObj));
        var settings11 = {
            "async": true,
            "crossDomain": true,
            "url": aws_url+'Create_plane_Freeze',
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
                $.confirm({
                    title: 'Alert',
                    content: 'Oops ! something went wrong',
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
            markascompleted = msg.IsMarkAsCompleted;
            var channel = msg.ischannelselectioncompleted;
            var planProcessed = msg.planProcessed;
            var acceleratedFilePath =msg.AcceleratedFilePath;


            // if (channel == "true" && paramgoback == null) {
            //     window.location.href="buyingbasket.php";
            // }

            $('.next_btn').hide();

            $(".bg").css("background-color", "#d6d6d6");
            $(".getClass").addClass('bg')
            $(".select2").addClass('hide');
            $(".text-muted").removeClass('d-block');
            $(".text-muted").addClass('hide');
            $(".clientleadClass").hide();
            $("clientleadClass").addClass('hide');

            base_tg_ =  msg.BaseTGId;
            brand_ = msg.Brand;
            campaignId_ = msg.CampaignId;
            campaignMarketId_ = msg.CampaignMarketId;
            campaignName_ = msg.CampaignName;


            clientId_ = msg.ClientId;
            endWeekId_ = msg.EndWeek;
            primaryTGTd_ = msg.PrimaryTGTd;
            userId_ = msg.user_id;
            client_name = msg.Client;

            console.log(ischannelselectioncompleted);
            if (channel == "true") {
                $('.next_btn').show();
                $('texttodisplay').hide();
            }
            else {
                $('.texttodisplay').show();
            }
            $(".bg").css("background-color", "#d6d6d6");
            $(".getClass").addClass('bg')
            $(".create_plan").attr("disabled", true);
            $(".select2").addClass('hide');
            $("#select").hide();
            $(".select2").hide();
            for (var i = 0; i < campaignMarketId_.length; i++) {
             $(".select_markets").append('<p class="multiclient form-control getClass" value='+campaignMarketId_[i]+' readonly style="background-color:#d6d6d6;">'+campaignMarketId_[i]+'</p>')

            }

            $(".freezebrand").append('<p type="text"  value='+brand_+' class="multiclient form-control getClass  get_clientlead-'+count+'" readonly style="background-color:#d6d6d6;margin-top:10px;">'+brand_+'</p>')
            $(".client_freezeclass").append('<p type="text" value='+client_name+' class="multiclient form-control" readonly style="background-color:#d6d6d6;">'+client_name+'</p>')
            $(".capm_name_class").append('<p type="text" value='+campaignName_+' class="multiclient form-control" readonly style="background-color:#d6d6d6;">'+campaignName_+'</p>')
            $(".camp_id").append('<p type="text" value='+campaignId_+' class="multiclient form-control" readonly style="background-color:#d6d6d6;">'+campaignId_+'</p>')
            $(".primary_freeze").append('<p type="text" value='+primaryTGTd_+' class="form-control" readonly style="background-color:#d6d6d6;">'+primaryTGTd_+'</p>')
            $(".base_freeze").append('<p type="text" value='+base_tg_+' class="form-control" readonly style="background-color:#d6d6d6;">'+base_tg_+'</p>')
            $('.endfreeze').append('<p type="text" value='+endWeekId_+' class="form-control" readonly style="background-color:#d6d6d6;">'+endWeekId_+'</p>')
        }
        })
    }

    $("body").on("click", ".next_btn", function(){
        window.location.href="buyingbasket.php";
    })
    var global_path;
    $("body").on("click", ".file_download", function(){
        $('#myModal').modal();

        sendObj = {};
        sendObj.plan_id = plan_id;
        console.log(sendObj);
        var form = new FormData();
        form.append("file", JSON.stringify(sendObj));
        var settings11 = {
            "async": true,
            "crossDomain": true,
            "url":aws_url+'get_file_names',
            "method": "POST",
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
            "data": form
        };
        $.ajax(settings11).done(function (msg) {
            msg = JSON.parse(msg);
            console.log(msg);
            for(key in msg ){
                $('.modal-body').append('<h5 class="sendpath" title="'+msg[key]+'" file_name="'+key+'"><a href="#"  style="cursor:pointer">'+key+'</a></5>');
            }
        })
    })

    $("body").on("click", ".sendpath", function(){
        var send_path = $(this).attr('title');
        file_Name = $(this).attr('file_name');
        sendObj = {};
        sendObj.file_path = send_path;
        console.log(sendObj);
        var form = new FormData();
        form.append("file", JSON.stringify(sendObj));
        var settings11 = {
            "async": true,
            "crossDomain": true,
            "url": aws_url+'download_file',
            "method": "POST",
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
            "data": form
        };
        $.ajax(settings11).done(function (msg) {
            console.log(msg);
            if(msg.message == "fail"){
                $.confirm({
                    title: 'Alert',
                    content: 'Oops ! something went wrong',
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
            msg_obj = msg;
            var bin = atob(msg_obj);
            var ab = s2ab(bin); // from example above
            var blob = new Blob([ab], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;' });

            var link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = file_Name;
            document.body.appendChild(link);

            link.click();

            document.body.removeChild(link);

            if(msg.message == "fail"){
                $.confirm({
                    title: 'Alert',
                    content: 'File successfully upload',
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
            setTimeout(function(){
                location.reload();
            }, 3000)
        }
        })
    })


    function s2ab(s) {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i=0; i!=s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
        return buf;
    }
    $("body").on("click", ".next_btn", function(){
        window.location.href = 'buyingbasket.php?gonext='+true
    })

})
