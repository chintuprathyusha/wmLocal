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

    $("#uploadFileTrigger2").on("click", function () {
        debugger;
        $('#load-file').click()
    })

    $('#load-file').on('change', function () {


  
        main_output = ''
        var file = $('#load-file')[0].files[0];
        // file_name_ = "AcceleratorOutput_"+campaign_id+"_"+version+".xlsx";
        file_name_ = file.name;
        var fileReader = new FileReader();

        $(".acceleratorFileNameDisplay").html('<p class="">'+file_name_+' <img src="assets/images/delete.svg" style="width:15px" class="deleteFile"></p>')

        
        $("body").on("click", ".deleteFile", function () {
            $(this).closest('.acceleratorFileNameDisplay').remove();
            $('.hide_').hide();
        })
        
        
        
        fileReader.onloadend = function (e) {
            debugger;

            blob___ = e.target.result;

            fileobj.filename = "AcceleratorOutput_"+campaign_id+"_"+version+".xlsx";
            fileobj.blob = blob___;
            fileobj.plan_id = plan_id;
            fileobj.user_id = user_id;
            //console.log(fileobj);
            file_name_ = file_name_;

            // $("body").on("click", "#upl-btn", function(){
      
                $('.loading').show();
        
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
                    msg = JSON.parse(msg);
                    console.log(msg);
        
                    msg1 = msg.message
        
                    $('.loading').show();
                    if (msg1 == true) {
                        if(msg1 != false){
                            $('.loading').show();
                        }
                        else{
                            $('.uploadFileTrigger2').hide();
                            $('.acceleratorFileNameDisplay').hide();
                            $('.loading').hide();
                            $('#upl-btn').hide();
                            $('.file-input').hide();
                            $('.red_color').hide();
                            $('.texttodisplay').show();
        
                            $('.file-input-ajax').hide();
                            
                             


                            // $('.texttodisplay').append('<h5>Accelerator Output file successfully uploaded</h5>')
                             $('.texttodisplay').html('<p>'+msg.file_name +'</p>')
                           


                            $('.edit_barc').prop('disabled', false);
        
                            // $.alert({
                            //     title: 'Success',
                            //     content: 'File succesfully uploaded',
                            //     animation: 'scale',
                            //     closeAnimation: 'scale',
                            //     opacity: 0.5,
                            //     buttons: {
                            //         okay: {
                            //             text: 'Okay',
                            //             btnClass: 'btn-primary'
                            //         }
                            //     }
                            // });
                        }
        
                    }
                    else if(msg1 == false)
                    {
                        $('.loading').hide();
                        $.alert({
                            title: 'error',
                            content: 'Headers did not match!',
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
            // })





            // $('#upl-btn').prop('disabled', false);

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

    // $("body").on("click", "#upl-btn", function(){
      
    //     $('.loading').show();

    //     fileobj.fromReplan = false;
    //     fileobj.category = "acceleratedfile";
    //     //console.log(file_name_);

    //     var form = new FormData();
    //     form.append("file", JSON.stringify(fileobj));
    //     var settings11 = {
    //         "async": true,
    //         "crossDomain": true,
    //         "url":aws_url+'Buying_basket',
    //         "method": "POST",
    //         "processData": false,
    //         "contentType": false,
    //         "mimeType": "multipart/form-data",
    //         "data": form
    //     };
    //     $.ajax(settings11).done(function (msg) {
    //         msg = JSON.parse(msg);
    //         console.log(msg);

    //         msg1 = msg.Status

    //         $('.loading').show();
    //         if (msg1 == "Path inserted Succesfully") {
    //             if(msg1 != "Path inserted Succesfully"){
    //                 $('.loading').show();
    //             }
    //             else{
    //                 $('.loading').hide();
    //                 $('#upl-btn').hide();
    //                 $('.file-input').hide();
    //                 $('.red_color').hide();
    //                 $('.texttodisplay').show();

    //                 $('.file-input-ajax').hide();

    //                 $('.texttodisplay').append('<h5>Accelerator Output file successfully uploaded</h5>')

    //                 $('.edit_barc').prop('disabled', false);

    //                 // $.alert({
    //                 //     title: 'Success',
    //                 //     content: 'File succesfully uploaded',
    //                 //     animation: 'scale',
    //                 //     closeAnimation: 'scale',
    //                 //     opacity: 0.5,
    //                 //     buttons: {
    //                 //         okay: {
    //                 //             text: 'Okay',
    //                 //             btnClass: 'btn-primary'
    //                 //         }
    //                 //     }
    //                 // });
    //             }

    //         }
    //         else if(msg1 == "wrong_file_uploaded" )
    //         {
    //             $('.loading').hide();
    //             $.alert({
    //                 title: 'error',
    //                 content: 'Headers did not match!',
    //                 animation: 'scale',
    //                 closeAnimation: 'scale',
    //                 opacity: 0.5,
    //                 buttons: {
    //                     okay: {
    //                         text: 'Okay',
    //                         btnClass: 'btn-primary'
    //                     }
    //                 }
    //             });
    //             $('.loading').hide();
    //         }

    //        else {


    //             $('#upl-btn').show();
    //             $('.file-input').show();
    //             $('.red_color').show();
    //             $('.texttodisplay').hide();
    //             $('.edit_barc').prop('disabled', true);
    //             $('.confirm_barc').prop('disabled', true);
    //             $('.submit_barc').prop('disabled', true);

    //             $.alert({
    //                 title: 'Error',
    //                 Content: 'Oops ! something went wrong, try again',
    //                 animation: 'scale',
    //                 closeAnimation: 'scale',
    //                 opacity: 0.5,
    //                 buttons: {
    //                     okay: {
    //                         text: 'Okay',
    //                         btnClass: 'btn-primary'
    //                     }
    //                 }
    //             });

    //         }
    //     });
    // })
    $('.loading').show();

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

    $.ajax({
                url: "configfile.json",
                method: "GET",
                dataType: 'json',
                async : false,
                success: function(data){
                       msg =  data;
                        console.log(data);
                        barc_label = msg.data[0].barc_label
                        console.log(typeof barc_label);
                 },
                 error:function() {
                     alert("Error")
                 }
            });

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


            // setTimeout(function(){
            //     $('.loading').hide();
            // }, 5000)
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
            plancompleted=msg.IsPlanCompleted;

            // $(".barcmsg").append('<h5 style="color:#000">Final Plan with  Eval is being created.Once complete you will receive it in your inbox - Expected Time of Arrival (ETA) is :'+process4ETA+'</h5>')

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
                // if (pathSelection == 1 ||  version > 1) {
                    if (acce_file_name==null) {
                        if(plancompleted == true){
                            $('.acce_div').show();
                            $('.acce_File_').hide();
                            $('.file-input-ajax').prop('disabled', true);
                            $(".file-input-ajax").css("background-color", "#4b6584");
                        }
                        else {
                            $('.acce_div').show();
                            $('.acce_File_').hide();
                        }
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
                        $('.barcmsg').show();
                        if (process4ETA == '') {
                          $(".barcmsg").append(' <p>'+barc_label+' : None</p>')
                        }
                        else {
                            if (plancompleted == false){
                                $(".barcmsg").append('<p style="color:#fff">  '+barc_label+' : '+format_date(process4ETA)+'</h5>')
                            }
                            else{
                                $('.barcmsg').hide();
                            }
                            // else{

                            // }
                        }

                        // $(".barcmsg").append('<h5 style="color:#fff">Final Plan with  Eval is being created.Once complete you will receive it in your inbox - Expected Time of Arrival (ETA) is :'+format_date(process4ETA)+'</h5>')

                    }

                // }
                // else if(pathSelection == 2) {
                //     $('.acce_div').hide();
                //     $('.edit_barc').removeAttr('disabled');
                //     if (planProcess>3) {
                //         $('.edit_barc').prop('disabled', true);
                //
                //        $('.barcmsg').show();
                //         if (process4ETA == '') {
                //           $(".barcmsg").append('<h5 style="color:#fff"> Final Plan with  Eval is being created. Once complete you will receive it in your inbox - Expected Time of Arrival (ETA) is : None</h5>')
                //         }
                //         else {
                //             if (plancompleted == false){
                //                 $(".barcmsg").append('<h5 style="color:#fff"> Final Plan with  Eval is being created. Once complete you will receive it in your inbox - Expected Time of Arrival (ETA) is : '+format_date(process4ETA)+'</h5>')
                //             }
                //             else{
                //                 $('.barcmsg').hide();
                //             }
                //           //$(".barcmsg").append('<h5 style="color:#fff"> Final Plan with  Eval is being created.Once complete you will receive it in your inbox - Expected Time of Arrival (ETA) is :'+format_date(process4ETA)+'</h5>')
                //         }
                //
                //         // $(".barcmsg").append('<h5 style="color:#fff">Final Plan with  Eval is being created.Once complete you will receive it in your inbox - Expected Time of Arrival (ETA) is :'+format_date(process4ETA)+'</h5>')
                //
                //     }
                // }
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

            // $('.barcmsg').show();
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
                // var End_Week_dt = msg.End_Week_dt;
                var Primary_Tg_dt= msg.Primary_Tg_dt;


                // ====================================

                 console.log(Primary_Tg_dt)


                var obj2 ={}
                for (key in Primary_Tg_dt) {
                    obj2[Primary_Tg_dt[key]] = key;
                }
                console.log(obj2);

                arr1 = Object.keys(obj2)
                console.log(arr1.sort());

             var obj1 ={}
             for (key in Base_Tg_dt) {
                 obj1[Base_Tg_dt[key]] = key;
             }
             console.log(obj1);

             arr = Object.keys(obj1)
             console.log(arr.sort());




             end_week = msg.End_Week_dt;


             var obj_2 ={}
             for (key in end_week) {
                 obj_2[end_week[key]] = key;
             }
             console.log(obj_2);

             arr_1 = Object.keys(obj_2)
             console.log(arr_1.sort());

                // ================================



                for(key in Campaign_Market_dt){
                    sel = ''
                    if (campaignMarkets.indexOf(Campaign_Market_dt[key]) > -1) {
                        sel='selected="selected"'
                    }
                    $(".campaign_markets").append('<option '+sel+' value='+Campaign_Market_dt[key]+' class="get_Campaign_Market_dt-'+count+'" key='+key+'>'+Campaign_Market_dt[key]+'</option>');
                    count++
                }





                for (var i = 0; i < arr1.length; i++) {
                    sel = ''
                    if (primaryTGTd_ == [arr1[i]] ) {
                        sel='selected="selected"'
                    }

                    $(".Primary_Tg_dt").append('<option '+sel+' value='+[arr1[i]]+' class="get_Primary_Tg_dt-'+count+'" key='+obj2[arr1[i]]+'>'+[arr1[i]]+'</option>');
                    count++
                 }


                 for (var i = 0; i < arr.length; i++) {
                         //console.log();
                    sel = ''
                    if (base_tg_ == [arr[i]] ) {
                        sel='selected="selected"'
                    }

                    $(".base_tg").append('<option '+sel+' value='+[arr[i]]+' class="get_Base_Tg_dt-'+count+'" key='+obj1[arr[i]]+'>'+[arr[i]]+'</option>');
                    count++
                 }


                // for(key in End_Week_dt){
                //     sel = ''
                //     if (endWeekId_ == End_Week_dt[key] ) {
                //         sel='selected="selected"'
                //     }
                //     $(".End_Week_dt").append('<option '+sel+' value='+End_Week_dt[key]+' class="get_End_Week_dt-'+count+'" key='+key+'>'+End_Week_dt[key]+'</option>');
                //     count++
                // }



                for (var i = 0; i < arr_1.length; i++) {
                    sel = ''
                        if (endWeekId_ == arr_1[i] ) {
                            sel='selected="selected"'
                        }
                        // alert(arr_1[i])
                    $(".End_Week_dt").append('<option  '+sel+' value='+[arr_1[i]]+' class="get_primary_tg-'+count+'" key='+obj_2[arr_1[i]]+'>'+[arr_1[i]]+'</option>');
                    // $(".end_week").append('<option value='+endweek_sort[i]+' class="get_end_week-'+count+'" key='+key+'>'+endweek_sort[i]+'</option>');
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
            // msgparse = msg
            msg =  JSON.parse(msg);
            if (typeof msg == 'string'){
                  $.alert({
                      title: 'Error',
                      content: 'Oops ! NOT updated',
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
                          if (process4ETA == '') {
                            $(".barcmsg").append(''+barc_label+' : None')
                          }
                          else {
                            if (plancompleted == false){
                                $('.barcmsg').append('<span>'+ barc_label +'<span id="dots">...</span></span><span id="more" style="display:none;">' + format_date(process4ETA) + '</span><span onclick="myFunction()" id="myclick" style="color:#9780f1;text-decoration: underline; ">Read more</span>');
                            }
                            else{
                                $('.barcmsg').hide();
                            }
                            //$(".barcmsg").append('<h5 style="color:#fff"> Final Plan with  Eval is being created.Once complete you will receive it in your inbox - Expected Time of Arrival (ETA) is :'+format_date(process4ETA)+'</h5>')

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
        return date.getDate()+'-'+months[date.getMonth()]+'-'+date.getFullYear()+'&nbsp;&nbsp;'+hrs+':'+mins;
    }


    $('body').on('click', '.backclass', function(){
        window.location.href = 'buyingbasket.php?planid='+plan_id;
    })

})
