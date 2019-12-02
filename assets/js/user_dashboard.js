$(document).ready(function () {

    $(".loading").show();
    var startdate;
    var allData;
    var filesData;
    var selectedFiles = [];
    var enddate;
    var useridd = sessionStorage.getItem("userid");
    var data_table_;
    pageonloadhit()

    $('body').on('click', '.createbtn', function(){
        window.location.href='planner_createnewplan.php?type=new';
    })

    $("body").on("click", ".btn3", function(){
        $(".displaytoptextboxes").slideToggle('slow');
    });


    function pageonloadhit() {
        obj = {}
        brandclass = $('.brandclass').val();
        obj.user_id = useridd
        obj.IsDefault = true

        console.log(obj);
        var form = new FormData();
        form.append("file", JSON.stringify(obj));
        var settings11 = {
            "async": true,
            "crossDomain": true,
            "url": aws_url+'Dashboard_screen_load',
            "method": "POST",
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
            "data": form
        };
        $.ajax(settings11).done(function (msg) {
            msg = JSON.parse(msg);
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
                allData = msg;
                displaytable(msg);
            }
            // dataTableMultiSort()

        })
    }


    $("body").on("click", ".gobtn", function(){
        startdate =   $('.startdateclass').val();
        enddate =   $('.enddateclass').val();
        if (startdate!='' && enddate!='') {
            if(startdate <= enddate){
                objj = {}
                objj.startdate = startdate
                objj.enddate =  enddate
                objj.user_id =  useridd
                console.log(objj);
                var form = new FormData();
                form.append("file", JSON.stringify(objj));
                var settings11 = {
                    "async": true,
                    "crossDomain": true,
                    "url":aws_url+'Dashboard_Table_One',
                    "method": "POST",
                    "processData": false,
                    "contentType": false,
                    "mimeType": "multipart/form-data",
                    "data": form
                };

                $.ajax(settings11).done(function (msg) {
                    msg = JSON.parse(msg);
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
                        displaytable(msg);
                    }
                    // dataTableMultiSort()
                    // planid = msg[Id];
                    // console.log(planid);

                })
            }
            else {
                $.alert({
                    title: 'Invalid Dates',
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
        }
        else {
            $.alert({
                title: 'Invalid Dates',
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
    })


    var completeArray;
    var incompleteArray;

    function displaytable(msg) {

        $(".loading").hide();
        if (dataTable___ != undefined) {
            dataTable___.clear();
            dataTable___.destroy()
        }
        $.each(msg ,function(key,v){
            console.log(key , v);
            if (key == 'Incompleted') {
                ap1 = ''
                for (var i = 0; i < v.length; i++) {
                    ap1 += '<tr>'
                    ap1 += '<td  style="">'+(i+1)+'</td>'
                    ap1 += '<td  style=""><a style="text-decoration:underline;cursor:pointer;" plainidattr="'+v[i]['PlanId']+'" status = "'+v[i]['PlanStatus']+'" id="camp_idhyperlink">'+v[i]['CampaignId']+'</a></td>'
                    ap1 += '<td  style="width: 120px;">'+v[i]['CampaignName']+ '</td>'
                    ap1 += '<td  style="">'+v[i]['ClientName']+'</td>'
                    ap1 += '<td  style="">'+v[i]['BrandName']+'</td>'
                    ap1 += '<td  style="width:140px;">'+format_date(v[i]['StartDate'])+'</td>'
                    ap1 += '<td> <button  plainidattr="'+v[i]['PlanId']+'" style="color: white;border: none;  background: #BB2734;  padding: 1px;font-size: 9px;width: 94px;font-weight: 700;" class="form-control completebtn">Mark As Complete</button> </td>'
                    ap1 += '<td style=""><div class="pointer downloadbtn" campId="'+v[i]['CampaignId']+'" plainidattr="'+v[i]['PlanId']+'" style=""><img src="assets/images/WhiteIcons/FilesDownload.png" style="width:27px;"></div></td>';
                    ap1 += '</tr>'
                }
                $(".displayincompletedplans").html(ap1);

                dataTableMultiSort()


            }
            else {

                ap = ''
                if (dataTable___1 != undefined) {
                    dataTable___1.clear();
                    dataTable___1.destroy()
                }

                for (var i = 0; i < v.length; i++) {
                    ap += '<tr>'
                    ap += '<td  style="">'+(i+1)+'</td>'
                    ap += '<td  style=""><a  style="text-decoration:underline;cursor:pointer;" plainidattr="'+v[i]['PlanId']+'" status = "'+v[i]['PlanStatus']+'" id="camp_idhyperlink_">'+v[i]['CampaignId']+'</a></td>'
                    ap += '<td  style="width: 131px;">'+v[i]['CampaignName']+'</td>'
                    ap += '<td  style="">'+v[i]['ClientName']+'</td>'
                    ap += '<td  style="">'+v[i]['BrandName']+'</td>'
                    // ap += '<td  style="text-align:center;">'+format_date(v[i]['StartDate'])+'</td>'
                    ap += '<td> <button class="replanmodal" Campaignid="'+v[i]['CampaignId']+'" plainidattr="'+v[i]['PlanId']+'"  style="color:white!important;background-color: #f07144;;border: none;padding: 4PX;width: 118px;border-radius: 2px;">Re-Plan</button></td>';
                    // ap += '<td  style="text-align:center;"><button class="replanmodal" campaign_id='+v[i]['CampaignId']+'  plainidattr="'+v[i]['PlanId']+'" style="background-color: #a5b1c2;color: #000;border: none;padding: 4PX;width: 68px;border-radius: 5px;">Re-Plan</button></td>'
                    ap += '<td  style="width:150px;">'+format_date(v[i]['EndDate'])+'</td>'
                    ap += '<td><div class="downloadbtn pointer" campId="'+v[i]['CampaignId']+'" plainidattr="'+v[i]['PlanId']+'" style=""><img src="assets/images/WhiteIcons/FilesDownload.png" style="width:27px;"></div></td>'
                    ap += '</tr>'
                }
                $(".displaycompletedplans").html(ap);

                dataTableMultiSortt()

            }
        })

    }


    var attr__, plannIdd;
    $("body").on("click", ".replanmodal", function(){
        attr__ = $(this).attr('Campaignid')
        plannIdd = $(this).attr('plainidattr')
        $('.buyingbasketbtn').attr('title', attr__);
        $('.buyingbasketbtn').attr('plan_id', plannIdd);
        $('.acceleratorbtn').attr('title', attr__);
        $('#replanmodal').modal();
    })

    var planId;
    $("body").on("click", ".buyingbasketbtn", function(){
        campid = $(this).attr('title');
        planId = $(this).attr('plan_id')
        objj = {}
        objj.CampaignId = campid
        objj.user_id = useridd
        objj.RePlanCategory = 1
        console.log(objj);

        var form = new FormData();
        form.append("file", JSON.stringify(objj));
        var settings11 = {
            "async": true,
            "crossDomain": true,
            "url": aws_url+'re_plan_campaign_1',
            "method": "POST",
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
            "data": form
        };
        $.ajax(settings11).done(function (msg) {
            msg = JSON.parse(msg);
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
                updatedplanid = msg.planid;
                window.location.href = 'buyingbasket.php?planid='+updatedplanid;
            }

        })

    })


    $("body").on("click", ".acceleratorbtn", function(){
        campid = $(this).attr('title');
        sessionStorage.setItem('campaign_id', campid);
        // alert(campid)
        objj = {}
        objj.CampaignId = campid
        objj.user_id = useridd
        objj.RePlanCategory = 2
        console.log(objj);
        var form = new FormData();
        form.append("file", JSON.stringify(objj));
        var settings11 = {
            "async": true,
            "crossDomain": true,
            "url": aws_url+'re_plan_campaign_1',
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
                updatedplanid = msg.planid
                // window.location.href = 'planner_accelerator.php?planid='+updatedplanid;
                 window.location.href = 'barc.php?planid='+updatedplanid;
            }

        })

    })
    var all_files_;
    var global_campId;

    $("body").on("click", ".downloadbtn", function() {
        debugger
        plainiddd =  $(this).attr('plainidattr');
        global_campId = $(this).attr('campId');

        $('.downloadAll').attr('this_campId', global_campId)
        $('.DownloadAllfiles').attr('this_campId', global_campId);
        $('#downloadicon').modal()
        sendObj = {};
        sendObj.plan_id = plainiddd;
        console.log(sendObj);
        var form = new FormData();
        form.append("file", JSON.stringify(sendObj));
        var settings11 = {
            "async": true,
            "crossDomain": true,
            "url": aws_url+'get_file_names',
            "method": "POST",
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
            "data": form
        };
        $.ajax(settings11).done(function (msg) {
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
                filesData = JSON.parse(msg);
                console.log(msg);
                console.log(filesData);
                console.log(jQuery.isEmptyObject(filesData));

                if (jQuery.isEmptyObject(filesData)) {
                    $('.row_body').empty()
                    $('.row_body').append('<h5 class="sendpath" ><p>No files to Download</p></5>');
                }
                else {
                    $('.pathslinks').empty()
                    keys = Object.keys(filesData);
                    var val = Object.values(filesData)

                    $('.row_body').html('')
                    console.log(val.length);
                    console.log(keys.length);
                    all_files_ = val;
                    for (var i = 0; i < keys.length; i++) {
                        console.log(keys[i]);
                        $('.row_body').append('<div class="col-sm-3"><div class="fileClick pointer" filenamewithversions="'+keys[i]+'" file_camid="'+global_campId+'" title="'+keys[i]+'"><span>'+keys[i]+'</span></div></div>');
                    }
                }
            }
        })
    })
    var key;

    $('.downloadAll').prop('disabled', true)
    $("body").on("click", ".fileClick", function () {
        key = $(this).attr('title');
        path = filesData[key];
        idx = selectedFiles.indexOf(path);
        $(".unSelectAll").addClass('selectAll')
        $(".unSelectAll").html('Select All')
        $(".selectAll").removeClass('unSelectAll')
        if (idx > -1) {
            selectedFiles.splice(idx, 1)
            $(this).removeClass('active')
            $('.downloadAll').prop('disabled', true)
        }
        else {
            $('.downloadAll').prop('disabled', false)
            $(this).addClass('active')
            selectedFiles.push(path);
        }
        console.log(selectedFiles);
    })
    //-----------------SelectALl-------------//
    $('body').on('click', '.selectAll', function(){
        $('.downloadAll').prop('disabled', false)
        selectedFiles = Object.values(filesData);
        $(this).addClass('unSelectAll')
        $(this).html('Unselect All')
        $(this).removeClass('selectAll');
        $(".fileClick").addClass('active')
        console.log(selectedFiles);

    })

    $('body').on('click', '.unSelectAll', function(){
        resetSelect();
        $('.downloadAll').prop('disabled', true)
    })

    $('body').on('click', '.downloadAll', function(){
        $('.loading').show()
        sendObj={};
        console.log(selectedFiles.length);
        console.log(sendObj);

        filenamewith_versions =  $('.fileClick').attr('filenamewithversions')

        result = $(this).attr('this_campid');
        if(selectedFiles.length==1){
            sendObj.file_path = selectedFiles;
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
                else{
                result = key
                msg_obj = msg
                $('.loading').hide()
                var blob = new Blob([s2ab(atob(encodeURI(msg_obj)))], {
                    type: 'octet/stream'
                });

                href = URL.createObjectURL(blob);
                var a = document.createElement("a");
                a.href = href;
                a.download = result;
                document.body.appendChild(a);
                a.click();
                success_notify(result+ " Excel sheet downloaded Successfully")
                // setInterval(function () {
                //     location.reload();
                // }, 1000);
             }
            })
        }
        else{
            sendObj.file_path = selectedFiles;
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
                else{
                result = result+'.zip'
                // file_name = msg.file_name;
                var bin = atob(msg);
                var ab = s2ab(bin); // from example above
                var blob = new Blob([ab], { type: 'octet/stream' });

                var link = document.createElement('a');
                link.href = window.URL.createObjectURL(blob);
                link.download = result;
                // link.download = 'file_name';

                document.body.appendChild(link);

                link.click();

                resetSelect()

                document.body.removeChild(link);
                    $('.loading').hide()
                }
            });
        }
    });

    // function s2ab_(s) {
    //  var buf = new ArrayBuffer(s.length);
    //  var view = new Uint8Array(buf);
    //  for (var i=0; i!=s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
    //  return buf;
    // }
    function encrypt(value) {
        return window.btoa(value);
    }

    function decrypt(value) {
        return window.atob(value);
    }



    $('body').on('click', '.DownloadAllfiles', function(){
        $('.loading').show()
        sendObj={};
        result = $(this).attr('this_Campid')
        sendObj.file_path = all_files_;
        console.log(sendObj);
        var form = new FormData();
        form.append("file", JSON.stringify(sendObj));
        var settings11 = {
            "async": true,
            "crossDomain": true,
            "url": aws_url+'download_all_files',
            "method": "POST",
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
            "data": form
        };
        $.ajax(settings11).done(function (msg) {
            $('.loading').hide()
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
            else{
            result = result+'.zip'
            // file_name = msg.file_name;
            var bin = atob(msg);
            var ab = s2ab(bin); // from example above
            var blob = new Blob([ab], { type: 'octet/stream' });

            var link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = result;
            // link.download = 'file_name';

            document.body.appendChild(link);

            link.click();

            resetSelect()

            document.body.removeChild(link);
            }
        });
    });



    $('body').on('click', '.closeClass', function(){
        resetSelect();
    })
    function resetSelect() {
        selectedFiles = []
        $(".unSelectAll").addClass('selectAll')
        $(".selectAll").html('Select All')
        $(".selectAll").removeClass('unSelectAll')
        $(".fileClick").removeClass('active')
    }


    // =================================
    $("body").on("click", ".sendpath", function(){

        file_Name = $(this).attr('file_name');
        var send_path = $(this).attr('title')
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
            // msg = JSON.parse(msg);
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
            else{
            // console.log(JSON.parse(msg))
            msg_obj = msg;
            // file_name = msg.file_name;
            var bin = atob(msg_obj);
            var ab = s2ab(bin); // from example above
            var blob = new Blob([ab], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;' });

            var link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = file_Name;
            // link.download = 'file_name';

            document.body.appendChild(link);

            link.click();

            document.body.removeChild(link);

            swal('downloaded successfully');

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


    // =====================
    $("body").on("click", "#camp_idhyperlink_", function(){
        plainiddd =  $(this).attr('plainidattr');
        // alert(plainiddd)
        sessionStorage.setItem('create_plan_id', plainiddd);
        // window.location.href = 'planner_createnewplan.php';
        newstatus = $(this).attr('status');
        if (newstatus == 1) {
            window.location.href = 'planner_createnewplan.php?planid='+plainiddd;
        }
        else if (newstatus == 2) {
            window.location.href = 'buyingbasket.php?planid='+plainiddd;
        }
        else {
            window.location.href = 'barc.php?planid='+plainiddd;
        }
    });


    $("body").on("click", "#camp_idhyperlink", function(){
        plainiddd =  $(this).attr('plainidattr');
        sessionStorage.setItem('create_plan_id', plainiddd);
        // window.location.href = 'planner_createnewplan.php';
        newstatus = $(this).attr('status');
        if (newstatus == 1) {
            window.location.href = 'planner_createnewplan.php?planid='+plainiddd;
        }
        else if (newstatus == 2) {
            window.location.href = 'buyingbasket.php?planid='+plainiddd;
        }
        else {
            window.location.href = 'barc.php?planid='+plainiddd;
        }

    })






    $(".displayincompletedplans").html();
    $(".displayincompletedplans").empty();
    $(".displaycompletedplans").html();
    $(".displaycompletedplans").empty();

    $("body").on("click", ".completebtn", function(){
        plainid = $(this).attr('plainidattr')
        Id = plainid
        startdate =   $('.startdateclass').val();
        enddate =   $('.enddateclass').val();

        swal({
            title: "Are you sure to",
            text: "mark as complete ?",
            icon: "warning",
            buttons: ["CANCEL", "OK"],
            dangerMode: true,
        })


        .then((willDelete) => {
            if (willDelete) {
                objj = {}
                objj.startdate = startdate
                objj.enddate =  enddate
                objj.user_id =  useridd
                objj.Id =  Id
                console.log(objj);
                var form = new FormData();
                form.append("file", JSON.stringify(objj));
                var settings11 = {
                    "async": true,
                    "crossDomain": true,
                    "url": aws_url+'Dashboard_Complete_Button',
                    "method": "POST",
                    "processData": false,
                    "contentType": false,
                    "mimeType": "multipart/form-data",
                    "data": form
                };
                $.ajax(settings11).done(function (msg) {
                    msg = JSON.parse(msg);
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
                        allData = msg;
                        displaytable(msg);
                    }

                })
            }
        });
        $('.swal-button--cancel').parent().addClass('cancelclass')
        $('.swal-button--danger').parent().addClass('okclass')



    })

    function format_date(date_string) {
        date = new Date(date_string)
        months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
        weeks_ = ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun"];
        hours_mian = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"];
        hrs = date.getHours().toString().length < 2 ? '0'+date.getHours() : date.getHours()
        mins = date.getMinutes().toString().length < 2 ? '0'+date.getMinutes() : date.getMinutes()
        return date.getDate()+'/'+months[date.getMonth()]+'/'+date.getFullYear()+' &nbsp&nbsp'+hrs+':'+mins;
    }
})

function recreateTable() {
    if (dataTable___ != undefined) {
        dataTable___.destroy()
    }
    if (dataTable___1 != undefined) {
        dataTable___1.destroy()
    }
    dataTableMultiSort()
    dataTableMultiSortt()
}
