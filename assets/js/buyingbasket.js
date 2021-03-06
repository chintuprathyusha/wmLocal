
$(document).ready(function () {
    var plan_id = $.urlParam('planid');
    var userid = sessionStorage.getItem('userid');
    $('.loading').show();
    // all upload buttons disabled
    $('#upl-btn').prop('disabled', true);
    $('#upl-btn1').prop('disabled', true);
    $('#upl-btn__').prop('disabled', true);
    $('.radio_class').hide();
    $('.budget_div_').hide();
    $('.cprp_div').hide();

    $('.spillover').hide();
    $('.budgetdivnew').hide();
    $('.texttodisplayspill').hide();

    $('.next_').prop('disabled', true);


    $(".budget_main").css("background-color", "#292828");
    $(".cprp_main").css("background-color", "#F07144");


    $('.changediv').hide();


    var version_downloadfile;

    $('.spillovertexttodisplay').hide()
    $('.forfirstpathtext').hide()
    $('.forsecoundpathtext').hide()
    $('.channelbeing').hide();
    $('.acceleratorfiletext').hide();

    var newcampaign_id;
    var buyingbasket_filename;
    var plancompleted;
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
    var widthofscreen = $(window).width()

    var paramgoback = $.urlParam('goback');
    var parangonext = $.urlParam('gonext');

    var markascompleted;
    var channel_cprp;
    var channel_frequency;
    var acceleratedFilePath;
    var i;
    var campaignName;
    var acceleratedFilePathByRPA;
    getData();

    $("#uploadFileTrigger").on("click", function () {
    
        $('#load-file').click()
    })

    $("body").on("click", ".deleteFile", function () {
        $(this).closest('.buyingFileNameDisplay').remove();
        $('.hide_').hide();
    })
    
    $('#load-file').on('change', function () {
      
        
        main_output = ''
        var file = $(this)[0].files[0];
        file_name_new = file.name;
        // file_name_new = "Buying Basket_" + version_downloadfile + ".xlsx"
        console.log(file, file_name_new);
        $(".buyingFileNameDisplay").html('<p class="mr-b-0 mr-l-20 pd-l-20" style="border-left: 3px solid #fff">'+file_name_new+' <img src="assets/images/delete.svg" style="width:15px;" class="deleteFile"></p>')

        var fileReader = new FileReader();
        fileReader.onloadend = function (e) {
            blob___ = e.target.result;
            fileobj_new = {}

            fileobj_new.filename = file_name_new;

            fileobj_new.blob = blob___;
            fileobj_new.plan_id = plan_id;
            fileobj_new.user_id = userid;
            console.log(fileobj_new);

            $(".loading").show();
            fileobj_new.category = "buyingbasket"
            console.log(file_name_new);
            var form = new FormData();
            form.append("file", JSON.stringify(fileobj_new));
            var settings11 = {
                "async": true,
                "crossDomain": true,
                "url": aws_url + 'Buying_basket',
                "method": "POST",
                "processData": false,
                "contentType": false,
                "mimeType": "multipart/form-data",
                "data": form
            };
            $.ajax(settings11).done(function (msg) {
                $('.radio_class').hide();
                msg = JSON.parse(msg);
                console.log(msg.file_name);
                console.log(msg.status);
                // $.each(msg, function( key, value ) {
                    // console.log(key);
                // })
                
                $('.loading').show();
                if (msg.status == true) {
                    $('.radio_class').show();
                    if (path_selection == 2) {  
                        $('.cprp_div').hide();
                        $('.budget_div_').show();
                        $('.radio_class').show();
                    } else {

                        $('.cprp_div').show();

                        $('.budget_div_').hide();
                        $('.radio_class').show();
                    }
                    $('.radio_class').show();
                    $('.texttodisplay').show();
                    $('.file-input').hide();
                    $('.red_color').hide();
                    $('#upl-btn').hide();
                    // $('.cprp_div').show(); 
                    $('.uploadFileTrigger').hide();
                    $('.buyingFileNameDisplay').hide();
                    $('.bb_txt').hide();
                    $('.bb_files').html('<p>'+msg.file_name +'</p>')
                    // $('.texttodisplay').append('<h5 style="color:#fff">Buying basket file is succesfully uploaded</h5>')
                  
                
                
                } else if (msg.status == false) {
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
                $('.loading').hide();
                // $('.radio_class').show();
                // $('#upl-btn').hide();
                // $('.cprp_div').show();
            });
        };




        fileReader.readAsDataURL(file);
    });


   

    editdisperionlablesFirst("", "");
    editdisperionlables1First("", "")

    function editdisperionlablesFirst(key, val) {
        var class_ = $(".editView__Check").length;
        editDispersionHtml = ''
        if (widthofscreen <= 680) {
            editDispersionHtml += '<div class="row edit_disp kav sub_div">'
            editDispersionHtml += '    <div class="col-lg-6 col-md-6 col-xs-6">'
            editDispersionHtml += '        <h6 class="font-weight-semibold">Edit<span class="appendaveragecommer"></span></h6>'
            editDispersionHtml += '        <input type="number" name="number" min="0" max="200" onKeyUp="if(this.value>200){this.value=200;}else if(this.value<0){this.value=0;}" class="kav edit__class inputboxstyle  form-control mods_inputs name name_Class 0 editView__Check editView__Check' + class_ + '" placeholder="Enter the duration in seconds" value="' + key + '">'
            editDispersionHtml += '    </div>'
            editDispersionHtml += '    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 position">'
            editDispersionHtml += '        <h6 class="font-weight-semibold">Dispersion <span class="appenddispers"></span></h6>'
            editDispersionHtml += '        <input class="kav dispersion__class inputboxstyle form-control mods_inputs path path_Class 0 desView__Check desView__Check' + class_ + '" type="number" name="number" min="1" max="99" placeholder="Enter dispersion in percentage" value="' + val + '">'
            editDispersionHtml += '    </div>'
            editDispersionHtml += '</div>'
        } else {
            editDispersionHtml += '<div class="row edit_disp kav">'
            editDispersionHtml += '    <div class="col-lg-6 col-md-6 col-xs-6">'
            editDispersionHtml += '        <h6 class="font-weight-semibold">Edit<span class="appendaveragecommer"></span></h6></div>'
            editDispersionHtml += '    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 position">'
            editDispersionHtml += '        <h6 class="font-weight-semibold">Dispersion <span class="appenddispers"></span></h6></div>'
            editDispersionHtml += '</div>'
            editDispersionHtml += '<div class="genreLevelEditDispersion">'
            editDispersionHtml += '    <div class="main sub_div">'
            editDispersionHtml += '        <div class="row keyword row3">'
            editDispersionHtml += '            <div class="col-md-6 mr-b-10 pd-l-10 pd-r-10 appendobjvalinacd edit_res_class">'
            editDispersionHtml += '                <input type="number" name="number" min="0" max="200" onKeyUp="if(this.value>200){this.value=200;}else if(this.value<0){this.value=0;}" class="kav edit__class inputboxstyle  form-control mods_inputs name name_Class 0 editView__Check editView__Check' + class_ + '" placeholder="Enter the duration in seconds" value="' + key + '">'
            editDispersionHtml += '            </div>'
            editDispersionHtml += '            <div class="col-md-6 mr-b-10 pd-l-10 pd-r-10 appendobjvalindispersion dispersion_res_class">'
            editDispersionHtml += '                <input class="kav dispersion__class inputboxstyle form-control mods_inputs path path_Class 0 desView__Check desView__Check' + class_ + '" type="number" name="number" min="1" max="99" placeholder="Enter dispersion in percentage" value="' + val + '">'
            editDispersionHtml += '            </div>'
            editDispersionHtml += '        </div>'
            editDispersionHtml += '    </div>'
            editDispersionHtml += '</div>'


        }
        $(".editDispersionDisplay").html(editDispersionHtml)

    }

    function editdisperionlables1First(key, val) {
        var class_1 = $(".editView__Check1").length;
        editDispersionHtml1 = ''
        if (widthofscreen <= 680) {
            editDispersionHtml1 += '<div class="row edit_disp kav sub_div_new">'
            editDispersionHtml1 += '    <div class="col-lg-6 col-md-6 col-xs-6">'
            editDispersionHtml1 += '        <h6 class="font-weight-semibold">Edit<span class="appendaveragecommer"></span></h6>'
            editDispersionHtml1 += '        <input type="text" name="number" min="0" max="200" onKeyUp="if(this.value>200){this.value=200;}else if(this.value<0){this.value=0;}" class="kav edit__class inputboxstyle  form-control mods_inputs name_new name_Class_new 0 editView__Check1 editView__Check1' + class_1 + '" placeholder="Enter the duration in seconds" value="' + key + '">'
            editDispersionHtml1 += '    </div>'
            editDispersionHtml1 += '    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 position">'
            editDispersionHtml1 += '        <h6 class="font-weight-semibold">Dispersion <span class="appenddispers"></span></h6>'
            editDispersionHtml1 += '        <input class="kav dispersion__class inputboxstyle form-control mods_inputs path_new path_Class_new 0 desView__Check1 desView__Check1' + class_1 + '" type="number" name="number" min="1" max="99" placeholder="Enter dispersion in percentage" value="' + val + '">'
            editDispersionHtml1 += '    </div>'
            editDispersionHtml1 += '</div>'
        } else {
            editDispersionHtml1 += '<div class="row edit_disp">'
            editDispersionHtml1 += '    <div class="col-lg-6 col-md-6 col-xs-6">'
            editDispersionHtml1 += '        <h6 class="font-weight-semibold">Edit <span class="appendaveragecommer"></span></h6></div>'
            editDispersionHtml1 += '    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 position">'
            editDispersionHtml1 += '        <h6 class="font-weight-semibold">Dispersion <span class="appenddispers"></span></h6></div>'
            editDispersionHtml1 += '</div>'
            editDispersionHtml1 += '<div class="channelLevelEditDispersion">'
            editDispersionHtml1 += '    <div class="main sub_div_new">'
            editDispersionHtml1 += '        <div class="row keyword row3">'
            editDispersionHtml1 += '            <div class="col-md-6 mr-b-10 pd-l-10 pd-r-10 appendobjvalinacd edit_res_class">'
            editDispersionHtml1 += '                <input type="number" name="number" min="0" max="200" onKeyUp="if(this.value>200){this.value=200;}else if(this.value<0){this.value=0;}" class="kav edit__class inputboxstyle  form-control mods_inputs name_new name_Class_new 0 editView__Check1 editView__Check1' + class_1 + '" placeholder="Enter the duration in seconds" value="' + key + '">'
            editDispersionHtml1 += '            </div>'
            editDispersionHtml1 += '            <div class="col-md-6 mr-b-10 pd-l-10 pd-r-10 appendobjvalindispersion dispersion_res_class">'
            editDispersionHtml1 += '                <input class="kav dispersion__class inputboxstyle form-control mods_inputs path_new path_Class_new 0 desView__Check1 desView__Check1' + class_1 + '" type="number" name="number" min="1" max="99" placeholder="Enter dispersion in percentage" value="' + val + '">'
            editDispersionHtml1 += '            </div>'
            editDispersionHtml1 += '        </div>'
            editDispersionHtml1 += '    </div>'
            editDispersionHtml1 += '</div>'

        }

        $(".editDispersionDisplay1").html(editDispersionHtml1)
    }

    function editdisperionlables(key, val) {
        var class_ = $(".editView__Check").length;
        if (widthofscreen <= 680) {
            editDispersionHtmlAppend = '<div class="row edit_disp kav sub_div">'
            editDispersionHtmlAppend += '    <div class="col-lg-6 col-md-6 col-xs-6">'
            editDispersionHtmlAppend += '        <h6 class="font-weight-semibold">Edit<span class="appendaveragecommer"></span></h6>'
            editDispersionHtmlAppend += '        <input type="number" name="number" min="0" max="200" onKeyUp="if(this.value>200){this.value=200;}else if(this.value<0){this.value=0;}" class="kav edit__class inputboxstyle  form-control mods_inputs name name_Class 0 editView__Check editView__Check' + class_ + '" placeholder="Enter the duration in seconds" value="' + key + '">'
            editDispersionHtmlAppend += '    </div>'
            editDispersionHtmlAppend += '    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 position">'
            editDispersionHtmlAppend += '        <h6 class="font-weight-semibold">Dispersion <span class="appenddispers"></span></h6>'
            editDispersionHtmlAppend += '        <input class="kav dispersion__class inputboxstyle form-control mods_inputs path path_Class 0 desView__Check desView__Check' + class_ + '" type="number" name="number" min="1" max="99" placeholder="Enter dispersion in percentage" value="' + val + '">'
            if (key === "" && val === "") {
                editDispersionHtmlAppend += '<img src="assets/images/delete.svg" style="width:20px;" class="remove"></img>'
            }
            editDispersionHtmlAppend += '    </div>'
            editDispersionHtmlAppend += '</div>'

            $(".editDispersionDisplay").append(editDispersionHtmlAppend)

        } else {
            editDispersionHtmlAppend = '<div class="main sub_div">'
            editDispersionHtmlAppend += '   <div class="row keyword row3">'
            editDispersionHtmlAppend += '        <div class="col-md-6 mr-b-10 pd-l-10 pd-r-10 appendobjvalinacd edit_res_class">'
            // editDispersionHtmlAppend += '        <h6 class="font-weight-semibold">Edit<span class="appendaveragecommer"></span></h6>'
            
            editDispersionHtmlAppend += '            <input type="number" name="number" min="0" max="200" onKeyUp="if(this.value>200){this.value=200;}else if(this.value<0){this.value=0;}" class="kav edit__class inputboxstyle  form-control mods_inputs name name_Class 0 editView__Check editView__Check' + class_ + '"   placeholder="Enter the duration in seconds" value="' + key + '">'
            editDispersionHtmlAppend += '        </div>'
            editDispersionHtmlAppend += '        <div class="col-md-6 mr-b-10 pd-l-10 pd-r-10 appendobjvalindispersion dispersion_res_class">'
            // editDispersionHtmlAppend += '        <h6 class="font-weight-semibold">Dispersion <span class="appenddispers"></span></h6>'
           
            editDispersionHtmlAppend += '            <input class="kav dispersion__class inputboxstyle form-control mods_inputs path path_Class 0 desView__Check desView__Check' + class_ + '" type="number" name="number" min="1" max="99" placeholder="Enter dispersion in percentage" value="' + val + '" >'
            if (key === "" && val === "") {
                editDispersionHtmlAppend += '<img src="assets/images/delete.svg" style="width:20px;" class="remove"></img>'
            }
            editDispersionHtmlAppend += '        </div>'
            editDispersionHtmlAppend += '    </div>'
            editDispersionHtmlAppend += '</div>'

            $(".genreLevelEditDispersion").append(editDispersionHtmlAppend)

        }
    }

    function editdisperionlablescopy(key, val) {
        var class_ = $(".editView__Check").length;
        if (widthofscreen <= 680) {
            editDispersionHtmlAppend = '<div class="row edit_disp kav sub_div">'
            editDispersionHtmlAppend += '    <div class="col-lg-6 col-md-6 col-xs-6">'
            editDispersionHtmlAppend += '        <h6 class="font-weight-semibold">Edit<span class="appendaveragecommer"></span></h6>'
            editDispersionHtmlAppend += '        <input type="number" name="number" min="0" max="200" onKeyUp="if(this.value>200){this.value=200;}else if(this.value<0){this.value=0;}" class="kav edit__class inputboxstyle  form-control mods_inputs name name_Class 0 editView__Check editView__Check' + class_ + '" placeholder="Enter the duration in seconds" value="' + key + '">'
            editDispersionHtmlAppend += '    </div>'
            editDispersionHtmlAppend += '    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 position">'
            editDispersionHtmlAppend += '        <h6 class="font-weight-semibold">Dispersion <span class="appenddispers"></span></h6>'
            editDispersionHtmlAppend += '        <input class="kav dispersion__class inputboxstyle form-control mods_inputs path path_Class 0 desView__Check desView__Check' + class_ + '" type="number" name="number" min="1" max="99" placeholder="Enter dispersion in percentage" value="' + val + '">'
            if (key === "" && val === "") {
                editDispersionHtmlAppend += '<img src="assets/images/delete.svg" style="width:20px;" class="remove"></img>'
            }
            editDispersionHtmlAppend += '    </div>'
            editDispersionHtmlAppend += '</div>'

            $(".editDispersionDisplay").append(editDispersionHtmlAppend)

        } else {
            editDispersionHtmlAppend = '<div class="main sub_div">'
            editDispersionHtmlAppend += '   <div class="row keyword row3">'
            editDispersionHtmlAppend += '        <div class="col-md-6 mr-b-10 pd-l-10 pd-r-10 appendobjvalinacd edit_res_class">'
            // editDispersionHtmlAppend += '        <h6 class="font-weight-semibold">Edit<span class="appendaveragecommer"></span></h6>'
            
            editDispersionHtmlAppend += '            <input type="number" name="number" min="0" max="200" onKeyUp="if(this.value>200){this.value=200;}else if(this.value<0){this.value=0;}" class="kav edit__class inputboxstyle  form-control mods_inputs name name_Class 0 editView__Check editView__Check' + class_ + '"  readonly placeholder="Enter the duration in seconds" value="' + key + '">'
            editDispersionHtmlAppend += '        </div>'
            editDispersionHtmlAppend += '        <div class="col-md-6 mr-b-10 pd-l-10 pd-r-10 appendobjvalindispersion dispersion_res_class">'
            // editDispersionHtmlAppend += '        <h6 class="font-weight-semibold">Dispersion <span class="appenddispers"></span></h6>'
           
            editDispersionHtmlAppend += '            <input class="kav dispersion__class inputboxstyle form-control mods_inputs path path_Class 0 desView__Check desView__Check' + class_ + '" type="number" name="number" min="1" max="99" placeholder="Enter dispersion in percentage" value="' + val + '" readonly>'
            if (key === "" && val === "") {
                editDispersionHtmlAppend += '<img src="assets/images/delete.svg" style="width:20px;" class="remove"></img>'
            }
            editDispersionHtmlAppend += '        </div>'
            editDispersionHtmlAppend += '    </div>'
            editDispersionHtmlAppend += '</div>'

            $(".genreLevelEditDispersion").append(editDispersionHtmlAppend)

        }
    }


















    function editdisperionlables1(key, val) {
        var class_1 = $(".editView__Check1").length;

        if (widthofscreen <= 680) {
            editDispersionHtml1Append = '<div class="row edit_disp kav sub_div_new">'
            editDispersionHtml1Append += '    <div class="col-lg-6 col-md-6 col-xs-6">'
            editDispersionHtml1Append += '        <h6 class="font-weight-semibold">Edit<span class="appendaveragecommer"></span></h6>'
            editDispersionHtml1Append += '        <input type="text" name="number" min="0" max="200" onKeyUp="if(this.value>200){this.value=200;}else if(this.value<0){this.value=0;}" class="kav edit__class inputboxstyle  form-control mods_inputs name_new name_Class_new 0 editView__Check1 editView__Check1' + class_1 + '" placeholder="Enter the duration in seconds" value="' + key + '">'
            editDispersionHtml1Append += '    </div>'
            editDispersionHtml1Append += '    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 position">'
            editDispersionHtml1Append += '        <h6 class="font-weight-semibold">Dispersion <span class="appenddispers"></span></h6>'
            editDispersionHtml1Append += '        <input class="kav dispersion__class inputboxstyle form-control mods_inputs path_new path_Class_new 0 desView__Check1 desView__Check1' + class_1 + '" type="number" name="number" min="1" max="99" placeholder="Enter dispersion in percentage" value="' + val + '">'
            if (key === "" && val === "") {
                editDispersionHtml1Append += '<img src="assets/images/delete.svg" style="width:20px;" class="remove_new"></img>'
            }
            editDispersionHtml1Append += '    </div>'
            editDispersionHtml1Append += '</div>'

            $(".editDispersionDisplay1").html(editDispersionHtml1Append)

        } else {
            editDispersionHtml1Append = '<div class="main sub_div_new">'
            editDispersionHtml1Append += '    <div class="row keyword row3">'
            editDispersionHtml1Append += '        <div class="col-md-6 mr-b-10 pd-l-10 pd-r-10 appendobjvalinacd edit_res_class">'
            editDispersionHtml1Append += '            <input  type="number" name="number" min="0" max="200" onKeyUp="if(this.value>200){this.value=200;}else if(this.value<0){this.value=0;}" class="kav edit__class inputboxstyle  form-control mods_inputs name_new name_Class_new 0 editView__Check1 editView__Check1' + class_1 + '" placeholder="Enter the duration in seconds" value="' + key + '">'
            editDispersionHtml1Append += '        </div>'
            editDispersionHtml1Append += '        <div class="col-md-6 mr-b-10 pd-l-10 pd-r-10 appendobjvalindispersion dispersion_res_class">'
            editDispersionHtml1Append += '            <input   class="kav dispersion__class inputboxstyle form-control mods_inputs path_new path_Class_new 0 desView__Check1 desView__Check1' + class_1 + '" type="number" name="number" min="1" max="99" placeholder="Enter dispersion in percentage" value="' + val + '">'
            if (key === "" && val === "") {
                editDispersionHtml1Append += '<img src="assets/images/delete.svg" style="width:20px;" class="remove_new"></img>'
            }
            editDispersionHtml1Append += '        </div>'
            editDispersionHtml1Append += '    </div>'
            editDispersionHtml1Append += '</div>'
            $(".channelLevelEditDispersion").append(editDispersionHtml1Append)
        }

    }


    function editdisperionlables1copy(key, val) {
        var class_1 = $(".editView__Check1").length;

        if (widthofscreen <= 680) {
            editDispersionHtml1Append = '<div class="row edit_disp kav sub_div_new">'
            editDispersionHtml1Append += '    <div class="col-lg-6 col-md-6 col-xs-6">'
            editDispersionHtml1Append += '        <h6 class="font-weight-semibold">Edit<span class="appendaveragecommer"></span></h6>'
            editDispersionHtml1Append += '        <input type="text" name="number" min="0" max="200" onKeyUp="if(this.value>200){this.value=200;}else if(this.value<0){this.value=0;}" class="kav edit__class inputboxstyle  form-control mods_inputs name_new name_Class_new 0 editView__Check1 editView__Check1' + class_1 + '" placeholder="Enter the duration in seconds" value="' + key + '">'
            editDispersionHtml1Append += '    </div>'
            editDispersionHtml1Append += '    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 position">'
            editDispersionHtml1Append += '        <h6 class="font-weight-semibold">Dispersion <span class="appenddispers"></span></h6>'
            editDispersionHtml1Append += '        <input class="kav dispersion__class inputboxstyle form-control mods_inputs path_new path_Class_new 0 desView__Check1 desView__Check1' + class_1 + '" type="number" name="number" min="1" max="99" placeholder="Enter dispersion in percentage" value="' + val + '">'
            if (key === "" && val === "") {
                editDispersionHtml1Append += '<img src="assets/images/delete.svg" style="width:20px;" class="remove_new"></img>'
            }
            editDispersionHtml1Append += '    </div>'
            editDispersionHtml1Append += '</div>'

            $(".editDispersionDisplay1").html(editDispersionHtml1Append)

        } else {
            editDispersionHtml1Append = '<div class="main sub_div_new">'
            editDispersionHtml1Append += '    <div class="row keyword row3">'
            editDispersionHtml1Append += '        <div class="col-md-6 mr-b-10 pd-l-10 pd-r-10 appendobjvalinacd edit_res_class">'
            editDispersionHtml1Append += '            <input readonly type="number" name="number" min="0" max="200" onKeyUp="if(this.value>200){this.value=200;}else if(this.value<0){this.value=0;}" class="kav edit__class inputboxstyle  form-control mods_inputs name_new name_Class_new 0 editView__Check1 editView__Check1' + class_1 + '" placeholder="Enter the duration in seconds" value="' + key + '">'
            editDispersionHtml1Append += '        </div>'
            editDispersionHtml1Append += '        <div class="col-md-6 mr-b-10 pd-l-10 pd-r-10 appendobjvalindispersion dispersion_res_class">'
            editDispersionHtml1Append += '            <input  readonly class="kav dispersion__class inputboxstyle form-control mods_inputs path_new path_Class_new 0 desView__Check1 desView__Check1' + class_1 + '" type="number" name="number" min="1" max="99" placeholder="Enter dispersion in percentage" value="' + val + '">'
            if (key === "" && val === "") {
                editDispersionHtml1Append += '<img src="assets/images/delete.svg" style="width:20px;" class="remove_new"></img>'
            }
            editDispersionHtml1Append += '        </div>'
            editDispersionHtml1Append += '    </div>'
            editDispersionHtml1Append += '</div>'
            $(".channelLevelEditDispersion").append(editDispersionHtml1Append)
        }

    }

    $.ajax({
        url: "configfile.json",
        method: "GET",
        dataType: 'json',
        async: false,
        success: function (data) {
            msg = data;
            console.log(data);
            genre_levellabel = msg.data[0].genre_level_label
            channel_levellabel = msg.data[0].channel_level_label
            genre_uploadlabel = msg.data[0].genre_upload_label
            console.log(typeof genre_level_label);
        },
        error: function () {
            alert("Error")
        }
    });



  // .......................getdata function...........


    function getData() {
      
       
        sendObj = {}
        sendObj.planid = plan_id;
        console.log(sendObj);
        var form = new FormData();
        form.append("file", JSON.stringify(sendObj));
        var settings11 = {
            "async": true,
            "crossDomain": true,
            "url": aws_url + 'buying_basket_freeze_1',
            "method": "POST",
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
            "data": form
        };
        $.ajax(settings11).done(function (msg) {
            msg = JSON.parse(msg)
            plancompleted = msg.IsPlanCompleted;
            acceleratedFilePathByRPA = msg.AcceleratedFilePathByRPA;
            PlanProcessed = msg.planProcessed;
            plancompleted = msg.IsPlanCompleted;
            newcampaign_id = ""
            console.log(msg);

            version_downloadfile = msg.Version
            process2ETA = msg.Process2ETA
            $('.loading').hide();
            if ((plancompleted == true) || (acceleratedFilePathByRPA != null && PlanProcessed >= 3)) {
                $(".next_").prop('disabled', false);
                $("#uploadFileTrigger").prop("disabled",true);
            } else {
                $(".next_").prop('disabled', true);
            }

            if (acceleratedFilePathByRPA != null && PlanProcessed >= 3) {
                $("#uploadFileTrigger").prop("disabled",true);
            }

            if (plancompleted == true) {
                $('#uploadFileTrigger').prop('disabled', true);
                $('.add_more').prop('disabled', true);
                $('.submit_').prop('disabled', true);
            }


            if (msg.data == "true") {
                plancompleted = msg.IsPlanCompleted;
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
                process2ETA = msg.Process2ETA;
                process3ETA = msg.Process3ETA;


                if (process2ETA == 'None') {
                    $('.forsecoundpathtext').append('' + channel_levellabel + ' None');
                } else {
                    $('.forsecoundpathtext').append('' + channel_levellabel + ' : ' + format_date(process2ETA) + '');

                }

                $(".camp_id_").html('<input class="form-control" placeholder="Campaign Name" type="text" value="' + campaignName + '" readonly style="background:#1f2022;color:#fff/>')
                if (version > 1) {
                    replan = true;
                    if (plancompleted == true || (buyingbasket_filename != '' && buyingbasket_filename != null)) {
                        $('.bb_files').html('<p>' + buyingbasket_filename + '</p>')
                        $('#upl-btn').show();
                    } else {
                        $('#upl-btn').show();
                    }

                }

                $('cprp_div').show();
                if (path_selection == 1) {
                    $('.changediv').html('<h6 style="display:inline-block" class="font-weight-semibold textforchange">Upload spillover sheet :</h6>')
                    $('.spanClass').css('color', '#0de6f1');
                    $(".spanClass").css('font-weight', '700')
                    $(".spanClass").css('font-size', '22px')
                    $('.spanClass_').css('font-weight', '400')
                    $('.spanClass_').css('font-size', '14px')
                } else {
                    $('.spanClass_').css('color', '#0de6f1');
                    $(".spanClass_").css('font-weight', '700')
                    $(".spanClass_").css('font-size', '22px')
                    $('.spanClass').css('font-weight', '400')
                    $('.spanClass').css('font-size', '14px')
                    $('.changediv').html('<h6 class="font-weight-semibold textforchange" style="display:inline-block">Upload Budget File:</h6>')
                }
                console.log(buyingbasket_filename);

                //alert(buyingbasket_filename)
                if (PlanProcessed == 1 && (buyingbasket_filename == '' || buyingbasket_filename == null)) {
                    unfreezebuyinginfo();
                } else if (PlanProcessed == 1 && buyingbasket_filename != '') {
                    unfreezebuyinginfo();

                } else if (PlanProcessed == 2) {
                    $('.acceleratorfiletext').hide();
                    freezebuyinginfo();


                    if (plancompleted == true) {
                        
                        $('#uploadFileTrigger2').prop('disabled', true);
                        $(".next_").prop('disabled', false);
                    } else {
                        $(".next_").prop('disabled', true);
                    }
                    $('.add_more').prop('disabled', true);
                    $('.submit_').prop('disabled', true);
                    $('.cprp_main').prop('disabled', true);
                    $('.budget_main').prop('disabled', true);
                    if (isFilePrepCompleted == "false") {
                        $('.spillover').hide();
                        $('.changediv').show();
                        if (plancompleted == true) {
                            $(".next_").prop('disabled', false);
                        } else {

                            $(".next_").prop('disabled', true);
                        }
                    } else {
                        $('.channelbeing').hide();
                        if (path_selection == 1) {
                         
                            if (spilloversheet_filename == '' || spilloversheet_filename == null) {
                                $('.spillover').show();
                                $('.budegtdivnew').hide();
                                $('.changediv').hide();
                                $('.channelbeing').hide();
                            } else {
                                $('.spillll').hide();
                                $('.ss_files').append('<p>' + spilloversheet_filename + '</p>')
                                if (plancompleted == true) {
                                   
                                    $(".next_").prop('disabled', false);
                                } else {

                                    $(".next_").prop('disabled', true);
                                }
                            }
                        } else {
                            if (budgetallocation_filename == '' || budgetallocation_filename == null) {
                                $('.budgetdivnew').show();
                                $('.spillover').hide();
                                $('.changediv__').hide();
                                $('.channelbeing').hide();
                                $('.budget_text').hide();

                            } else {
                                $('.budget_text').show();
                                $('.budget_files').hide();
                                $('.budget_text').append('<h5>' + budgetallocation_filename + '</h5>')
                                if (plancompleted == true) {

                                    $(".next_").prop('disabled', false);
                                } else {

                                    $(".next_").prop('disabled', true);
                                }
                            }
                        }
                    }
                } else {
                    freezebuyinginfo();
                    if (path_selection == 1) {
                        if (acceleratedFilePathByRPA == null) {

                            if (plancompleted == true) {
                                $(".next_").prop('disabled', false);
                            } else {
                                $(".next_").prop('disabled', true);
                                $('.acceleratorfiletext').show();
                            }

                            if (process3ETA == "None") {
                                $('.acceleratorfiletext').append('<h5> ' + genre_uploadlabel + '  none </h5>')
                            } else {
                                $('.acceleratorfiletext').append('<h5> ' + genre_uploadlabel + ' ' + format_date(process3ETA) + ' </h5>')
                            
                                // $('.acceleratorfiletext').append('<span>' + genre_uploadlabel + '</span>');
                            
                            
                            }


                        } else {

                            $(".next_").prop('disabled', false);
                        }
                        $('.channelbeing').hide();
                        $('.spillover').show();
                        $('.budgetdivnew').hide();
                        $('.changediv').show();
                        $('.ss_files').hide();
                        $('.submit_btn1').hide();
                        $('.spillll').hide();
                        $('.changediv').append('<p style="display:inline-block;font-size:15px;margin-left:6px;" >' + spilloversheet_filename + '</p>')
                    } else {
                        if (acceleratedFilePathByRPA == null) {
                            if (plancompleted == true) {
                                
                                $(".next_").prop('disabled', false);
                            } else {

                                $(".next_").prop('disabled', true);
                            }
                            $('.acceleratorfiletext').show();

                            if (process3ETA == "None") {
                                $('.acceleratorfiletext').append('<h5> ' + genre_uploadlabel + ' : none </h5>')
                            } else {
                                $('.acceleratorfiletext').append('<h5> ' + genre_uploadlabel + ' : ' + format_date(process3ETA) + ' </h5>')
                            
                                // $('.acceleratorfiletext').append('<span> '+ genre_uploadlabel +'<span id="dots">...</span></span><span id="more" style="display:none;">' + format_date(process3ETA) + '</span><span onclick="myFunction()" id="myclick" style="color:#9780f1;text-decoration: underline;">Read more</span>');
                            
                            
                            }


                        } else {
                            $(".next_").prop('disabled', false);
                        }
                        $('.channelbeing').hide();
                        $('.spillover').show();
                        $('.budgetdivnew').hide();
                        $('.changediv').show();
                        $('.ss_files').hide();
                        $('.submit_btn1').hide();
                        $('.spillovertexttodisplay').hide();
                        $('.spillll').hide();
                        $('.changediv').append('<p style="display:inline-block;font-size:15px;margin-left:6px;">' + budgetallocation_filename + '</p>')

                    }
                }


                if (process2ETA == "None") {

                    $('.forfirstpathtext').append('' + genre_levellabel + ' : none');
                } else {
                    $('.forfirstpathtext').append(' '+ genre_levellabel +':' + format_date(process2ETA) + '');

                    // $('.forfirstpathtext').append('' + genre_levellabel + ' : ' + format_date(process2ETA) + '');

                }
            }
            if (replan == false) {
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
                                action: function () {
                                    window.location.href = "error.php"
                                }
                            }
                        }
                    });
                    $('.buying_basket').hide();
                    $('.backclass').hide();
                    $('.next_').hide();
                } else {
                    console.log(msg.BuyingBasketFilePath);
                    if (msg.BuyingBasketFilePath == '' || msg.BuyingBasketFilePath == null) {
                        if (plancompleted == true) {
                            $('.bb_txt').show();
                            $('#upl-btn').show();
                            $('.cprp_div').hide();
                            $('.radio_class').hide();
                        } else {
                            $('.bb_txt').show();
                            $('#upl-btn').show();
                            $('.cprp_div').hide();
                            $('.radio_class').hide();
                        }

                    } else {
                        $('.bb_files').html('<p>' + msg.BuyingBasketFilePath + '</p>')
                        $('.radio_class').show();
                        $('.cprp_div').show();
                        if (path_selection == 2) {
                            $('.cprp_div').hide();
                        }

                        // $('.next_').prop('disabled', false)
                    }
                }
            }

        })
    }



      // .......................freezebuyinginfo...........
    function freezebuyinginfo() {
    
        // $('.cprp_div').show();
        if (isFilePrepCompleted == "false") {
            $('.channelbeing').show();
            if (path_selection == 2) {
                $('.forfirstpathtext').hide();
                $('.forsecoundpathtext').show();
            } else {
                $('.forsecoundpathtext').hide();
                $('.forfirstpathtext').show();
            }
        } else {
            if (path_selection == 2) {
                $('.cprp_div').hide()
                $('.kav').show()

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
                    if (plancompleted == true) {
                        $('#uploadFileTrigger1').prop('disabled', true);

                        $(".next_").prop('disabled', false);
                    } else {
                   
                        $(".next_").prop('disabled', true);
                    }
                } else {
                    $('.budgetdivnew').show();
                    $('.budget_files').hide();
                    $('.budget_text').show();
                    $('.budget__').hide();
                    $('.submit_btn2').hide();
                    $('.budget_text').append('<p>' + budgetallocation_filename + '</p>')
                    $(".next_").removeAttr('disabled');
                }
            } else {
                $('.kav').hide();
                $('.budget_files').hide();
                $('.spillover').show();
            }
        }
        // $(".kav").hide();
        $('.radio_class').show()
        $('.cprp_div').show()
        $(".camp_id_").html('<label>Campaign Name</label><input class="form-control" placeholder="Campaign Name" type="text" value="' + campaignName + '" readonly style="background:black;color:#fff;"/>')
        if (buyingbasket_filename == '' || buyingbasket_filename == "NULL") {
            $('.bb_txt').show();
            $('#upl-btn').show();

        } else {
            $('#upl-btn').hide();
        }
        if (path_selection == 2) {

            $('.cprp_div').hide();

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
            $.each(acd_dispersion, function (key, value) {
                for (var val in value) {
                    acd_value.push(val)
                    acd_data.push(value[val])

                }

            })
            key = acd_value
            val = acd_data
            $('.sub_div_new').remove()
            for (let i = 0; i < key.length; i++) {
                editdisperionlables1copy(key[i], val[i]);
            }

        } else if (path_selection == 1) {
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
            for (key in weightage) {
                $(".cprp_val").val(key);
                $(".reach_val").val(weightage[key])
            }
            acd_data = []
            acd_value = []
            $(".sub_div").remove()
            $.each(acd_dispersion, function (key, value) {
                for (var val in value) {
                    editdisperionlablescopy(val, value[val])
                }
            })
        
        
        // for (var val in value) {
        //            acd_value.push(val)
        //            acd_data.push(value[val])

        //        }
        //    })
        //    console.log(acd_data);
        //    console.log(acd_value);

        //    $('.name_Class').hide();
        //    $('.path_Class').hide();
        //    $('.appendobjvalinacd').append('<input type="number" name="number" min="1" max="99"  class="inputboxstyle  form-control mods_inputs name name_Class 0" placeholder="' + acd_value.join(",") + '" readonly="" style="background: rgba(41, 40, 40, 0.91); color: rgb(255, 255, 255);">')
        //    $('.appendobjvalindispersion').append('<input type="number" name="number" min="1" max="99"  class="inputboxstyle  form-control mods_inputs name name_Class 0" placeholder="' + acd_data.join(",") + '" readonly="" style="background: rgba(41, 40, 40, 0.91); color: rgb(255, 255, 255);">')
        
        
        
        
        
        
        } else {
            $(".cprp_main").prop("checked", true);
            $(".budget_main").prop("checked", false);
        }
        $('.add_more').prop('disabled', true);
        $('.submit_').prop('disabled', true);

        $.each(weightage, function (key, value) {
            $('.cprp_val').val(key)
            $('.reach_val').val(weightage[key])
        })
    }


    // .......................unfreezebuyinginfo...........

    function unfreezebuyinginfo() {


       
        if (path_selection == 2) {
            $('.cprp_div').hide();
            $('.budget_div_').show();
            $('.radio_class').show();
        } else {

            $('.cprp_div').show();
            $('.budget_div_').hide();
            $('.radio_class').show();
        }
        // $('.radio_class').show()
        // $('.cprp_div').show()
        $(".camp_id_").html('<input class="form-control" placeholder="Campaign Name" type="text" value="' + campaignName + '" readonly style="background: #1f2022;color:#fff"/>')
        $('.texttodisplayspill').hide();

        if (buyingbasket_filename == '' || buyingbasket_filename == "NULL" || replan == true) {
            if (replan == true && buyingbasket_filename != null) {
                $('#upl-btn').hide();
                $('.texttodisplay').show()
                $('.texttodisplay').html('<h5 style="color:#fff">Buying Basket file is succesfully uploaded</h5>')

            } else {
                $('.radio_class').hide();
                $('.cprp_div').hide();
                $('.budget_div_').hide();
                $('#upl-btn').show();
                
            }
        } else {
            if (replan == false) {
                $('#upl-btn').hide();
                $('.texttodisplay').show()
                $('.texttodisplay').html('<h5 style="color:#fff">Buying Basket file is succesfully uploaded</h5>')

            }
        }


        if (path_selection == 2) {
            //    $('.kav').hide()
            //    $(".edit_disp").hide()
            
            $(".cprp_main").css("background-color", "#292828");
            $(".budget_main").css("background-color", "#F07144");
            // $('.cprp_div').hide();
            //  $('.budget_div_').show();
            //
            // $('.radio_class').show();
            // $('.cprp_div').hide();
            // $('.budget_div_').show()
            $(".budget_main").prop("checked", true);
            console.log(campaign_days);
            $('.campaign_days_new').val(campaign_days);
            obj_keyss = acd_dispersion;
            $(".sub_div_new").remove()
            t = ''
            $.each(obj_keyss, function (i, val) {
                $.each(val, function (ii, vall) {
                    editdisperionlables1(ii, vall)
                })
            })

            $(".editDispersionDisplay1").append(t)
            $('.submit_new').prop('disabled', false);
            $('.add_more_new').prop('disabled', false);
        } else if (path_selection == 1) {
            // $('.kav').hide()

            $(".budget_main").css("background-color", "#292828");
            $(".cprp_main").css("background-color", "#F07144");
            $(".cprp_main").prop("checked", true);
            $('.budget_div_').hide()
            $('.campaign_days').val(campaign_days);
            $('.cprp_channel_val').val(channel_cprp);
            $('.frequency_channel').val(channel_frequency);
            for (key in weightage) {
                $(".cprp_val").val(key);
                $(".reach_val").val(weightage[key])
            }
            obj_keys__ = {};
            obj_keys = acd_dispersion;
            $(".sub_div").remove()
            for (var i = 0; i < obj_keys.length; i++) {
                for (var val in obj_keys[i]) {
                    editdisperionlables(val, obj_keys[i][val])
                }
            }
            $('.submit_').prop('disabled', false);
            $('.add_more').prop('disabled', false);
        } else {
            $(".cprp_main").prop("checked", true);
            $(".budget_main").prop("checked", false);
        }

        $.each(weightage, function (key, value) {
            $('.cprp_val').val(key)
            $('.reach_val').val(weightage[key])
        })
        // if ((path_selection == 2)) {
        //     $('.kav').hide()
        // }
    }





    $('body').on('click', '.cprp_main', function () {
        // $(".kav").show()
        $(".spanClass").css('color', 'rgb(13, 230, 241)')
        $(".spanClass").css('font-weight', '700')
        $(".spanClass").css('font-size', '22px')
        $(".cprp_main").css('background-color', '#f07144')
        $(".budget_main").css('background-color', '#211d1dbf')
        $(".budget_main").css('color', '#ccc6c6')
        $('.cprp_div').show(100);
        $('.budget_div_').hide(100);
        $(".spanClass_").css('color', 'rgb(165, 162, 162)');
        $(".spanClass_").css('font-weight', '400');
        $(".spanClass_").css('font-size', '14px')
    })


    $('body').on('click', '.budget_main', function () {
        // $('.kav').show()
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
    $('input[type=number]').bind("mousewheel", function () {
        return false;
    });

    function nullCheck(value) {
        if (value != "" && value != null && value != undefined) {
            return true;
        } else {
            return false;
        }
    }
    var i;
    var c;
    var p;
    var s;

    $("body").on("click", ".add_more", function () {


        var x = 0;

        thiss = $(this)

        children = $(".sub_div").children();

        var name_cls = $(".name_Class")
        var path_cls = $(".path_Class")

        for (var i = 0; i < name_cls.length; i++) {
            var path_cls_val = path_cls[i].value;
            var name_cls_val = name_cls[i].value
            var name_cls_empty = (name_cls_val == "" && /^[a-zA-Z-, ]*$/.test(name_cls_val))
            // alert(path_cls);
            x = 0 + parseInt(path_cls_val);

        }
       
        if (x > 100) {

            $.alert({
                title: 'Alert',
                content: 'Dispersion sholud be 100"'
            });

            // swal("Dispersion sholud be 100");
        }
        if (name_cls_empty) {

            $.alert({
                title: 'Alert',
                content: 'Acd and Dispersion should not be empty'
            });
        } else {

            editdisperionlables("", "")

            $('.mods_inputs').on('keypress', function () {
                var x = event.key;
                if (x == "e" || x == "." || x == "-") {
                    return false;
                }

            });

        }
    })




    $("body").on("click", ".add_more_new", function () {

        var x = 0;
        thiss = $(this)
        val = $(this).html();
        children = $(".sub_div_new").children();

        var name_cls = $(".name_Class_new")
        var path_cls = $(".path_Class_new")

        for (var i = 0; i < name_cls.length; i++) {
            var path_cls_val = path_cls[i].value;
            var name_cls_val = name_cls[i].value
            name_cls_empty_new = (name_cls_val == "" && /^[a-zA-Z-, ]*$/.test(name_cls_val))
            // alert(path_cls);
            x = 0 + parseInt(path_cls_val);

        }
        // if (x>100) {
        //     alert("error")
        // }
        if (name_cls_empty_new) {
            $.alert({
                title: 'Alert',
                content: 'Acd and Dispersion should not be empty'
            });
        } else {
            editdisperionlables1("", "")
        }

    })


    $("body").on("click", ".remove_new", function () {
        $(this).closest('.sub_div_new').remove();
        $('.hide_').hide();
    })

    $("body").on("click", ".remove", function () {
        $(this).closest('.sub_div').remove();
        $('.hide_').hide();
    })
    var arr = [];
    var optn;
    var existing_keys;
    var path_selection = '';
    var budget_text;
    var div_weitage;

    $("body").on("click", ".submit_new", function () {
        $('.forsecoundpathtext').empty();
        path_selection_ = $(this).closest('.common_class').find('.budget_main').attr('key');
        var campaign_days = $('.campaign_days_new').val();
        var userid = sessionStorage.getItem('userid');
        var err = 0;
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
        var val_check = 0;
        var unique_name_val;
        var oldArray;
        var val;
        val_check_this = 0;
        val_check_this_ = 0;
        empty = 0;
        subDivs = $(".sub_div_new");
        obj_subdivs = []
        sum = 0;
        var name_cls = $(".name_Class_new")
        var path_cls = $(".path_Class_new")

        for (var i = 0; i < name_cls.length; i++) {
            var vl = path_cls[i].value;
            var kw = name_cls[i].value;

            if (kw != '' && vl != '') {

                sum += parseFloat(vl) || 0;
                acdobj = {}
                acdobj[kw] = vl;
                obj_subdivs.push(acdobj)
            }

        }
        if(kw == '' && vl == '') {
            $.alert({
                title: 'Alert',
                content: 'Acd and Dispersion fields sholud not be empty'
            });

        }
        
        // console.log(obj_subdivs);
       else if (campaign_days == '') {
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
        } else if (sum !== 100 || sum > 100) {

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
        } else {
            $('.loading').show();
            sendObj2.acd_dispersion = obj_subdivs;
            console.log(sendObj2);
            console.log(JSON.stringify(sendObj2));
            var form = new FormData();
            form.append("file", JSON.stringify(sendObj2));
            var settings11 = {
                "async": true,
                "crossDomain": true,
                "url": aws_url + 'plan_selection_button',
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
                process2ETA = msg.Process2ETA
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
                } else {

                    if (process2ETA == 'None') {

                        $('.forsecoundpathtext').append('' + channel_levellabel + ' :None');
                    } else {


                        $('.forsecoundpathtext').append(''+ channel_levellabel +':' + format_date(process2ETA) + '');
                        // $('.forsecoundpathtext').append('' + channel_levellabel + ' ' + format_date(process2ETA) + '');

                    }
                    $('.add_more_new').prop('disabled', true);
                    $('.submit_new').prop('disabled', true);
                    $('.remove').hide();
                    $(this).prop('disabled', true);
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



    function format_date(date_string) {
        date = new Date(date_string)
        var dd = date.getDate();
        if (dd < 10) {
        dd = '0' + dd;
        } 
        months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
        weeks_ = ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun"];
        hours_mian = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"];
        hrs = date.getHours().toString().length < 2 ? '0' + date.getHours() : date.getHours()
        mins = date.getMinutes().toString().length < 2 ? '0' + date.getMinutes() : date.getMinutes()
        return dd + '-' + months[date.getMonth()] + '-' + date.getFullYear() + '&nbsp;&nbsp;' + hrs + ':' + mins;
    }




    // ......$.njjhjk


    $("#a").keyup(function () {
        var a = parseInt($('#a').val());
        var b = 100 - a;
        var b = parseInt($('#b').val(b));
    })
    $("#a").mousewheel(function () {
        var a = parseInt($('#a').val());
        var b = 100 - a;
        var b = parseInt($('#b').val(b));
    })
    $("#b").mousewheel(function () {
        var a = parseInt($('#b').val());
        var b = 100 - a;
        var b = parseInt($('#a').val(b));
    })
    $("#b").keyup(function () {
        var a = parseInt($('#b').val());
        var b = 100 - a;
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

    $("body").on("click", ".submit_", function () {

      
        $('.forfirstpathtext').empty()
        path_selection = $(this).closest('.common_class').find('.cprp_main').attr('key');
        div_weitage = $(this).closest('.common_class').find('.cprp_div');
        var cprp_weitage = div_weitage.find('.cprp_val').val();
        var reach_weitage = div_weitage.find('.reach_val').val();
        var cprp_channel_val = div_weitage.find('.cprp_channel_val').val();
        var frequency_channel = div_weitage.find('.frequency_channel').val();
        var campaign_days = div_weitage.find('.campaign_days').val();
        var userid = sessionStorage.getItem('userid');
        var err = 0;
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
        var val_check = 0;
        var unique_name_val;
        var oldArray;
        var val;
        val_check_this = 0;
        val_check_this_ = 0;
        empty = 0;
        obj_subdivs = []
        sum = 0;

        var name_cls = $(".name_Class")
        var path_cls = $(".path_Class")

        for (var i = 0; i < name_cls.length; i++) {
            var vl = path_cls[i].value;
            var kw = name_cls[i].value;




             // if(kw =='' && vl == ''){
        //     $.alert({
        //         title: 'Alert',
        //         content: 'Acd and Dispersion fields sholud not be empty'
        //     });

        // }
            if (kw != '' && vl != '') {


                sum += parseFloat(vl) || 0;
                acdobj = {}
                acdobj[kw] = vl;
                obj_subdivs.push(acdobj)
            }
            

        }
        // if(kw == '' && vl == '' ) {
        //     $.alert({
        //         title: 'Alert',
        //         content: 'Acd and Dispersion fields sholud not be empty'
        //     });

        // }

        // console.log(obj_subdivs);
       if (campaign_days == '' || cprp_weitage == '' || reach_weitage == '' || cprp_channel_val == '' || frequency_channel ==''|| kw == '' && vl == '') {

            $.alert({
                title: 'Alert',
                content: 'Fields should not be empty'
            });

        } else if (sum < 100 || sum > 100) {
            $.alert({
                title: 'Alert',
                content: 'Dispersion should be 100'
            });
        } 
        
        
        else {
            $('.loading').show();
            $('.add_more').prop('disabled', true);
            $('.remove').hide();
            $(this).prop('disabled', true);
            $('.spillover').hide();
            $('.channelbeing').show();
            $('#upl-btn1').hide();
            sendObj2.acd_dispersion = obj_subdivs;
            console.log(obj_subdivs);
            $.each(obj_subdivs, function (key, i) {
                console.log(key);
            })
            sendObj2.weightage = sendObj;
            console.log(sendObj2);
            console.log(JSON.stringify(sendObj2));
            var form = new FormData();
            form.append("file", JSON.stringify(sendObj2));
            var settings11 = {
                "async": true,
                "crossDomain": true,
                "url": aws_url + 'plan_selection_button',
                "method": "POST",
                "processData": false,
                "contentType": false,
                "mimeType": "multipart/form-data",
                "data": form
            };
            $.ajax(settings11).done(function (msg) {
                msg = JSON.parse(msg);
                console.log(msg);


                process2ETA = msg.Process2ETA
                process3ETA = msg.Process3ETA
                msg = msg.Status

                $('.loading').hide();
                if (msg == "fail") {
                    $.alert({
                        title: 'Error',
                        content: 'Oops ! something went wrong, try again',
                        buttons: {
                            okay: {
                                text: 'Okay',
                                btnClass: 'btn-primary',
                                action: function () {
                                    window.location.href = "error.php"
                                }
                            }
                        }
                    });
                } else {
                    $('.forfirstpathtext').append('' + genre_levellabel + '' + format_date(process2ETA) + '');


                    // $('.forfirstpathtext').append('<p> '+ genre_levellabel +'<span id="dots">...</span></p><span id="more" style="display:none;">' + format_date(process2ETA) + '</span><button onclick="myFunction()" id="myBtn">Read more</button>');



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



    $("body").on("click", ".cprp_r", function () {
        $(".cprp").show();
        $(".budget").hide();
    })
    $("#cprp_upload").hide();
    $(".complete_cprp").hide();
    $(".complete_budget").hide();
    $("#budget_upload").hide();
    $("body").on("click", ".submit_budget", function () {
        $("#budget_upload").show();
        $(".budget").hide();
        $(".complete_budget").show();
        $(".cprp_r").attr('disabled', 'disabled');
        $(".uniform-choice span").addClass("disable_border")
        $(".budget_r").attr('disabled', 'disabled');
    })

    $("body").on("click", ".cprp_slip", function () {
        $(".total_div").hide();
    })
    $("body").on("click", ".budget_slip", function () {
        $(".total_div").hide();
    })

    $("body").on("click", ".backclass", function () {
        window.location.href = 'planner_createnewplan.php?planid=' + plan_id
    })


    $("body").on("click", ".next_", function () {
        window.location.href = "barc.php?planid=" + plan_id
    })

    $('.camp_id').append('<input class="form-control" value="' + plan_id + '" type="text"/ readonly>')
    $('.radio_class').hide();
    var file_name_new;
    var main_output_new;
    fileobj_new = {};

    

    


    var counting = 0;

    function exceltoblob(file) {
        pagesArr = [];
        window.PDFJS = window.pdfjsLib;
        PDFJS.disableWorker = true;
        PDFJS.getDocument(file).then(function getPdfHelloWorld(pdf) {
            const go = async function () {
                let h = 0;
                for (var pageN = 1; pageN <= pdf.numPages; pageN++) {
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
                    var task = page.render({
                        canvasContext: context,
                        viewport: viewport
                    })
                    await task.promise;
                    pages = canvas.toDataURL('image/jpeg');
                    pagesArr.push(pages)
                    if (pageN == pdf.numPages) {
                        displayImagesMain(pagesArr)
                    }
                }
            };
            go();
        }, function (error) {
            //console.log(error);
        });
    }



    // $("body").on("click", "#upl-btn", function () {
        
    // })

    $("#uploadFileTrigger1").on("click", function () {
        $('#load-file1').click()
    })
    //budget upload file path B//

    var file_name_;
    var main_output;
    fileobj = {};
    // (function ($) {
    $("body").on("click", ".deleteFile", function () {
        $(this).closest('.ChannelLevelFileNameDisplay').remove();
        $('.hide_').hide();
    })
    $('#load-file1').on('change', function () {
      
        $('.uploadFileTrigger1').prop('disabled', true);
        // $(".uploadFileTrigger1")
        main_output = ''
        var file = $(this)[0].files[0];
        filename = file.name;
        // filename = "ChannelLevelBudgetAllocation" + newcampaign_id + "_" + version + ".xlsx"
        $(".ChannelLevelFileNameDisplay").html('<p  class="mr-b-0 mr-l-20 pd-l-20" style="border-left: 3px solid #fff">' + filename + ' <img src="assets/images/delete.svg" style="width:15px" class="deleteFile"></p>')
        var fileReader = new FileReader();
        fileReader.onloadend = function (e) {
            blob___ = e.target.result;

            fileobj.filename = filename;
            fileobj.blob = blob___;
            fileobj.plan_id = plan_id;
            fileobj.user_id = userid;
            fileobj.category = "budgetallocation";
            console.log(fileobj);

            $(".loading").show();
            console.log(file_name_);
            var form = new FormData();
            form.append("file", JSON.stringify(fileobj));
            var settings11 = {
                "async": true,
                "crossDomain": true,
                "url": aws_url + 'Buying_basket',
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
                status = msg.status
                process3ETA = msg.Process3ETA;
                $(".loading").hide();
                $('.acceleratorfiletext').hide();
                
                if (status == "true") {
                    if (path_selection == 2) {
                        $('#uploadFileTrigger1').hide();
                        $('.deleteFile').hide();
                        $('.acceleratorfiletext').show();
                        $('.acceleratorfiletext').append('<h5>Channel Level Budget Allocation Sheet being created. Once created you will receive it in your inbox - Expected Time of Arrival (ETA) is: '+ format_date(process3ETA) + '</h5>')
                        // '<h5> ' + genre_uploadlabel + ' : ' + format_date(process3ETA) + ' </h5>'
                   
                   
                    } else {
                        $('.acceleratorfiletext').hide();
                        $('.next_').prop('disabled', false)
                    }
                    $('#upl-btn__').hide();
    
                    $('.bb_txt').hide();
                    $('.file-input').hide();
                    $('.uploadFileTrigger1').hide();
                    $('.ChannelLevelFileNameDisplay').hide();

                    $('.red_color').hide();
                } else {
                    $('.texttodisplay').hide();
                    $('.texttodisplayspill').hide();
                    $('#upl-btn1').show();
                    $('.file-input').show();
                    $('.red_color').show();
                    if (plancompleted == true) {
                        $(".next_").prop('disabled', false);
                    } else {
    
                        $('.next_').prop('disabled', true)
                    }
                    $.alert({
                        title: 'Error',
                        content: 'Oops ! Seems you are uploading an incorrect file',
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

            file_name_ = filename;
        };
        fileReader.readAsDataURL(file);
    });

    var file_name_2;
    var main_output2;
    fileobj2 = {};
   
    $("#uploadFileTrigger2").on("click", function () {
        $('#load-file__').click()
    })

    $("body").on("click", ".deleteFile", function () {
        $(this).closest('.GenreLevelFileNameDisplay').remove();
        $('.hide_').hide();
    })

    $('#load-file__').on('change', function () {
        main_output = ''
        var file = $(this)[0].files[0];
        filename = file.name;
        
        $(".GenreLevelFileNameDisplay").html('<p class="mr-b-0 mr-l-20 pd-l-20" style="border-left: 3px solid #fff">' + filename + ' <img src="assets/images/delete.svg" style="width:15px" class="deleteFile"></p>')
        var fileReader = new FileReader();
        fileReader.onloadend = function (e) {
            blob___ = e.target.result;
            fileobj2.filename = filename;
            fileobj2.blob = blob___;
            fileobj2.plan_id = plan_id;
            fileobj2.user_id = userid;
            fileobj2.category = "spilloversheet";
            $(".loading").show();
            console.log(file_name_2);
            var form = new FormData();
            form.append("file", JSON.stringify(fileobj2));
            var settings11 = {
                "async": true,
                "crossDomain": true,
                "url": aws_url + 'Buying_basket',
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
                Status = msg.status
                process3ETA = msg.Process3ETA;
                if (Status == true) {
                    if (path_selection == 1) {
                        $(".ss_files").html(msg.file_name)

                    } else {
                        $('.acceleratorfiletext').hide();
                        $('.next_').prop('disabled', false)
                    }
                    $('.bb_txt').hide();
                    $('.file-input').hide();
                    $('.red_color').hide();
                    $('.spillovertexttodisplay').append('<h5 style="color:#fff;">Genre Level Budget Allocation Sheet  successfully uploaded Expected Time of Arrival (ETA) is : '+format_date(process3ETA)+'  </h5>')

                    $('.spillovertexttodisplay').show()
                }
                if (Status == false) {
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
            file_name_2 = filename;
        };
        fileReader.readAsDataURL(file);
    });

    //remove btn click

    $("body").on("click", ".fileinput-remove-button", function () {
        $('#upl-btn').prop('disabled', 'disabled')
    })

    $('body').on('click', '.backclass', function () {
        sessionStorage.setItem('backclicked', true);
    })

})