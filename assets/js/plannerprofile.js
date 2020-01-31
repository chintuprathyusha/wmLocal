$(document).ready(function () {
    $('.loading').show();
    var isnewuser = '';
    var useremail ='';
    var plan_id='';
    var role = sessionStorage.getItem('role');
    var userid = sessionStorage.getItem('userid');
    var isprofile = sessionStorage.getItem('isprofile');
    var clinet_planner_flag = "true";

    var prev =  JSON.parse(localStorage.getItem("allprevialges"))
    var edituserprofile_new  = prev.hasOwnProperty('edituserprofile');
    // var edituserprofile_new = 'edituserprofile' in prev;
    console.log(edituserprofile_new)
    if (edituserprofile_new == false) {
        clinet_planner_flag = "false";
    }
    else {
        clinet_planner_flag = "true";
    }

    // alert(prev.hasOwnProperty('edituserprofile'))
    // alert(edituserprofile_new)
    // alert(edituserprofile_new)
    var selectedValues;
    $(".CLemId").show();
    $('.select2-search').select2().next().hide();
    useremail = sessionStorage.getItem('useremail')
    $('.email').append('<input type="email" name="email" value='+useremail+' readonly class="bg form-control" id="email" required placeholder="Enter a valid email address">')
    // $('.clientClass__').hide();
    $('.clientClass__').select2().next().hide();
    $('.clientClass').select2().next().hide();
    // $('.clientClass').css('display', "none");
    // $('.clientClass').hide();
    var freezeClientEmail, freezeLoc, freezeClientLead, freezeClient;
    $(".update_btn").hide();
    $('.locationClass').attr("required", "true");
    isnewuser = sessionStorage.getItem('isnewuser');
    console.log(isnewuser);
    if(!(plan_id=='')){
        get_freezeDetails();
    }

    // if (isnewuser == "false") {
    //     if (role=="ClientLead") {
    //         if (isprofile == "true") {
    //             freezeforclientlead();
    //         }
    //         else {
    //             onpageloadhit(isnewuser);
    //             $('.clientClass').select2().next().show();
    //             $('.clientClass').show();
    //         }
    //         // $('.select_').hide();
    //     }
    //     if(role  == "Planner") {
    //         if (isprofile == "true") {
    //             get_freezeDetails();
    //         }
    //         else {
    //             $('.clientClass__').show();
    //             $('.clientClass__').select2().next().show();
    //             // $('.clientClass').hide();
    //             onpageloadhit(isnewuser);
    //         }
    //
    //     }
    // }
    // else {
    //     onpageloadhit(isnewuser);
    //
    // }

    if (isnewuser == "false") {
        if (clinet_planner_flag == "true") {
            if (isprofile == "true") {
                freezeforclientlead();
            }
            else {
                onpageloadhit(isnewuser);
                $('.clientClass').select2().next().show();
                $('.clientClass').show();
            }
            // $('.select_').hide();
        }
        // if(edituserprofile_new == "false") {
        else {
            if (isprofile == "true") {
                get_freezeDetails();
            }
            else {
                $('.clientClass__').show();
                $('.clientClass__').select2().next().show();
                // $('.clientClass').hide();
                onpageloadhit(isnewuser);
            }

        }
    }
    else {
        onpageloadhit(isnewuser);

    }


    $("body").on("click", ".edit_createprofile", function(){
        $(".freezeLoc").hide();
        $(".freezeclient").hide();
        $(".freezeClientLead").hide();
        $(".create_plan").attr("disabled", false);
        $(".select2").removeClass('hide');
        $(".clientleadClass").show();
        $("clientleadClass").removeClass('hide');
        $(".getClass").removeClass('bg')
        onpageloadhit();
    })


    function get_freezeDetails(){
        $('.CLemId').hide();
        // $('.select_').hide();
        sendObj = {};
        sendObj.user_id = userid;
        console.log(sendObj);
        var form = new FormData();
        form.append("file", JSON.stringify(sendObj));
        var settings11 = {
            "async": true,
            "crossDomain": true,
            "url": aws_url+'Create_Profile_freeze',
            "method": "POST",
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
            "data": form
        };
        $.ajax(settings11).done(function (msg) {
            msg = JSON.parse(msg);
            $('.loading').hide();
            console.log(msg);
            if (msg.message == "fail") {
                $.alert({
                    title: 'Alert',
                    content: 'Oops ! something went wrong',
                    animation: 'scale',
                    closeAnimation: 'scale',
                    opacity: 0.5,
                    buttons: {
                        okay: {
                            text: 'Okay',
                            btnClass: 'btn-primary',
                            action: function () {
                                window.location.href="error.php"
                            }
                        }
                    }
                });
            }
            else {
                debugger;
                console.log(msg.Client);

                if (msg.Client == "No Client") {
                    $.alert({
                        title: 'Alert',
                        content: 'No clients assigned, pls request the client lead to assign a client.',
                        animation: 'scale',
                        closeAnimation: 'scale',
                        opacity: 0.5,
                        buttons: {
                            okay: {
                                text: 'Okay',
                                btnClass: 'btn-primary',

                            }
                        }
                    });

                    $(".bg").css("background-color", "#d6d6d6");
                    $(".getClass").addClass('bg')
                    $(".create_plan").attr("disabled", true);
                    $(".create_plan").prop("disabled", true);
                    $(".select2").addClass('hide');
                    $(".text-muted").removeClass('d-block');
                    $(".text-muted").addClass('hide');
                    $(".clientleadClass").hide();
                    $("clientleadClass").addClass('hide');
                    console.log(msg);
                    $('.select_').show();
                    freezeClientEmail = msg.Email_ID;
                    freezeLoc = msg.Location;
                    freezeClient = msg.Client;
                    freezeClientLead = msg.Client_Lead;
                    $(".freezeLoc").append('<p key='+freezeLoc+' value='+freezeLoc+' class="getClass form-control" readonly style="background-color:#d6d6d6;">'+freezeLoc+'</p>')
                    // for (var i = 0; i < freezeClient.length; i++) {
                        $(".freezeclient").append('<textarea   class="getClass form-control" readonly style="background-color:#d6d6d6;"></textarea>')
                    // }
                    // $(".freezeclient").append('<input key='+freezeClient+' value='+freezeClient+' class="getClass form-control" readonly style="background-color:#d6d6d6;margin-top:10px;">')
                    for (var i = 0; i < freezeClientLead.length; i++) {
                        $(".freezeClientLead").append('<textarea key='+freezeClientLead[i]+' value='+freezeClientLead[i]+' class="getClass form-control" readonly style="background-color:#d6d6d6;">'+freezeClientLead[i]+'</textarea>')
                    }


                }
            else {
    $(".bg").css("background-color", "#d6d6d6");
    $(".getClass").addClass('bg')
    $(".create_plan").attr("disabled", true);
    $(".create_plan").prop("disabled", true);
    $(".select2").addClass('hide');
    $(".text-muted").removeClass('d-block');
    $(".text-muted").addClass('hide');
    $(".clientleadClass").hide();
    $("clientleadClass").addClass('hide');
    console.log(msg);
    $('.select_').show();
    freezeClientEmail = msg.Email_ID;
    freezeLoc = msg.Location;
    freezeClient = msg.Client;
    freezeClientLead = msg.Client_Lead;
    $(".freezeLoc").append('<p key='+freezeLoc+' value='+freezeLoc+' class="getClass form-control" readonly style="background-color:#d6d6d6;">'+freezeLoc+'</p>')
    for (var i = 0; i < freezeClient.length; i++) {
        $(".freezeclient").append('<textarea key='+freezeClient[i]+' value='+freezeClient[i]+' class="getClass form-control" readonly style="background-color:#d6d6d6;">'+freezeClient[i]+'</textarea>')
    }
    // $(".freezeclient").append('<input key='+freezeClient+' value='+freezeClient+' class="getClass form-control" readonly style="background-color:#d6d6d6;margin-top:10px;">')
    for (var i = 0; i < freezeClientLead.length; i++) {
        $(".freezeClientLead").append('<textarea key='+freezeClientLead[i]+' value='+freezeClientLead[i]+' class="getClass form-control" readonly style="background-color:#d6d6d6;">'+freezeClientLead[i]+'</textarea>')
    }


}



            }
        })
    }

    $('body').on('change', '.locationClass', function(){
        $('.select_').show();
        if (clinet_planner_flag == "true") {
            $('.CLemId').hide();
            $('.freezeClientLead').hide()
        }
        $('.freezeclient').hide();
        $(".create_plan").attr("disabled", false);
    })

    function freezeforclientlead(){
        $('.CLemId').hide();
        // $('.select_').css('display', 'none');
        $(".update_btn").show();
        $(".select2").removeClass('hide');
        $(".clientleadClass").show();
        $("clientleadClass").removeClass('hide');
        $(".create_plan").attr("disabled", true);
        $('.locationClass').prop("disabled", true);
        $('.create_btn').prop("disabled", false);

        $('.locationClass span').css('background-color', '#d6d6d6');
        sendObj = {};
        sendObj.user_id = userid;
        console.log(sendObj);
        var form = new FormData();
        form.append("file", JSON.stringify(sendObj));
        var settings11 = {
            "async": true,
            "crossDomain": true,
            "url": aws_url+'Create_Profile_freeze',
            "method": "POST",
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
            "data": form
        };
        $.ajax(settings11).done(function (msg) {
            msg = JSON.parse(msg);
            $('.loading').hide();
            console.log(msg);
            if (msg.message == "fail") {
                $.alert({
                    title: 'Alert',
                    content: 'Oops ! something went wrong',
                    animation: 'scale',
                    closeAnimation: 'scale',
                    opacity: 0.5,
                    buttons: {
                        okay: {
                            text: 'Okay',
                            btnClass: 'btn-primary',
                            action: function () {
                                window.location.href="error.php"
                            }
                        }
                    }
                });
            }
            else {
                freezeClientEmail = msg.Email_ID;
                freezeLoc = msg.Location;
                freezeClient = msg.Client;

                console.log(freezeClient)
                freezeClientLead = msg.Client_Lead;
                allclients = msg.Client_Every;
                onpageloadhit()
                // mycode
                $(".freezeclient").append('<p key='+freezeClient+' value='+freezeClient+' class="getClass form-control"  style="background-color:#d6d6d6;">'+freezeClient+'</p>')
                for (var i = 0; i < allclients.length; i++) {
                    $(".clientClass").append('<option key='+allclients[i]+' value='+allclients[i]+' style="background-color:#d6d6d6;" class="getClass form-control">'+allclients[i]+'</option>')
                }

                for (var i = 0; i < freezeClientLead.length; i++) {
                    $(".freezeClientLead").append('<textarea key='+freezeClientLead[i]+' value='+freezeClientLead[i]+' class="getClass form-control"  style="background-color:#d6d6d6;" readonly>'+freezeClientLead[i]+'</textarea>')
                }
            }
        })
    }


    var location_key, client_key, get_userclientId;
    count = 0;
    function onpageloadhit(isnew) {
        if (clinet_planner_flag == "false") {
            $('.clientClass__').select2().next().show();
            $('.clientClass').select2().next().hide();
        }
        else {
            $('.clientClass').select2().next().show();
            $('.clientClass__').select2().next().hide();
        }
        sendObj = {};
        var form = new FormData();
        form.append("file", JSON.stringify(sendObj));
        var settings11 = {
            "async": true,
            "crossDomain": true,
            "url": aws_url+'Location_Data_Request',
            "method": "POST",
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
            "data": form
        };
        $.ajax(settings11).done(function (msg) {
            msg = JSON.parse(msg);
            console.log(msg);
            $(".loading").hide();
            if(msg.message == "fail"){
                $.alert({
                    title: 'Alert',
                    content: 'Oops ! something went wrong',
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
                if (clinet_planner_flag == "true") {
                    for(key in msg){
                        sel = ''
                        if (freezeLoc == msg[key]) {
                            sel='selected="selected"'
                            console.log(msg[key], key);
                        }
                        count++
                        $(".locationClass").append('<option '+sel+' key='+key+' value='+msg[key]+' class="getClass get_location-'+count+' clientCHangeLoc">'+msg[key]+'</option>')
                    }
                }
                else {
                    for( key in msg){
                        console.log(msg[key], key);
                        $(".locationClass").append('<option key='+key+' value='+msg[key]+' class="getClass get_location-'+count+'">'+msg[key]+'</option>')
                        count++
                    }
                }
            }
        })
    }



    location_array = []
    $("body").on("change", ".multilocclass", function(){
        $(".clientClass").select().next().show();
        $(".clientClass").empty();
        $(".clientleadClass").empty();
        // location_key = $(this).val();
        location_key = $(this).select2('data');
        console.log(location_key)
        for (var i = 0; i < location_key.length; i++) {
            location_array.push(location_key[i].text);

        }

        // console.log(location_key);
        $('.loading').show();
        // alert(location_array)
        // location_array.push(location_key);
        obj = {};
        obj.location_name = location_array;
        var form = new FormData();
        form.append("file", JSON.stringify(obj));
        var settings11 = {
            "async": true,
            "crossDomain": true,
            "url": aws_url+'Client_Data_Request',
            "method": "POST",
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
            "data": form
        };
        $.ajax(settings11).done(function (msg) {
            msg = JSON.parse(msg);

            setInterval(function(){
                $('.loading').hide(); }, 1000);
                console.log(msg);
                if (msg.message=="fail") {
                    $.alert({
                        title: 'Alert',
                        content: 'Oops ! something went wrong',
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
                    if (clinet_planner_flag == "true") {
                        for(key in msg){
                            sel = ''
                            if (freezeClient == msg[key]) {
                                sel='selected="selected"'
                                console.log(msg[key], key);
                            }
                            console.log(msg[key], key);
                            $(".clientClass").append('<option '+selc+'key='+key+' value='+msg[key]+' class="getClass get_client-'+count+'">'+msg[key]+'</option>')
                            count++
                        }
                    }
                    else {
                        for(key in msg){
                            console.log(msg[key], key);
                            $(".clientClass").append('<option key='+key+' value='+msg[key]+' class="getClass get_client-'+count+'">'+msg[key]+'</option>')
                            count++
                        }
                    }
                    $(".CLemId").show();
                }
            })
        })

        $("body").on("change", ".locationClass", function(){
            location_array = [];
            $(".clientClass").empty();
            $('.clientClass__').empty();
            $(".clientleadClass").empty();
            if(clinet_planner_flag == "false"){
                $(".clientClass__").select().next().show();
            }
            else{
                $(".clientClass").select().next().show();
            }
            location_key = $(this).select2('data');
            console.log(location_key)
            for (var i = 0; i < location_key.length; i++) {
                location_array.push(location_key[i].text);

            }

            $('.loading').show();
            obj = {};
            obj.location_name = location_array;
            var form = new FormData();
            form.append("file", JSON.stringify(obj));
            var settings11 = {
                "async": true,
                "crossDomain": true,
                "url": aws_url+'Client_Data_Request',
                "method": "POST",
                "processData": false,
                "contentType": false,
                "mimeType": "multipart/form-data",
                "data": form
            };
            $.ajax(settings11).done(function (msg) {
                msg = JSON.parse(msg);
                setInterval(function(){
                    $('.loading').hide(); }, 1000);

                    console.log(msg);
                    if (msg.message=="fail") {
                        $.alert({
                            title: 'Alert',
                            content: 'Oops ! something went wrong',
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
                        if(clinet_planner_flag == "false"){
                            $(".clientClass__").empty();
                            optionn = '<option value="">Select Client</option>'
                            for( key in msg){
                                console.log(msg[key], key);
                                optionn += '<option key='+key+' value='+msg[key]+' class="getClass get_client-'+count+'">'+msg[key]+'</option>'
                                count++
                            }
                            $(".clientClass__").html(optionn)
                        }
                        else{
                            $(".clientClass").empty();
                            opt = '<option value="">Select Client</option>'
                            for( key in msg){
                                console.log(msg[key], key);
                                opt += '<option key='+key+' value='+msg[key]+' class="getClass get_client-'+count+'">'+msg[key]+'</option>'
                                count++
                            }
                            $(".clientClass").html(opt)
                        }


                        $(".CLemId").show();
                    }
                })
            })
            var selectedValues_;
            $(".clientClass").empty();
            $("body").on("change", ".clientClass", function(){
                debugger
                $('.freezeClientLead').hide();
                $('.loading').show();

                client_key = $(this).find("option:selected").attr('key');
                client__ = []
                selectedValues_ = $(".clientClass").select2('data');

                for (var i = 0; i < selectedValues_.length; i++) {
                    client__.push(selectedValues_[i].text);

                }
                obj = {};
                obj.clientNames = client__;
                var form = new FormData();
                form.append("file", JSON.stringify(obj));
                var settings11 = {
                    "async": true,
                    "crossDomain": true,
                    "url": aws_url+'Planner_Profile_Client_Lead',
                    "method": "POST",
                    "processData": false,
                    "contentType": false,
                    "mimeType": "multipart/form-data",
                    "data": form
                };
                $.ajax(settings11).done(function (msg) {
                    msg = JSON.parse(msg);
                    console.log(msg);
                    $(".clientleadClass").empty();
                    setInterval(function(){
                        $('.loading').hide(); }, 1000);
                        if (msg.message=="fail") {
                            $.alert({
                                title: 'Alert',
                                content: 'Oops ! something went wrong',animation: 'scale',
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
                            for(key in msg){
                                console.log(msg[key], key);
                                console.log(msg[key]);
                                $(".clientleadClass").append('<textarea class="form-control"  readonly="readonly"  key='+key+' value='+msg[key]+' class="getClass get_clientlead-'+count+'">'+msg[key]+'</textarea>')
                                count++
                            }
                            $(".CLemId").hide();
                        }
                    })
                })



                var selectedValues__;
                $(".clientClass__").empty();
                $("body").on("change", ".clientClass__", function(){
                    $('.freezeClientLead').hide();
                    $('.loading').show();
                    client_key = $(this).find("option:selected").attr('key');
                    newclient__ = []
                    selectedValues__ = $(".clientClass__").select2('data');

                    for (var i = 0; i < selectedValues__.length; i++) {
                        newclient__.push(selectedValues__[i].text);

                    }
                    obj = {};
                    obj.clientNames = newclient__;
                    var form = new FormData();
                    form.append("file", JSON.stringify(obj));
                    var settings11 = {
                        "async": true,
                        "crossDomain": true,
                        "url": aws_url+'Planner_Profile_Client_Lead',
                        "method": "POST",
                        "processData": false,
                        "contentType": false,
                        "mimeType": "multipart/form-data",
                        "data": form
                    };
                    $.ajax(settings11).done(function (msg) {
                        msg = JSON.parse(msg);
                        console.log(msg);
                        $(".clientleadClass").empty();
                        setInterval(function(){
                            $('.loading').hide(); }, 1000);
                            if (msg.message=="fail") {
                                $.alert({
                                    title: 'Alert',
                                    content: 'Oops ! something went wrong',
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
                                for(key in msg){
                                    $(".clientleadClass").append('<textarea class="form-control" key='+key+' value='+msg[key]+'  readonly="readonly"  class="getClass get_clientlead-'+count+'">'+msg[key]+'</textarea>')
                                    count++
                                }
                                $(".CLemId").hide();
                            }
                        })
                    })


                    var selectedValues__new_;
                    $("body").on("click", ".create_plan", function(){
                        locationvalue = []
                        location_val = $('.locationClass').val()
                        locationvalue.push(location_val);


                        debugger
                        val = []
                        selectedValues = $(".clientClass").select2('data');

                        for (var i = 0; i < selectedValues.length; i++) {
                            val.push(selectedValues[i].text);

                        }

                        val_new = []
                        selectedValues__new_ = $(".clientClass__").select2('data');
                        selectedValues__new_1 = $(".clientClass__").val();

                        for (var i = 0; i < selectedValues__new_.length; i++) {
                            val_new.push(selectedValues__new_[i].text);

                        }
                        if(clinet_planner_flag=="false"){
                            // if (location_array.length == 0 || val_new.length == 0) {
                            if (location_array.length == 0 || selectedValues__new_1 == '') {
                                $.alert({
                                    title: 'Alert',
                                    content: 'Fields should not be empty',
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
                                sendObj = {};
                                sendObj.CreatedBy = userid;
                                sendObj.location_key = locationvalue;
                                sendObj.UserClientId = userid;
                                sendObj.ClientId = val_new;
                                console.log(sendObj);

                                var form = new FormData();
                                form.append("file", JSON.stringify(sendObj));
                                var settings11 = {
                                    "async": true,
                                    "crossDomain": true,
                                    "url": aws_url+'Create_Profile',
                                    "method": "POST",
                                    "processData": false,
                                    "contentType": false,
                                    "mimeType": "multipart/form-data",
                                    "data": form
                                };
                                $.ajax(settings11).done(function (msg) {
                                    msg = JSON.parse(msg);
                                    createplanid = msg.ProfileId
                                    alert(userid)
                                    setInterval(function(){
                                        $('.loading').hide(); }, 1000);
                                        if (msg.message == "fail") {
                                            $.alert({
                                                title: 'Alert',
                                                content: 'Oops ! something went wrong',
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
                                            $.alert({
                                                title: 'Alert',
                                                content: 'Profile Succesfully Created',
                                                animation: 'scale',
                                                closeAnimation: 'scale',
                                                opacity: 0.5,
                                                buttons: {
                                                    okay: {
                                                        text: 'Okay',
                                                        btnClass: 'btn-primary',
                                                        action: function(){
                                                                window.location.href = 'planner_createnewplan.php?type=new'                                                       }
                                                    }

                                                }
                                            });
                                            sessionStorage.setItem('isnewuser', false);
                                            $('input[type=email]').prop('readonly', true);
                                            $("#email").prop('readonly', true);
                                            $("#email").css('background', '#ccc');
                                            $('.select2').prop('disabled', true);
                                            $(".select2-selection--multiple").css('background', '#ccc');
                                            $(".select2-selection--multiple").prop('disabled', true);
                                            $('.select2-selection').prop('readonly', true);
                                            $('.select2-selection').css('background', '#ccc');
                                            $('.select2-hidden-accessible').prop('disabaled', true);
                                            $('#select2-select2-bj-container').prop('readonly', true);
                                            $('input[type=text]').attr('readonly','readonly');
                                            $('.clientleadClass textarea').css('background', '#ccc');
                                            $('select').prop('disabled', true);
                                            $(".create_plan").prop("disabled", true);
                                            $('.clientleadClass textarea').attr('readonly','readonly');
                                            $('.select2-selection__rendered').css('color', '#000')
                                            sessionStorage.setItem('isprofile', true);

                                        }
                                    })
                                }
                            }
                            else{
                                debugger
                                if (val.length == 0) {
                                    $.alert({
                                        title: 'Alert',
                                        content: 'Fields should not be empty',
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

                                    sendObj = {};
                                    sendObj.CreatedBy = userid;
                                    sendObj.location_key = locationvalue;
                                    sendObj.UserClientId = userid;
                                    sendObj.ClientId = val;
                                    console.log(sendObj);

                                    var form = new FormData();
                                    form.append("file", JSON.stringify(sendObj));
                                    var settings11 = {
                                        "async": true,
                                        "crossDomain": true,
                                        "url": aws_url+'Create_Profile',
                                        "method": "POST",
                                        "processData": false,
                                        "contentType": false,
                                        "mimeType": "multipart/form-data",
                                        "data": form
                                    };
                                    $.ajax(settings11).done(function (msg) {
                                        msg = JSON.parse(msg);
                                        console.log(msg);

                                        setInterval(function(){
                                            $('.loading').hide(); }, 1000);
                                            if (msg.message == "fail") {
                                                $.alert({
                                                    title: 'Alert',
                                                    content: 'Oops ! something went wrong',
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
                                                $.alert({
                                                    title: 'Alert',
                                                    content: 'Succesfully Created ',
                                                    animation: 'scale',
                                                    closeAnimation: 'scale',
                                                    opacity: 0.5,
                                                    buttons: {
                                                        okay: {
                                                            text: 'Okay',
                                                            btnClass: 'btn-primary',
                                                            action: function(){
                                                                window.location.href = 'planner_createnewplan.php?type=new'                                                       }
                                                            }

                                                    }
                                                });

                                                sessionStorage.setItem('isnewuser', false);

                                                $('input[type=email]').prop('readonly', true);
                                                $("#email").prop('readonly', true);
                                                $("#email").css('background', '#ccc');
                                                $('.select2').prop('disabled', true);
                                                $(".select2-selection--multiple").css('background', '#ccc');
                                                $(".select2-selection--multiple").prop('disabled', true);
                                                $('.select2-selection').prop('readonly', true);
                                                $('.select2-selection').css('background', '#ccc');
                                                $('.select2-hidden-accessible').prop('disabaled', true);
                                                $('#select2-select2-bj-container').prop('readonly', true);
                                                $('input[type=text]').attr('readonly','readonly');
                                                $('.clientleadClass textarea').css('background', '#ccc');
                                                $('select').prop('disabled', true);
                                                $(".create_plan").prop("disabled", true);
                                                $('.clientleadClass textarea').attr('readonly','readonly');
                                                $('.select2-selection__rendered').css('color', '#000')
                                                sessionStorage.setItem('isprofile', true);
                                            }
                                        })
                                    }
                                }

                            })

                        })
