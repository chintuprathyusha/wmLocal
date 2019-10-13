$(document).ready(function () {
    var useridd = sessionStorage.getItem("userid");
    $(".displayhere").html('')
    var msg__;
    addpageonloadhit()
    function addpageonloadhit() {
        obj = {}
        var form = new FormData();
        form.append("file", JSON.stringify(obj));
        var settings11 = {
            "async": true,
            "crossDomain": true,
            "url": aws_url+'master_roles_and_Privileges',
            "method": "POST",
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
            "data": form
        };
        $.ajax(settings11).done(function (msg) {
            msg = JSON.parse(msg);
            msg__ = msg;
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
                displaydata(msg)
            }

        })
    }


    function displaydata(msg) {
        $('#usergrp').empty()
        $.each(msg ,function(key,i){
            $('#usergrp').append('<option value='+key+'>'+key+'</option>')
        })

        $('.displayhere').empty()
        var $dropdown = $('#usergrp');
        $dropdown.on('change', function() {
            $('.loading').show();
            row = '';
            $('.displayhere').empty();
            var a=msg[$dropdown.val()];


            $.each(a, function (j) {
                row += '<tr class="tableclass">'
                row += '<td  style="color:width:20px;">' + a[j].Privilage_Description + ' </td>';
                row += '<td class="' + a[j].Privilage_Description + '"  data-id=' + a[j].Privilage_Id + '>'
                row += '<p class="hidden checkpoint_prev' + j + '">' + a[j].Privilage_Description + '</p>'
                if (a[j].Privilage_Value.toLowerCase() == 'yes') {
                    row += '<input  type="radio"   class="radioclick" checked data-Privilege_Name=' + a[j].Privilage_Description + ' value="Yes" data-checked="checked" checked>Yes<br>'
                    row += '<input  type="radio"  class="radioclick" data-Privilege_Name=' + a[j].Privilage_Description + ' value="No"> no<br>'

                }
                else if (a[j].Privilage_Value.toLowerCase() == 'no') {
                    row += '<input type="radio" class="radioclick" data-Privilege_Name=' + a[j].Privilage_Description + ' value="Yes" > yes<br>'
                    row += '<input type="radio" class="radioclick" data-Privilege_Name=' + a[j].Privilage_Description + '  value="No" data-checked="checked" checked> No<br>'
                }
                row += '</td>';
                row += '<tr>'
                var vall = ''
            })
            $(".displayhere").html(row)
            setTimeout(function(){
                $('.loading').hide();
            },1000);
        })
        $dropdown.trigger('change');
    }


    $("body").on("click", ".radioclick", function () {
        var a = $(this).attr('data-Privilege_Name')
        console.log(a);
        $('.' + a).find('.radioclick').each(function () {
            $(this).attr('data-checked', '');
            $(this).prop('checked',false);
        })
        $(this).attr('data-checked', 'checked');
        $(this).prop('checked',true);

    })
    //radio button code ends here


    // submit button code starts here
    $("body").on("click", ".submitbtn", function () {
        var tdata=[];
        var pname="Privilege_Name";
        var pid="Privilage_Id";
        var pVal="Privilage_Value";

        $('.displayhere').find('tr').each(function () {
            var objjj = {};
            var idd = '';
            var valuee='';
            var prevName=''
            $(this).find('td:last').each(function () {
                idd = $(this).attr('data-id');
                console.log(idd)
                $(this).find('input:radio').each(function () {
                    if ($(this).attr('data-checked')=="checked") {
                        prevName=$(this).attr('data-privilege_name');
                        valuee = $(this).val()
                        console.log(valuee);
                        objjj[pname]=prevName;
                        objjj[pid]=idd;
                        objjj[pVal]=valuee;
                        tdata.push(objjj);
                        console.log(objjj);
                    }
                })
            })
        })
        // here u need to write ur ajax call
        console.log(tdata);

        var usgr=$('#usergrp').val();
        msg__[usgr]=tdata;
        console.log(msg__)


        sendObj = {}
        sendObj.data = msg__;
        sendObj.user_id = useridd;
        console.log(sendObj);
        var form = new FormData();
        form.append("file", JSON.stringify(sendObj));
        var settings11 = {
            "async": true,
            "crossDomain": true,
            "url": aws_url+'master_roles_and_Privileges_button',
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
            else{
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
        })
    })
})
