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
               errorAlert('Oops ! something went wrong, try again', "error.php")
            }
            else {
                console.log(msg);
                $('.loading').hide();
                masterstamp = msg.master_data;
                channelstamp = msg.ChannelGenreMappingSheet;
                if (jQuery.isEmptyObject(channelstamp) == true) {
                    $('.channelstamp').html('<p>Channel Genre Mapping Sheet not uploaded</p>')
                }
                else {
                    $('.channelstamp').html('<ul><li>'+channelstamp+'</ul></li>')
                }
                if (jQuery.isEmptyObject(masterstamp) == true) {
                    $('.masterdatastamp').html('<p>Master data file Sheet not uploaded</p>')
                }
                else {
                    $('.masterdatastamp').html('<ul><li>'+masterstamp+'</ul></li>')
                }
            }
        });
    }


    $("body").on("click", "#masterUploadBtn", function () {
        $("#masterFile").click();
    })
    
    $('#masterFile').on('change', function () {
        var file = $(this)[0].files[0];
        filename = file.name;
        var fileReader = new FileReader();
        fileReader.onloadend = function (e) {
            blob___ = e.target.result;
            file_name_ = filename;
            uploadMasterFile(file_name_, blob___)
        };

        fileReader.readAsDataURL(file);
    });
    
    function uploadMasterFile(file_name, blob) {
        $(".masterFileName").html('<span>' + file_name + '</span>')
        fileobj = {}
        fileobj.filename = file_name;
        fileobj.blob = blob;
        fileobj.user_id = user_id;
        fileobj.category = "masterdata"
        
        $('.loading').show();
        var form = new FormData();
        form.append("file", JSON.stringify(fileobj));
        var settings11 = {
            "async": true,
            "crossDomain": true,
            "url": aws_url + 'master_data_settings',
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
            if (msg.hasOwnProperty('Error')) {
                errorAlert(msg.Error, "adminindex.php")
            } else {
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
                            action: function () {
                                window.location.reload();
                            }
                        }
                    }
                });
                $('.masterdata_').hide();
                $('.masterdata_new').show();
                $('.masterdata_new').append('<h5>' + file_name_ + '</h5>');
            }
        });
    }
    
    $("body").on("click", "#acceleratorBtn", function () {
        $("#acceleratorFile").click();
    })

     $('#acceleratorFile').on('change', function () {
         var file = $(this)[0].files[0];
         filename = file.name;
         var fileReader = new FileReader();
         fileReader.onloadend = function (e) {
             blob___ = e.target.result;
             file_name_ = filename;
             uploadAcceleratorFile(file_name_, blob___)
         };

         fileReader.readAsDataURL(file);
     });
    
    function uploadAcceleratorFile(file, blob) {
        $(".acceleratorFileName").html('<span>' + file + '</span>')
        
        fileobj_new = {}
        fileobj_new.filename = file;
        fileobj_new.blob = blob;
        fileobj_new.user_id = user_id;
        fileobj_new.category = "ChannelGenreMappingSheet";
         var form = new FormData();
         form.append("file", JSON.stringify(fileobj_new));
         var settings11 = {
             "async": true,
             "crossDomain": true,
             "url": aws_url + 'master_data_settings',
             "method": "POST",
             "processData": false,
             "contentType": false,
             "mimeType": "multipart/form-data",
             "data": form
         };
         $.ajax(settings11).done(function (msg) {
             $('.loading').hide();
             msg = JSON.parse(msg);
             if (msg.message == "fail") {
                 errorAlert('Oops ! something went wrong, try again', 'error.php')
             } else if (msg.hasOwnProperty('Error')) {
                  errorAlert(msg.Error, 'adminindex.php')
             } else {
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
             }
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


})
