$(document).ready(function () {
    $('.loading').show();
    $('#upl-btn').prop('disabled', true);
    $(".campaign_markets").attr("disabled", "disabled");
    $(".campaign_markets").prop("disabled", true);
    $('.edit_barc').prop('disabled', true);
    $('.confirm_barc').prop('disabled', true);
    $('.submit_barc').prop('disabled', true);
    $('.barcmsg').hide();
    var acce_file_name;
    $('.acce_div').hide();
    var plan_id = $.urlParam('planid');
    var user_id = sessionStorage.getItem('userid');
    $('.texttodisplay').hide();
    onLoad();
    var campaign_id;
    var pathSelection;
    var version;
    var campaignName;
    function onLoad(){
        sendObj ={}
        sendObj.planid = plan_id;
        //console.log(sendObj);
        var form = new FormData();
        form.append("file", JSON.stringify(sendObj));
        var settings11 = {
            "async": true,
            "crossDomain": true,
            "url":aws_url+'version_for_plan',
            "method": "POST",
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
            "data": form
        };
        $.ajax(settings11).done(function (msg) {
            msg = JSON.parse(msg);
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
                console.log(msg);
                campaign_id = msg.CampaignId;
                version = msg.Version;
                campaignName = msg.CampaignName;
            }
        })
    }
    var file_name_;
    var main_output;
    fileobj = {};
    $('#load-file').on('change', function () {
        main_output = ''
        var file = $('#load-file')[0].files[0];
        file_name_ = "AcceleratorOutput_"+campaign_id+"_"+version+".xlsx";
        var fileReader = new FileReader();
        fileReader.onloadend = function (e) {
            blob___ = e.target.result;

            fileobj.filename = "AcceleratorOutput_"+campaign_id+"_"+version+".xlsx";
            fileobj.blob = blob___;
            fileobj.plan_id = plan_id;
            fileobj.user_id = user_id;
            //console.log(fileobj);
            file_name_ = file_name_;
            $('#upl-btn').prop('disabled', false);

        };
        fileReader.readAsDataURL(file);
    });


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
            ////console.log(error);
        });
    }

    $("body").on("click", "#upl-btn", function(){
        //debugger
        $(".loading").show();
        fileobj.fromReplan = false;
        fileobj.category = "acceleratedfile";
        //console.log(file_name_);

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
            $('.loading').hide();
            if (msg == "Path inserted Succesfully") {
                $('#upl-btn').hide();
                $('.file-input').hide();
                $('.red_color').hide();
                $('.texttodisplay').show();
                $('.texttodisplay').append('<h5>Accelerator Output file successfully uploaded</h5>')

                $('.edit_barc').prop('disabled', false);

                $.alert({
                    title: 'Success',
                    content: 'File succesfully uploaded'
                    //
                    // animation: 'scale',
                    // closeAnimation: 'scale',
                    // opacity: 0.5,
                    // buttons: {
                    //     okay: {
                    //         text: 'Okay',
                    //         btnClass: 'btn-primary'
                    //     }
                    // }
                });
            }
            else {
                $('#upl-btn').show();
                $('.file-input').show();
                $('.red_color').show();
                $('.texttodisplay').hide();
                $('.edit_barc').prop('disabled', true);
                $('.confirm_barc').prop('disabled', true);
                $('.submit_barc').prop('disabled', true);

                $.alert({
                    title: 'Error',
                    Content: 'Oops ! something went wrong, try again',
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


    var edit_flag = false;
    var base_tg_;
    var campaignId_; var campaignMarkets; var endWeekId_; var primaryTGTd_;
    var userid= sessionStorage.getItem('userid');
    var count = 0;
    var version;
    var planProcess;
    $('.campaign_markets').attr("style", "pointer-events: none;");
    barcData();
    setTimeout(function(){ editData(); }, 1000);
    $('.select2').hide();

    function barcData() {
        $('.loading').show()
        sendObj = {};
        sendObj.planId = plan_id;
        //console.log(sendObj);
        var form = new FormData();
        form.append("file", JSON.stringify(sendObj));
        var settings11 = {
            "async": true,
            "crossDomain": true,
            "url": aws_url+'Barc_Plan_Freeze',
            "method": "POST",
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
            "data": form
        };
        $.ajax(settings11).done(function (msg) {
            msg = JSON.parse(msg);
            console.log(msg);

            setTimeout(function(){
                $('.loading').hide();
            }, 5000)
            planProcess = msg.planProcess;
            acce_file_name = msg.AcceleratedFilePath;
            $(".select2").addClass('hide');
            base_tg_ =  msg.BaseTGId;
            campaignId_ = msg.CampaignId;
            campaignMarkets = msg.CampaignMarketId;
            //console.log(campaignMarkets);
            endWeekId_ = msg.EndWeek;
            primaryTGTd_ = msg.PrimaryTGTd;
            pathSelection = msg.PathSelection;
            process4ETA = msg.Process4ETA;
            $(".barcmsg").append('<h5 style="color:#000">Final Plan with  Eval is being created.Once complete you will receive it in your indox - Expected Time of Arrival (ETA) is :'+process4ETA+'</h5>')

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
                            btnClass: 'btn-primary',
                            action: function(){
                                window.location.href="error.php"
                            }
                        }
                    }
                });

            }

            else {
                if (pathSelection == 1) {
                    if (acce_file_name==null) {
                        $('.acce_div').show();
                        $('.acce_File_').hide();
                    }
                    else {
                        $('.acce_div').hide();
                        $('.acce_File_').show();
                        $('.acce_File_').append('<h5>Accelerator Output file is successfully uploaded</h5>');
                        $('.edit_barc').prop('disabled', false);
                        if (acce_file_name!==null && planProcess == 3) {
                            $('.edit_barc').prop('disabled', false);
                        }
                    }

                    if (planProcess>3) {
                        $('.edit_barc').prop('disabled', true);
                    }

                }
                else if(pathSelection == 2) {
                    $('.acce_div').hide();
                    $('.edit_barc').removeAttr('disabled');
                    if (planProcess>3) {
                        $('.edit_barc').prop('disabled', true);
                    }
                }
            }
        })
    }

    $('body').on('click', '.edit_barc', function(){
        $('.submit_barc').prop('disabled', true);
        $(".campaign_markets").prop("disabled", false);
        $('.Primary_Tg_dt').prop("disabled", false);
        $('.base_tg').prop("disabled", false);
        $('.End_Week_dt').prop("disabled", false);
        $('.confirm_barc').prop('disabled', false);
        $('select').prop('disabled', false)
    })
    function editData(){
        $('select').prop('disabled', false);
        edit_flag = true;
        sendObj = {};
        var form = new FormData();
        form.append("file", JSON.stringify(sendObj));
        var settings11 = {
            "async": true,
            "crossDomain": true,
            "url": aws_url+'BARC_Evalution_edit_button',
            "method": "POST",
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
            "data": form
        };
        $.ajax(settings11).done(function (msg) {
            msg = JSON.parse(msg);
            $('.barcmsg').hide();
            console.log(msg);
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
                $('.select2').show();
                $(".campaign_markets").prop("disabled", true);
                $('.Primary_Tg_dt').prop("disabled", true);
                $('.base_tg').prop("disabled", true);
                $('.End_Week_dt').prop("disabled", true);

                var Base_Tg_dt = msg.Base_Tg_dt;
                var Campaign_Market_dt = msg.Campaign_Market_dt;
                Campaign_Market_dt = Object.values(Campaign_Market_dt);
                Campaign_Market_dt = Campaign_Market_dt.sort()
                //console.log(Campaign_Market_dt);
                var End_Week_dt = msg.End_Week_dt;
                var Primary_Tg_dt= msg.Primary_Tg_dt;

                for(key in Base_Tg_dt){
                    //console.log();
                    sel = ''
                    if (base_tg_ == Base_Tg_dt[key] ) {
                        sel='selected="selected"'
                    }
                    $(".base_tg").append('<option '+sel+' value='+Base_Tg_dt[key]+' class="get_Base_Tg_dt-'+count+'" key='+key+'>'+Base_Tg_dt[key]+'</option>');
                    count++
                }
                //console.log(campaignMarkets);
                for(key in Campaign_Market_dt){
                    sel = ''
                    if (campaignMarkets.indexOf(Campaign_Market_dt[key]) > -1) {
                        sel='selected="selected"'
                    }
                    $(".campaign_markets").append('<option '+sel+' value='+Campaign_Market_dt[key]+' class="get_Campaign_Market_dt-'+count+'" key='+key+'>'+Campaign_Market_dt[key]+'</option>');
                    count++
                }

                for(key in Primary_Tg_dt){
                    sel = ''
                    if (primaryTGTd_ == Primary_Tg_dt[key] ) {
                        sel='selected="selected"'
                    }
                    $(".Primary_Tg_dt").append('<option '+sel+' value='+Primary_Tg_dt[key]+' class="get_Primary_Tg_dt-'+count+'" key='+key+'>'+Primary_Tg_dt[key]+'</option>');
                    count++
                }

                for(key in End_Week_dt){
                    sel = ''
                    if (endWeekId_ == End_Week_dt[key] ) {
                        sel='selected="selected"'
                    }
                    $(".End_Week_dt").append('<option '+sel+' value='+End_Week_dt[key]+' class="get_End_Week_dt-'+count+'" key='+key+'>'+End_Week_dt[key]+'</option>');
                    count++
                }

            }
            setTimeout(function(){
                $('.loading').hide();
            }, 7000)

        })
    }


    $('body').on('click', '.confirm_barc', function(){
        $(this).prop("disbaled", true);
        $(this).attr('disabled', 'disabled')
        $('.edit_barc').removeAttr('disabled')
        $.alert({
            title: "Success",
            content: "Modified successfully"
        });
        $('select').prop('disabled', true);
        $('.submit_barc').prop('disabled', false)
    })



    $('body').on('click', '.submit_barc', function(){
      $(".barcmsg").empty();
        obj = {}
        camp_markets = []
        selectedValues = $(".campaign_markets").select2('data');
        for (var i = 0; i < selectedValues.length; i++) {
            camp_markets.push(selectedValues[i].text);
        }
        var key_primary_tg = $(".Primary_Tg_dt").find("option:selected").attr('key');
        var key_base_tg = $(".base_tg").find("option:selected").attr('key');
        var key_end_week = $(".End_Week_dt").find("option:selected").attr('key');
        obj.edit = edit_flag;
        obj.PlanId = plan_id;
        obj.user_id = userid;
        obj.PrimaryTGTd = key_primary_tg;
        obj.BaseTGId = key_base_tg;
        obj.EndWeekId = key_end_week;
        obj.CampaignMarketId = $.unique(camp_markets);
        //console.log(obj);

        var form = new FormData();
        form.append("file", JSON.stringify(obj));
        var settings11 = {
            "async": true,
            "crossDomain": true,
            "url": aws_url+'BARC_confirm_button',
            "method": "POST",
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
            "data": form
        };
        $.ajax(settings11).done(function (msg) {
            console.log(msg);
            msgwithoutparse =  msg;
            if (msgwithoutparse == 'not updated') {
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

            msg = JSON.parse(msg);
            console.log(msg);
            $('.loading').hide();
            debugger;
            status = msg.Status;
            process4ETA = msg.Process4ETA;

            if (status == "updated") {
                $.alert({
                    title: 'Success',
                    content: 'Eval submitted successfully'
                });
                $('select').prop('disabled', true);
                $('.submit_barc').prop('disabled', true);

                $('.confirm_barc').prop('disabled', true);
                $('.edit_barc').prop('disabled', true);
                $('.barcmsg').show();
                if (process4ETA == 'null') {
                  $(".barcmsg").append('<h5 style="color:#000"> Final Plan with  Eval is being created.Once complete you will receive it in your indox - Expected Time of Arrival (ETA) is : None</h5>')
                }
                else {
                  $(".barcmsg").append('<h5 style="color:#000"> Final Plan with  Eval is being created.Once complete you will receive it in your indox - Expected Time of Arrival (ETA) is :'+format_date(process4ETA)+'</h5>')

                }
            }
            else {
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
        })
    })


    function format_date(date_string) {
        date = new Date(date_string)
        months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
        weeks_ = ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun"];
        hours_mian = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"];
        hrs = date.getHours().toString().length < 2 ? '0'+date.getHours() : date.getHours()
        mins = date.getMinutes().toString().length < 2 ? '0'+date.getMinutes() : date.getMinutes()
        return date.getDate()+'/'+months[date.getMonth()]+'/'+date.getFullYear()+hrs+':'+mins;
    }


    $('body').on('click', '.backclass', function(){
        window.location.href = 'buyingbasket.php?planid='+plan_id;
    })

})
