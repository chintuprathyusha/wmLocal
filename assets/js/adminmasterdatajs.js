$(document).ready(function(){
    $('.texttodisplay').hide();
    var plan_id = sessionStorage.getItem('create_plan_id');
    var user_id = sessionStorage.getItem('userid');
    $('.camp_id').append('<input class="form-control" value="'+plan_id+'" type="text"/ readonly>')
    $('#locationuploadbtn').prop('disabled', true);
    $('#channelgenrebtn').prop('disabled', true);
    onLoad();
    var masterstamp;
    var channelstamp;
    function onLoad(){
        sendObj ={}
        var form = new FormData();
        form.append("file", JSON.stringify(sendObj));
        var settings11 = {
            "async": true,
            "crossDomain": true,
            "url":aws_url+'master_mapping_files_time_stamps',
            "method": "POST",
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
            "data": form
        };
        $.ajax(settings11).done(function (msg) {
            msg = JSON.parse(msg)
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
                $('.loading').hide();
                masterstamp = msg.master_data;
                channelstamp = msg.ChannelGenreMappingSheet;
                if (jQuery.isEmptyObject(channelstamp) == true) {
                    $('.channelstamp').show();
                    $('.channelstamp').html('<p>Channel Genre Mapping Sheet not uploaded</p>')

                }
                else {
                    $('.channelstamp').show();
                        $('.channelstamp').html('<ul><li>'+channelstamp+'</ul></li>')
                }
                if (jQuery.isEmptyObject(masterstamp) == true) {
                    $('.masterdatastamp').show();
                    $('.masterdatastamp').html('<p>Master data file Sheet not uploaded</p>')
                }
                else {
                    $('.masterdatastamp').show();
                        $('.masterdatastamp').html('<ul><li>'+masterstamp+'</ul></li>')
                }
            }
        });
    }


    var file_name_;
    var main_output;
    fileobj = {};
        $('#locationclass').on('change', function () {
            debugger
            main_output = ''
            var file = $('#locationclass')[0].files[0];
            filename = file.name;
            var fileReader = new FileReader();
            fileReader.onloadend = function (e) {
                blob___ = e.target.result;

                fileobj.filename = filename;
                fileobj.blob = blob___;
                // fileobj.plan_id = plan_id;
                fileobj.user_id = user_id;
                fileobj.category = "masterdata"
                console.log(fileobj);
                file_name_ = filename;
                $('#locationuploadbtn').prop('disabled', false)
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
            //console.log(error);
        });
    }
    $("body").on("click", ".downloadall", function() {
        var form = new FormData();
        form.append("file", JSON.stringify(fileobj));
        var settings11 = {
            "async": true,
            "crossDomain": true,
            "url":aws_url+'download_master_mapping_files',
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
            else {
                var bin = atob(msg);
                var ab = s2ab(bin);
                var blob = new Blob([ab], { type: 'octet/stream' });
                var link = document.createElement('a');
                link.href = window.URL.createObjectURL(blob);
                link.download = "AdminFiles.zip";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        })
    })
    function s2ab(s) {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i=0; i!=s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
        return buf;
    }

    $("body").on("click", "#locationuploadbtn", function(){
        debugger
        $('.loading').show();
        console.log(fileobj);
        var form = new FormData();
        form.append("file", JSON.stringify(fileobj));
        var settings11 = {
            "async": true,
            "crossDomain": true,
            "url":aws_url+'master_data_settings',
            "method": "POST",
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
            "data": form
        };
        $.ajax(settings11).done(function (msg) {
            console.log(msg);
            msg = JSON.parse(msg);
            $('.loading').hide();
             if(msg.hasOwnProperty('Error')){
                $.alert({
                    title: 'Error',
                    content: msg.Error,
                    animation: 'scale',
                    closeAnimation: 'scale',
                    opacity: 0.5,
                    buttons: {
                        okay: {
                            text: 'Okay',
                            btnClass: 'btn-primary',
                            action: function(){
                                window.location.reload();
                            }
                        }
                    }
                });
            }
            else {
                    $.alert({
                    title: 'Success',
                    content: 'Uploaded Successfully',
                    animation: 'scale',
                    closeAnimation: 'scale',
                    opacity: 0.5,
                    buttons: {
                        okay: {
                            text: 'Okay',
                            btnClass: 'btn-primary',
                            action:  function(){
                                window.location.reload();
                            }
                        }
                    }
                });
                $('#locationuploadbtn').prop('disabled', true);
                $('.masterdata_').hide();
                $('.masterdata_new').show();
                $('.masterdata_new').append('<h5>'+file_name_+'</h5>');
            }
        });
    })



    var file_name_new;
    var main_output_new;
    fileobj_new = {};
        $('#channelgenre').on('change', function () {
            debugger
            main_output_new = ''
            var file = $('#channelgenre')[0].files[0];
            filename_new = file.name;
            var fileReader = new FileReader();
            fileReader.onloadend = function (e) {
                blob___ = e.target.result;

                fileobj_new.filename = filename_new;
                fileobj_new.blob = blob___;
                // fileobj_new.plan_id = plan_id;
                fileobj_new.user_id = user_id;
                fileobj_new.category = "ChannelGenreMappingSheet"
                console.log(fileobj_new);
                file_name_ = filename_new;
                $('#channelgenrebtn').prop('disabled', false)
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
            //console.log(error);
        });
    }

    $("body").on("click", "#channelgenrebtn", function(){
        $('.loading').show();
        // //debuggers
        console.log(fileobj_new);
        var form = new FormData();
        form.append("file", JSON.stringify(fileobj_new));
        var settings11 = {
            "async": true,
            "crossDomain": true,
            "url":aws_url+'master_data_settings',
            "method": "POST",
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
            "data": form
        };
        $.ajax(settings11).done(function (msg) {
            $('.loading').hide();
            console.log(msg);
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
            else if(msg.hasOwnProperty('Error')){
                $.alert({
                    title: 'Error',
                    content: msg.Error,
                    animation: 'scale',
                    closeAnimation: 'scale',
                    opacity: 0.5,
                    buttons: {
                        okay: {
                            text: 'Okay',
                            btnClass: 'btn-primary',
                            action: function(){
                                window.location.reload();
                            }
                        }
                    }
                });
            }
            else {
                $.alert({
                    title: 'Success',
                    content: 'Uploaded Succesfully',
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
                $('#channelgenrebtn').prop('disabled', true);
                $('#channelgenre').hide();
                $('.channel_').append('<h5>'+file_name_+'</h5>')
            }
        });
    })



})
