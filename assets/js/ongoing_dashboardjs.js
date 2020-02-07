$("document").ready(function () {
    var selectedFiles = [];
        $(".loading").show();
        var useridd = sessionStorage.getItem("userid");
        var userrole = sessionStorage.getItem("role");
        var dataTable___;
    
        var start_date = ""
        var end_date = ""
    
        // $(".btn3").click(function(){
        //     // $(".displaytoptextboxes").slideToggle('slow');
        // });
    
    
        pageonloadhit()
        function pageonloadhit() {
            obj = {}
            startdate = $('.startdateclass').val();
            enddate = $('.enddateclass').val();
            clientclass = $('.clientclass').val();
            brandclass = $('.brandclass').val();
            Campaignid  = $('.Campaignidclass').val();
            obj.IsDefault = true
            obj.startdate = startdate
            obj.enddate = enddate
            obj.user_id = useridd
            obj.clientclass = clientclass
            obj.brandclass = brandclass
            obj.Campaignid = Campaignid
            console.log(obj);
            var form = new FormData();
            form.append("file", JSON.stringify(obj));
            var settings11 = {
                "async": true,
                "crossDomain": true,
                "url": aws_url+'ongoing_client_request',
                "method": "POST",
                "processData": false,
                "contentType": false,
                "mimeType": "multipart/form-data",
                "data": form
            };
            $.ajax(settings11).done(function (msg) {
                $(".loading").hide();
    
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
                    data = msg.Client
                    recordss = msg.records
                    console.log(recordss);
                    displaytable(recordss);
    
                    $.each(data ,function(key,i){
                        $('#clientt').append('<option value='+key+'>'+key+'</option>')
                    })
                    var $dropdown = $('#clientt');
                    console.log($dropdown);
                    $dropdown.on('change', function() {
                        console.log($dropdown);
                        $('#brandd').empty();
                        // var a=data[$dropdown.val()];
                        var a=data[$.trim($dropdown[0].selectedOptions[0].text)];
                        $.each(a,function(j){
                            console.log(a[j]);
                            $('#brandd').append('<option value='+a[j]+'>'+a[j]+'</option>')
                        })
                    });
                    $dropdown.trigger('change');
    
                }
    
            })
        }
    
        // $("body").on("click", ".gobtn", function(){
        //     objj = {}
        //     startdate = $('.startdateclass').val();
        //     enddate = $('.enddateclass').val();
        //     clientclass = $('.clientclass').val();
        //     brandclass = $('.brandclass').val();
        //     Campaignid  = $('.Campaignidclass').val();
        //     objj.startdate =startdate;
        //     objj.enddate =enddate;
        //     objj.clientclass = clientclass
        //     objj.brandclass = brandclass
        //     objj.Campaignid = Campaignid
        //     objj.IsDefault = false
        //     objj.user_id = useridd
        //     if (startdate!='' && enddate!='' || clientclass!='' || brandclass!='' || Campaignid!='') {
        //         if(startdate <= enddate){
        //             console.log(objj);
        //             var form = new FormData();
        //             form.append("file", JSON.stringify(objj));
        //             var settings11 = {
        //                 "async": true,
        //                 "crossDomain": true,
        //                 "url": aws_url+'ongoing_gobutton',
        //                 "method": "POST",
        //                 "processData": false,
        //                 "contentType": false,
        //                 "mimeType": "multipart/form-data",
        //                 "data": form
        //             };
        //             $.ajax(settings11).done(function (msg) {
        //                 msg = JSON.parse(msg);
        //                 if(msg.message == "fail"){
        //                     $.alert({
        //                         title: 'Error',
        //                         content: 'Oops ! something went wrong, try again',
        //                         animation: 'scale',
        //                         closeAnimation: 'scale',
        //                         opacity: 0.5,
        //                         buttons: {
        //                             okay: {
        //                                 text: 'Okay',
        //                                 btnClass: 'btn-primary',
        //                                 action: function(){
        //                                     window.location.href="error.php"
        //                                 }
        //                             }
        //                         }
        //                     });
        //                 }
        //                 else {
        //                     displaytable(msg);
        //                     console.log(msg);
    
        //                 }
        //             })
    
        //         }
        //         else {
        //             $.alert({
        //                 title: 'Error',
        //                 content: 'Please enter the valid dates'
        //             });
        //         }
        //     }
        //     else {
        //         $.alert({
        //             title: 'Error',
        //             content: 'please select anyone value for search'
        //         });
        //     }
    
    
        // })
    
    
    
         
        
        var start = moment().subtract(29, 'days');
        var end = moment();
        $('input[name="daterange"]').daterangepicker({
            maxDate: moment(),
            autoUpdateInput: false,
            opens: 'left',
            ranges: {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            },
            locale: {
                cancelLabel: 'Clear'
            }
        });
        
        $('input[name="daterange"]').on('apply.daterangepicker', function (ev, picker) {
            $(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
            start_date = picker.startDate.format('YYYY-MM-DD')
            end_date = picker.endDate.format('YYYY-MM-DD')
        });
    
        $('input[name="daterange"]').on('cancel.daterangepicker', function (ev, picker) {
            $(this).val('');
        });
        
        $("body").on("click", ".gobtn", function(){
         debugger;
           
            objj = {}
             
    
            
            clientclass = $('.clientclass').val();
            brandclass = $('.brandclass').val();
            Campaignid  = $('.Campaignidclass').val();
            objj.startdate =start_date;
            objj.enddate =end_date;
            objj.clientclass = clientclass
            objj.brandclass = brandclass
            objj.Campaignid = Campaignid
            objj.IsDefault = false
            objj.user_id = useridd
            console.log(objj);
            if (start!='' && end!='' || clientclass!='' || brandclass!='' || Campaignid!='') {
                if(start <= end){
                    console.log(objj);
                    var form = new FormData();
                    form.append("file", JSON.stringify(objj));
                    var settings11 = {
                        "async": true,
                        "crossDomain": true,
                        "url": aws_url+'ongoing_gobutton',
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
                            displaytable(msg);
                            console.log(msg);
    
                        }
                    })
    
                }
                else {
                    $.alert({
                        title: 'Error',
                        content: 'Please enter the valid dates'
                    });
                }
            }
            else {
                $.alert({
                    title: 'Error',
                    content: 'please select anyone value for search'
                });
            }
        })
    
    
        function displaytable(msg) {
            if (dataTable___ != undefined) {
                dataTable___.clear();
                dataTable___.destroy()
            }
            row = ''
            $(".loading").hide();
            for (var i = 0; i < msg.length; i++) {
                block = msg[i];
                row += '<tr>';
                row += '<td>'+(i+1)+'</td>'
                row += '<td class="nr"><a key="'+i+'" style="text-decoration:underline; cursor:pointer;" plainidattr="'+block.PlanId+'" id="camp_idhyperlink_" acceleratorpathbyrpa = "'+block.AcceleratorFilePathByRPA+'" status= "'+block.PlanStatus+'">'+block.CampaignId+'</a></td>';
                row += '<td>'+block.BrandName+' </td>';
                row += '<td>'+block.ClientName+'</td>';
                row += '<td style="width:120px;">'+block.PlannerName+'</td>';
                row += '<td style="width :135px;">'+format_date(block.StartDate)+'</td>';
    
                if (userrole!= 'Planner') {
                    if (block.IsPrioritized == false) {
                        row += '<td><div  style="background:none;border:none;text-align:center" plainidattr="'+block.PlanId+'"  class="Prioritizebtn"><img class="idimg" src="assets/images/WhiteIcons/list.png" style="width:23px;"></div></td>';
                    // row += '<td> <div  plainidattr="'+v[i]['PlanId']+'"  class="form-control completebtn" style="background:none;border:none;text-align:center"><img class="idimg" src="assets/images/WhiteIcons/normal_check.png" style="width:27px;"></div> </td>'
                        
                    }
                    else {
                        row += '<td  style="color:#2ed573;font-weight:600" plainidattr="'+block.PlanId+'">Prioritized</td>';
                    }
                }
                row += '<td style=""><div class="downloadbtn pointer"  campId="'+block.CampaignId+'" plainidattr="'+block.PlanId+'" style=""><img src="assets/images/WhiteIcons/download.png" style="width:27px;"></button></td>';
    
                row += '</tr>';
            }
            $(".displaytabledata").html(row)
            dataTableMultiSort()
        }
    
    
    
    
        function dataTableMultiSort() {
    
            setTimeout(function () {
                dataTable___ = $('.datatable-multi-sorting').DataTable({
    
                    columnDefs: [{
                        targets: [0],
                        orderData: [0, 1]
                    }, {
                        targets: [1],
                        orderData: [1, 0]
                    }, {
                        targets: [4],
                        orderData: [4, 0]
                    }, {
                        orderable: false,
                        width: '100px',
                        targets: [0, 1, 4, 6]
                    }]
                });
            }, 0);
        }
    
    
        $("body").on("click", "#camp_idhyperlink_", function(){
            plainiddd =  $(this).attr('plainidattr');
            sessionStorage.setItem('create_plan_id', plainiddd);
            acceleratorpathbyrpaa = $(this).attr('acceleratorpathbyrpa');
            // alert(plainiddd)
            window.location.href = 'planner_createnewplan.php?planid='+plainiddd;
    
            newstatus = $(this).attr('status');
            if (newstatus == 1) {
                window.location.href = 'planner_createnewplan.php?planid='+plainiddd;
            }
            else if (newstatus == 2 || (newstatus == 3 && acceleratorpathbyrpaa == 'null')) {
                window.location.href = 'buyingbasket.php?planid='+plainiddd;
            }
            else {
                window.location.href = 'barc.php?planid='+plainiddd;
            }
        });
    
    
    
        $("body").on("click",".Prioritizebtn",function() {
            plainiddd =  $(this).attr('plainidattr');
            swal({
                title: "Are you sure",
                text: "you want to Prioritize?",
                icon: "warning",
                 buttons: ["CANCEL", "OK"],
                dangerMode: true,
            })
            .then((willDelete) => {
                if (willDelete) {
                    objjj = {}
                    objjj.user_id = useridd
                    objjj.plainid = plainiddd
                    objjj.startdate =$('.startdateclass').val();
                    objjj.enddate = $('.enddateclass').val();
                    objjj.clientclass =$('.clientclass').val();
                    objjj.brandclass =$('.brandclass').val();
                    objjj.Campaignid = $('.Campaignidclass').val();
                    console.log(objjj)
                    var form = new FormData();
                    form.append("file", JSON.stringify(objjj));
                    var settings11 = {
                        "async": true,
                        "crossDomain": true,
                        "url": aws_url+'ongoing_prioritize_button_1',
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
                            $.alert({
                                title: 'Success',
                                content: 'Updated Succesfully'
                            });
                            displaytable(msg);
                        }
                    })
                }
            });
            $('.swal-button--cancel').parent().addClass('cancelclass')
            $('.swal-button--danger').parent().addClass('okclass')
        })
    
        $("body").on("click",".Prioritizebtn11",function() {
            debugger;
            plainiddd =  $(this).attr('plainidattr');
            swal({
                title: "Are you sure you want  to Prioritize?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((willDelete) => {
                if (willDelete) {
                    objjj = {}
                    objjj.user_id = useridd
                    objjj.plainid = plainiddd
                    objjj.startdate =$('.startdateclass').val();
                    objjj.enddate = $('.enddateclass').val();
                    objjj.clientclass =$('.clientclass').val();
                    objjj.brandclass =$('.brandclass').val();
                    objjj.Campaignid = $('.Campaignidclass').val();
                    console.log(objjj)
                    var form = new FormData();
                    form.append("file", JSON.stringify(objjj));
                    var settings11 = {
                        "async": true,
                        "crossDomain": true,
                        "url": aws_url+'ongoing_prioritize_button_1',
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
                            $.alert({
                                title: 'Success',
                                content: 'Updated Succesfully'
                            });
                            displaytable(msg);
    
                        }
                    })
                }
            });
        })
    
        var all_files_;
        var global_campId;
        $("body").on("click", ".downloadbtn", function(){
    
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
                filesData = JSON.parse(msg);
                console.log(msg);
                console.log(filesData);
                console.log(jQuery.isEmptyObject(filesData));
                if(filesData.message=="fail"){
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
                else if (jQuery.isEmptyObject(filesData)) {
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
                        // console.log(keys[i]);
                        // $('.row_body').append('<div class="col-sm-3"><div class="fileClick pointer" file_camid="'+global_campId+'" title="'+keys[i]+'"><span>'+keys[i]+'</span></div></div>');
                        $('.row_body').append('<div style="color:white;" class="col-sm-12 oddevencolors"><label class="container">'+keys[i]+'<input class="fileClick pointer styled-checkbox"  name="checkbox" file_camid="'+global_campId+'" title="'+keys[i]+'" type="checkbox"  value="'+keys[i]+'" ><span class="checkmark"></span></label></div><br>');
    
                        // $('.row_body').append('<div style="color:white;" class="col-sm-12 oddevencolors"><input class="fileClick pointer styled-checkbox"  name="checkbox" file_camid="'+global_campId+'" title="'+keys[i]+'" type="checkbox"  value="'+keys[i]+'"> '+keys[i]+'</div><br>');
                   }
                   $('.row_body').append('<button style="color:white;" this_campid='+global_campId+' type="button" class="downloadAll">Download </button>')
    
                }
    
            })
    
        })
        var key;
        $('.downloadAll').prop('disabled', true)
        $("body").on("click", ".fileClick", function () {
            debugger
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
             $('input[name=checkbox]').prop('checked', true)
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
             $('input[name=checkbox]').prop('checked', false)
        })
    
        $('body').on('click', '.downloadAll', function(){
            sendObj={};
            console.log(selectedFiles.length);
    
            console.log(sendObj);
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
                    result = key
                    console.log(msg);
                    if(msg.message == "fail"){
                        $.alert({
                            title: 'Error',
                            content: 'Oops ! something went wrong, try again'
                        });
                    }else {
                        // console.log(JSON.parse(msg))
                        msg_obj = msg
                        var blob = new Blob([s2ab(atob(encodeURI(msg_obj)))], {
                            type: 'octet/stream'
                        });
    
                        href = URL.createObjectURL(blob);
                        var a = document.createElement("a");
                        a.href = href;
                        a.download = result;
                        document.body.appendChild(a);
                        a.click();
                        $.alert({
                            title: 'Success',
                            content: 'Excel sheet downloaded Successfully'
                        });
                    }
                    // setInterval(function () {
                    //     location.reload();
                    // }, 1000);
    
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
                            content: 'Oops ! something went wrong, try again'
                        });
                    }
                    else {
                        result = result+'.zip'
                        // file_name = msg.file_name;
                        var bin = atob(msg);
                        var ab = s2ab(bin); // from example above
                        var blob = new Blob([ab], { type: 'octet/stream' });
    
                        var link = document.createElement('a');
                        link.href = window.URL.createObjectURL(blob);
                        link.download = result
                        ;
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
                console.log(msg);
                if(msg.message == "fail"){
                    $.alert({
                        title: 'Error',
                        content: 'Oops ! something went wrong, try again'
                    });
                }
                else {
    
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
                result = result+'.zip'
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
                        content: 'Oops ! something went wrong, try again'
                    });
                }
                else {
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
    
                    $.alert({
                        title: 'Success',
                        content: 'Uploaded succesfully'
                    });
    
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
    
    
        // =====================
    
    
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
        dataTableMultiSort()
    }