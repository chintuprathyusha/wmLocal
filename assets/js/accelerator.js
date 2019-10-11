$(document).ready(function(){
    $('.loading').show();
    $('.texttodisplay').hide();
    var plan_id = sessionStorage.getItem('create_plan_id');
    var user_id = sessionStorage.getItem('userid');
    barcData()
    onLoad();
    $('#upl-btn').prop('disabled', true);
    var campaign_id;
    var version;
    function onLoad(){
        sendObj ={}
        sendObj.planid = plan_id;
        console.log(sendObj);
        var form = new FormData();
        form.append("file", JSON.stringify(sendObj));
        var settings11 = {
            "async": true,
            "crossDomain": true,
            "url":aws_url+"version_for_plan",
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
            campaign_id = msg.CampaignId;
            version = msg.Version;
        })
    }

    function barcData() {
        plan_id = sessionStorage.getItem('create_plan_id');
        sendObj = {};
        sendObj.planId = plan_id;
        console.log(sendObj);
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
            acce_file_name = msg.AcceleratedFilePath;
            $(".select2").addClass('hide');
            setTimeout(function(){
                // $('.loading').hide();
            }, 10000)
            if(msg.Status == "fail"){
                $.alert({
                    title: 'Error',
                    content: 'Oops ! something went wrong, try again'
                });
            }
            else {
                if (acce_file_name==null) {
                    $('.acce_div').show();
                    $('.acce_File_').hide();
                }
                else {
                    $('.acce_div').hide();
                    $('.acce_File_').show();
                    $('.acce_File_').append('<h5>Accelerator Output file is successfully uploaded</h5>');
                    $('.edit_barc').prop('disabled', true);
                }
            }
        })
    }

barcData()

    var file_name_;
    var main_output;
    fileobj = {};
    (function ($) {
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
                console.log(fileobj);
                file_name_ = file_name_;
            };
            $('#upl-btn').prop('disabled', false);
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
        $(".loading").show();
        fileobj.fromReplan = true;
        fileobj.category = "acceleratedfile";
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
            $('.loading').hide();

            if (msg == "Path inserted Succesfully") {
                $('#upl-btn').hide();
                $('.file-input').hide();
                $('.red_color').hide();
                $('.texttodisplay').show();
                // $('.texttodisplay').append('<h5>'+file_name_+' is successfully uploaded</h5>')
                $('.texttodisplay').append('<h5>Accelerator Output file successfully uploaded</h5>')

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
            else {
                $('#upl-btn').show();
                $('.file-input').show();
                $('.red_color').show();
                $('.texttodisplay').hide();
                if(msg.Status == "fail"){
                    $.alert({
                        title: 'Error',
                        content: 'Oops ! something went wrong, try again'
                    });
                }
            }

        });
    })


})
