$(document).ready(function () {
    $('.create_plan').prop('disabled', true);
    var urlType = getUrlParameter('type');
    $(".loading").show();
    $(".onclass").show();
    $(".offclass").hide();
    $(".onnclass").show();
    $(".offfclass").hide();
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

    //console.log(plan_id);
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

    //console.log(isnewuser)
    //console.log(plan_id);
    if (plan_id != "0" && urlType != 'new') {
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



    function swap(json){
      var ret = {};
      for(var key in json){
        ret[json[key]] = key;
      }
      return ret;
    }



    function createPlan() {
        sendObj = {};
        sendObj.user_id = sessionStorage.getItem('userid');
        //console.log(sendObj);
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
            msg = JSON.parse(msg);
            console.log(msg);
            $(".loading").hide();
            if(msg.message == "fail"){
                $.alert({
                    title: 'Alert',
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
            }
            else {
                base_tg = msg.Base_Tg;


             var obj1 ={}
             for (key in base_tg) {
                 obj1[base_tg[key]] = key;
             }
             console.log(obj1);

             arr = Object.keys(obj1)
             console.log(arr.sort());







// ===================================================
            end_week = msg.End_Week;


            var obj_2 ={}
            for (key in end_week) {
                obj_2[end_week[key]] = key;
            }
            console.log(obj_2);

            arr_1 = Object.keys(obj_2)
            console.log(arr_1.sort());
            // endweek_sort = arr_1.sort()
// alert(endweek_sort)






// ==========================


                //console.log(base_tg);
                primary_tg = msg.Primary_Tg;



                var obj2 ={}
                for (key in primary_tg) {
                    obj2[primary_tg[key]] = key;
                }
                console.log(obj2);

                arr1 = Object.keys(obj2)
                console.log(arr1.sort());



                // primary_tg = Object.values(primary_tg);
                // // campign_markets = Object.Values(msg.Campaign_Market);
                // primary_tg = primary_tg.sort();


                campign_markets = msg.Campaign_Market;
                //console.log(Object.values(campign_markets));
                campign_markets = Object.values(campign_markets);
                // campign_markets = Object.Values(msg.Campaign_Market);
                campign_markets = campign_markets.sort();
                // end_week = msg.End_Week;
                data = msg.Client;
                console.log(data);
                var ordered = {};
                    Object.keys(data).sort().forEach(function(key) {
                      ordered[key] = data[key];
                    });

                $.each(ordered ,function(key,i){
                    $('#select').append('<option value='+key+'>'+key+'</option>')
                })

                var $dropdown = $('#select');
                //console.log($dropdown);
                $dropdown.on('change', function() {
                    //console.log($dropdown);
                    $('#select0').empty();
                    // var a=data[$dropdown.val()];

                    var a=data[$.trim($dropdown[0].selectedOptions[0].text)];
                    if(a!=undefined){
                            a = a.sort();
                    }

                    $.each(a,function(j){
                        console.log(a[j]);
                        $('#select0').append('<option value='+a[j]+'>'+a[j]+'</option>')
                    })
                });

                $dropdown.trigger('change');


                for (var i = 0; i < arr.length; i++) {
                   $(".base_tg").append('<option value='+[arr[i]]+' class="get_base_tg-'+count+'" key='+obj1[arr[i]]+'>'+[arr[i]]+'</option>');
                   count++
                }


                for (var i = 0; i < arr1.length; i++) {
                    $(".primary_tg").append('<option value='+[arr1[i]]+' class="get_primary_tg-'+count+'" key='+obj2[arr1[i]]+'>'+[arr1[i]]+'</option>');
                      count++
                }

                for (var i = 0; i < arr_1.length; i++) {
                    // console.log(endweek_sort[i])
                    $(".end_week").append('<option value='+[arr_1[i]]+' class="get_primary_tg-'+count+'" key='+obj_2[arr_1[i]]+'>'+[arr_1[i]]+'</option>');
                    // $(".end_week").append('<option value='+endweek_sort[i]+' class="get_end_week-'+count+'" key='+key+'>'+endweek_sort[i]+'</option>');
                      count++
                }
                //
                // for(key in base_tg){
                //     //console.log();
                //     // $(".base_tg").append('<option value='+base_tg[key]+' class="get_base_tg-'+count+'" key='+key+'>'+base_tg[key]+'</option>');
                //     // count++
                // }


                for(key in campign_markets){
                    $(".campign_markets").append('<option value='+campign_markets[key]+' class="get_campign_markets-'+count+'" key='+key+'>'+campign_markets[key]+'</option>');
                    count++
                }

                // for(key in primary_tg){
                //     $(".primary_tg").append('<option value='+primary_tg[key]+' class="get_primary_tg-'+count+'" key='+key+'>'+primary_tg[key]+'</option>');
                //     count++
                // }
                // for(key in end_week){
                //     $(".end_week").append('<option value='+end_week[key]+' class="get_end_week-'+count+'" key='+key+'>'+end_week[key]+'</option>');
                //     count++
                // }
            }
        })
    }


        $.ajax({
                    url: "configfile.json",
                    method: "GET",
                    dataType: 'json',
                    async : false,
                    success: function(data){
                            msg =  data;
                            console.log(data);
                            create_planlabel = msg.data[0].create_plan_label
                            console.log(typeof create_planlabel);
                     },
                     error:function() {
                         alert("Error")
                     }
                });


        var channel_selection_value
        var program_performance_value
        $("body").on("change", "#channel_selection", function(){
            debugger
            if ($('#channel_selection').is(':checked')) {
                $('#program_performance').prop('checked', true);
                $('#program_performance').prop('disabled', false);
                $('.onclass').show();
                $('.offclass').hide();
                $('.onnclass').show();
                $('.offfclass').hide();
            }
            else {
                $('#program_performance').prop('checked', false);
                $('#program_performance').prop('disabled', true);
                $('.onclass').hide();
                $('.offclass').show();
                $('.offfclass').show();
                $('.onnclass').hide();
            }
        })

        $("body").on("change", "#program_performance", function(){
            debugger;
            if ($('#program_performance').is(':checked')) {
                $('.onnclass').show();
                $('.offfclass').hide();
            }
            else {
                $(this).attr('checked', false);
                $('.onnclass').hide();
                $('.offfclass').show();
            }
        })


    $("body").on("click", ".create_plan", function(){
        debugger;
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
            if ($('#channel_selection').is(':checked')) {
                channel_selection_value = $('#channel_selection').is(':checked');
                $('.onclass').show();
                channel_selection_value = "false"

            }
            else {
               channel_selection_value = $('#channel_selection').is(':checked');
               $('.offclass').show();
               channel_selection_value = "true"

            }

            if ($('#program_performance').is(':checked')) {
                program_performance_value = $('#program_performance').is(':checked');
                program_performance_value = "false"

            }
            else {
               program_performance_value = $('#program_performance').is(':checked');
               program_performance_value = "true"

            }
            // var skipChannelSelection =   $('input[name=channel__]:checked', '#channel_selection').val();
            // var skipProgramPerformance =   $('input[name=progran__]:checked', '#program_performance').val()
        
             var skipChannelSelection =  channel_selection_value
             var skipProgramPerformance = program_performance_value

        if (client == '' || campign_name  == '' || primary_tg == 'undefined' || base_tg == '' || end_week == '' || selectedValues == '') {
            $.alert({
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
            obj.channel_selection  = channel_selection
            obj.program_performance = program_performance
            obj.user_id = userid;
            obj.skipChannelSelection = skipChannelSelection;
            obj.skipProgramPerformance = skipProgramPerformance;
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
                process1ETA  =  msg.Process1ETA
                if(msg.message == "fail"){
                    $.alert({
                        title: 'Alert',
                        content: 'Plan has been not created, try again',
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
                    $.alert({
                        title: 'Success',
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
                       $('#program_performance').prop('disabled', true);
                       $("#channel_selection").prop('disabled',true);
                   $('.texttodisplay').append('');

                   if (process1ETA == "None" ) {
                     $('.texttodisplay').append(''+create_planlabel+'');
                   }
                   else {
                     $('.texttodisplay').append(''+create_planlabel+''+format_date(process1ETA)+'');
                   }

                    // $('.texttodisplay').append('Channel Selection Sheet being created. Once complete you will receive it in your inbox - Expected Time of Arrival (ETA) is : '+format_date(process1ETA)+'');
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

    $('body').on('change', '.campign_markets', function(){
        $('.create_plan').prop('disabled', false);
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
        //console.log(sendObj);
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
            process1ETA = msg.Process1ETA
            $('.loading').hide();
            if(msg.message == "fail"){
                $.alert({
                    title: 'Alert',
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
            }
            else {
                markascompleted = msg.IsMarkAsCompleted;
                var channel = msg.ischannelselectioncompleted;
                var planProcessed = msg.planProcessed;
                var acceleratedFilePath =msg.AcceleratedFilePath;

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
                plancompleted=msg.IsPlanCompleted;
                skipChannelSelection = msg.SkipChannelSelection;
                skipProgramPerformance = msg.skipProgramPerformance;


                //console.log(ischannelselectioncompleted);
                if (channel == "true" || plancompleted == true) {
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
                $(".slider").hide();
                // $("#program_performance").hide();
                $("#select").hide();
                $(".select2").hide();
                for (var i = 0; i < campaignMarketId_.length; i++) {
                    $(".select_markets").append('<p class="multiclient form-control getClass" value='+campaignMarketId_[i]+' readonly style="background-color:#d6d6d6;">'+campaignMarketId_[i]+'</p>')

                }


                if (process1ETA == "None" ) {
                  $('.texttodisplay').append(''+create_planlabel+'');
                }
                else {
                  $('.texttodisplay').append(''+create_planlabel+''+format_date(process1ETA)+'');
                }



                $(".freezebrand").append('<p type="text"  value='+brand_+' class="multiclient form-control getClass  get_clientlead-'+count+'" readonly style="background-color:#d6d6d6;margin-top:10px;">'+brand_+'</p>')
                $(".client_freezeclass").append('<p type="text" value='+client_name+' class="multiclient form-control" readonly style="background-color:#d6d6d6;">'+client_name+'</p>')
                $(".capm_name_class").append('<p type="text" value='+campaignName_+' class="multiclient form-control" readonly style="background-color:#d6d6d6;">'+campaignName_+'</p>')
                $(".camp_id").append('<p type="text" value='+campaignId_+' class="multiclient form-control" readonly style="background-color:#d6d6d6;">'+campaignId_+'</p>')
                $(".primary_freeze").append('<p type="text" value='+primaryTGTd_+' class="form-control" readonly style="background-color:#d6d6d6;">'+primaryTGTd_+'</p>')
                $(".base_freeze").append('<p type="text" value='+base_tg_+' class="form-control" readonly style="background-color:#d6d6d6;">'+base_tg_+'</p>')
                $('.endfreeze').append('<p type="text" value='+endWeekId_+' class="form-control" readonly style="background-color:#d6d6d6;">'+endWeekId_+'</p>')
                // $('.channel_selection_freez').append('<p type="text" value='+skipChannelSelection+' class="form-control" readonly style="background-color:#d6d6d6;">'+skipChannelSelection+'</p>')
                // $('.program_performance_freez').append('<p type="text" value='+skipProgramPerformance+' class="form-control" readonly style="background-color:#d6d6d6;">'+skipProgramPerformance+'</p>')
                if (skipChannelSelection == "true") {
                   $('.channel_selection_freez').append('<label class="switch"><input type="checkbox" id="channel_selection"  value="true" name="disableYXLogo"><div class="slider round"></div></label>')
                }
                else {
                  $('.channel_selection_freez').append('<label class="switch"><input type="checkbox" id="channel_selection" checked value="true" name="disableYXLogo"><div class="slider round"></div></label>')
                }

                if (skipProgramPerformance == "true") {

                    $('.program_performance_freez').append('<label class="switch"><input type="checkbox" id="channel_selection"  value="true" name="disableYXLogo"><div class="slider round"></div></label>')
                }
                else {
                    $('.program_performance_freez').append('<label class="switch"><input type="checkbox" id="channel_selection" checked value="true" name="disableYXLogo"><div class="slider round"></div></label>')

                }

            }
        })
    }


    var global_path;
    $("body").on("click", ".file_download", function(){
        $('#myModal').modal();
        sendObj = {};
        sendObj.plan_id = plan_id;
        //console.log(sendObj);
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
            //console.log(msg);
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
                for(key in msg ){
                    $('.modal-body').append('<h5 class="sendpath" title="'+msg[key]+'" file_name="'+key+'"><a href="#"  style="cursor:pointer">'+key+'</a></5>');
                }
            }
        })
    })

    $("body").on("click", ".sendpath", function(){
        var send_path = $(this).attr('title');
        file_Name = $(this).attr('file_name');
        sendObj = {};
        sendObj.file_path = send_path;
        //console.log(sendObj);
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
            //console.log(msg);
            if(msg.message == "fail"){
                $.alert({
                    title: 'Error',
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
                    $.alert({
                        title: 'Success',
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

    function format_date(date_string) {
        date = new Date(date_string)
        months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
        weeks_ = ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun"];
        hours_mian = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"];
        hrs = date.getHours().toString().length < 2 ? '0'+date.getHours() : date.getHours()
        mins = date.getMinutes().toString().length < 2 ? '0'+date.getMinutes() : date.getMinutes()
        return date.getDate()+'-'+months[date.getMonth()]+'-'+date.getFullYear()+'&nbsp;&nbsp;'+hrs+':'+mins;
    }

    $("body").on("click", ".next_btn", function(){
        window.location.href = "buyingbasket.php?planid="+plan_id
    })


})
