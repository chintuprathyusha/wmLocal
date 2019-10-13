$(document).ready(function () {
    var useridd = sessionStorage.getItem("userid");
    addpageonloadhit()
    function addpageonloadhit() {
        obj = {}
        obj.user_id = useridd
        console.log(obj);
        var form = new FormData();
        form.append("file", JSON.stringify(obj));
        var settings11 = {
            "async": true,
            "crossDomain": true,
            "url": aws_url+'add_planner_onload',
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
                allemails = msg.emails
                allclients = msg.clients
                $(".allemailsvalues").html('')
                $(".allemailsvalues").append("<option value='0'>Select Email</option>")

                for (var i = 0; i < allemails.length; i++) {
                    $('.allemailsvalues').append('<option value='+allemails[i]+'>'+allemails[i]+'</option>')
                }
                $(".allclientnames").html('')
                $(".allclientnames").append("<option value='0'>---Select ClientName--</option>")

                $.each(allclients ,function(key,val){
                    $('.allclientnames').append('<option class="clientoptionclass" keyy='+key+' value='+val+'>'+val+'</option>')
                })

            }

        })
    }
    $("body").on("click", ".addsavebtn", function(){
        email = $('.emailvalue').val()
        client_name = []
        clientname = $(".allclientnames").select2('data');

        for (var i = 0; i < clientname.length; i++) {
            client_name.push(clientname[i].text);
        }

        var clientnamees = $.unique(client_name);


        // clientname = $('.clientoptionclass').val()
        debugger
        objj = {}
        objj.email = email
        objj.client = $.unique(clientnamees);
        objj.clientid = client_name
        objj.user_id = useridd
        console.log(objj);
        var form = new FormData();
        form.append("file", JSON.stringify(objj));
        var settings11 = {
            "async": true,
            "crossDomain": true,
            "url": aws_url+'add_save_button',
            "method": "POST",
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
            "data": form
        };
        $.ajax(settings11).done(function (msg) {
            msg = JSON.parse(msg);
            console.log(msg)
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
                if (msg == "updated") {
                    $.alert({
                        title: 'Success',
                        content: 'Updated Successfully'

                    });
                    setInterval(function(){  location.reload(); }, 1500);
                }
                else if(msg == "notupdated"){
                    $.alert({
                        title: 'Alert',
                        content: 'Please try again'

                    });
                }
            }

        })

    })

    $("body").on("click", ".deleteheaderbtn", function(){
        deletepageonloadhit()
    })

    function deletepageonloadhit() {
        obj = {}
        obj.user_id = useridd
        console.log(obj);
        var form = new FormData();
        form.append("file", JSON.stringify(obj));
        var settings11 = {
            "async": true,
            "crossDomain": true,
            "url": aws_url+'delete_planner_onload',
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

                data = msg;
                // console.log(data);

                $.each(data ,function(key,i){
                    $('#select').append('<option value='+key+'>'+key+'</option>')
                })

                var $dropdown = $('#select');
                console.log($dropdown);
                $dropdown.on('change', function() {
                    console.log($dropdown);
                    $('#select0').empty();
                    // var a=data[$dropdown.val()];
                    var a=data[$.trim($dropdown[0].selectedOptions[0].text)];
                    $.each(a,function(j){
                        console.log(a[j]);
                        $('#select0').append('<option value='+a[j]+'>'+a[j]+'</option>')
                    })
                });

                $dropdown.trigger('change');
            }
        })
    }

    $("body").on("click", ".deletesavebtn", function(){


        client_delete = []
        deleteclient = $(".clientdelete").select2('data');

        for (var i = 0; i < deleteclient.length; i++) {
            client_delete.push(deleteclient[i].text);
        }

        var deletclientnames = $.unique(client_delete);


        email = $('.deletemails').val()
        clientdelete = $('.clientdelete').val()
        objjj = {}
        objjj.email = email
        objjj.clientname = $.unique(deletclientnames);
        objjj.user_id = useridd
        console.log(objjj);
        var form = new FormData();
        form.append("file", JSON.stringify(objjj));
        var settings11 = {
            "async": true,
            "crossDomain": true,
            "url": aws_url+'delete_save_button',
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
                    content: 'Removed Succesfully'
                });
                setInterval(function(){  location.reload(); }, 1500);
            }

        })

    })

})
