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
            console.log(msg);
            if (msg = "updated") {
                swal('updated succesfully');
                setInterval(function(){  location.reload(); }, 1500);
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
            console.log(msg);

            data = msg
            console.log(data);
            $(".clientdelete").html('')
            $(".clientdelete").append("<option value='0'>--Select ClientName---</option>")

            $.each(data ,function(key,i){
                console.log(key);
                $('.clientdelete').append('<option value='+key+'>'+key+'</option>')
            })

            var $dropdown = $('.clientdelete');
            console.log($dropdown);
            $dropdown.on('change', function() {
                console.log($dropdown);
                $('.deletemails').empty();
                var a=data[$dropdown.val()];

                $(".deletemails").html('')
                $(".deletemails").append("<option value='0'>---Select UserEmail---</option>")

                $.each(a,function(j){
                    console.log(a[j]);
                    $('.deletemails').append('<option value='+a[j]+'>'+a[j]+'</option>')
                })
            });
            $dropdown.trigger('change');


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
            console.log(msg);
            swal("Removed succesfully!!..")
            setInterval(function(){  location.reload(); }, 1500);

        })

    })

})
