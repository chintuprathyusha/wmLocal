$( document ).ready(function() {

    pageonloadhit()
    function pageonloadhit() {
        obj = {}
        console.log(obj);
        var form = new FormData();
        form.append("file", JSON.stringify(obj));
        var settings11 = {
            "async": true,
            "crossDomain": true,
            "url": aws_url+'help_file_names',
            "method": "POST",
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
            "data": form
        };
        $.ajax(settings11).done(function (msg) {
            msg = JSON.parse(msg);
            console.log(msg);
            count = 1;
            for (var i = 0; i < msg.length; i++) {
                $('.appendhere').append('<tr><td>'+count+'</td><td style="width: 446px;" >'+msg[i]+' </td><td><img  class="downloadbtn"  filename="'+msg[i]+'" src="assets/images/WhiteIcons/download.png" style="width:27px;cursor:pointer; "><td></tr>');

                count++
            }
            // $(".loading").hide();
            // if(msg.message == "fail"){
            //     $.alert({
            //         title: 'Error',
            //         content: 'Oops ! something went wrong, try again'
            //     });
            // }
            // else {
            //     msg1 = msg.records
            //     displaytable(msg1);
            //     data = msg.Client
            //     console.log(data);
            //     $.each(data ,function(key,i){
            //         $('#clientt').append('<option value='+key+'>'+key+'</option>')
            //     })
            //     var $dropdown = $('#clientt');
            //     console.log($dropdown);
            //     $dropdown.on('change', function() {
            //         console.log($dropdown);
            //         $('#brandd').empty();
            //         // var a=data[$dropdown.val()];
            //         var a=data[$.trim($dropdown[0].selectedOptions[0].text)];
            //         $.each(a,function(j){
            //             console.log(a[j]);
            //             $('#brandd').append('<option value='+a[j]+'>'+a[j]+'</option>')
            //         })
            //     });
            //     $dropdown.trigger('change');
            // }

        })
    }
    function dataTableMultiSort() {

        setTimeout(function () {
            dataTable___ = $('.datatable-multi-sorting').DataTable();
        }, 0);
    }

    $("body").on("keyup", "#searchHelp", function () {

                var input, filter, table, tr, td, i, txtValue;
                input = $(this).val();
                filter = input.toUpperCase();
                table = document.getElementById("searchTable");
                tr = table.getElementsByTagName("tr");
                for (i = 0; i < tr.length; i++) {
                    td = tr[i].getElementsByTagName("td")[1];
                    if (td) {
                        txtValue = td.textContent || td.innerText;
                        if (txtValue.toUpperCase().indexOf(filter) > -1) {
                            tr[i].style.display = "";
                        } else {
                            tr[i].style.display = "none";
                        }
                    }
                }
            })


    $("body").on("click", ".downloadbtn", function () {
         filename =  $(this).attr('filename');
         obj = {}
         obj.filename = filename
         console.log(obj);
         var form = new FormData();
         form.append("file", JSON.stringify(obj));
         var settings11 = {
             "async": true,
             "crossDomain": true,
             "url": aws_url+'download_help_file',
             "method": "POST",
             "processData": false,
             "contentType": false,
             "mimeType": "multipart/form-data",
             "data": form
         };
         $.ajax(settings11).done(function (msg) {
             console.log(msg);
             blob =  msg
             var xhr = new XMLHttpRequest()
                xhr.open("GET", url)
                xhr.responseType = 'blob'
                xhr.onload = function() {
                  window.saveAs(xhr.response, filename);
                }
                xhr.send()

         })


    })

    })