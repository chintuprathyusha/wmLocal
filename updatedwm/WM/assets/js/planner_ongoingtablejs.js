$(document).ready(function () {
  onpageloadhit();
  function onpageloadhit() {
    // sendObj = {};
    // sendObj = {};
    //  sendObj.userid = 1;
    //   var form = new FormData();
    //   form.append("file", JSON.stringify(sendObj));
    //   var settings11 = {
    //     "async": true,
    //     "crossDomain": true,
    //     "url": 'http://10.0.0.197:6767/Ongoing_plans_Data_Request',
    //     "method": "POST",
    //     "processData": false,
    //     "contentType": false,
    //     "mimeType": "multipart/form-data",
    //     "data": form
    //   };
    //   $.ajax(settings11).done(function (msg) {
    //     msg = JSON.parse(msg);
    msg ={"Campaign_ids": [{"Id": 2, "Name": "India"}, {"Id": 3, "Name": "India - Urban"}, {"Id": 4, "Name": "HSM"}, {"Id": 5, "Name": "HSM - Urban"}, {"Id": 6, "Name": "HSM Excl East - Urban"}, {"Id": 8, "Name": "Mum/Del/Pune/Che/Hyd/Ahm/Blr/Kol"}, {"Id": 9, "Name": "Metros"}, {"Id": 10, "Name": "AP / Telangana"}, {"Id": 11, "Name": "AP / Telangana - Urban"}, {"Id": 12, "Name": "AP / Telangana - Rural"}, {"Id": 13, "Name": "Karnataka - Urban"}, {"Id": 14, "Name": "Karnataka - Urban"}, {"Id": 15, "Name": "Kerala - Urban"}, {"Id": 16, "Name": "Mah / Goa - Urban"}, {"Id": 17, "Name": "Pun/Cha - Urban"}, {"Id": 18, "Name": "TN - Rural"}], "Client": {"Google": ["aaa", "bbb", "ccc"]}}
          console.log(msg);
         campign_id = msg.Campaign_ids
         clients_brandnames = msg.Client
          // for( key in campign_id){
          //     $(".campign_idsclass").append('<option key='+key+' value='+ key+' class="getClass get_location">'+campign_id.Name+'</option>')
          // }
          var vall
          $.each(campign_id, function (k, val) {
            console.log(val);
            vall = val;
             console.log(vall.Name);
             console.log(vall.Id);
               $(".campign_idsclass").append('<option key='+vall.Id+' value='+vall.Name+' class="getClass dropdowncampignid">'+vall.Name+'</option>')
              // $.each(v, function (kk, vv){
              //   console.log(vv);
              //      // $(".campign_idsclass").append('<option key='+kk+' value='+vv+' class="getClass dropdowncampignid">'+vv+'</option>')
              //    })
              // for( key in vall){
              //   console.log(vall.Name);
              // }
            })
            $.each(clients_brandnames, function (k, v) {
                  console.log(k);
                  console.log(v);
                     $(".clientnameclass").append('<option key='+k+' value='+k+' class="getClass dropdownclients">'+k+'</option>')
                     for (var i = 0; i < v.length; i++) {
                        $(".brandnmaeclass").append('<option key='+ v[i]+' value='+ v[i]+' class="getClass dropdownbrands">'+ v[i]+'</option>')
                     }

              })



              // var $dropdown = $('.clientnameclass');
              //                 console.log($dropdown);
              //                 $dropdown.on('change', function() {
              //                     console.log($dropdown);
              //                  $('.brandnmaeclass').empty();
              //                    var a = msg[$dropdown.val()];
              //                    $.each(a,function(j){
              //                      console.log(a[j]);
              //                    $('.brandnmaeclass').append('<option value='+a[j]+'>'+a[j]+'</option>')
              //                  })
              //                })


        }
  $("body").on("change",".campign_idsclass", function(){
    console.log($('.dropdowncampignid').attr('key'));

  })


  $("body").on("click",".gobtnn", function(){
    var campign_idd = $('.dropdowncampignid').attr('key');
    alert(campign_idd)
    startdate = $('.startdateclass').val()
    enddate = $('.enddateclass').val()
    clientname =$('.clientnameclass').val()
    brandname =$('.brandnmaeclass').val()
    obj = {};
      obj.campignid = campign_idd;
      obj.startdate = startdate;
      obj.enddate = enddate;
      obj.clientname = clientname;
      obj.brandname = brandname;
      console.log(obj);
      // var form = new FormData();
      //    form.append("file", JSON.stringify(obj));
      //    var settings11 = {
      //      "async": true,
      //      "crossDomain": true,
      //      "url": 'http://10.0.0.197:6767/Client_Data_Request',
      //      "method": "POST",
      //      "processData": false,
      //      "contentType": false,
      //      "mimeType": "multipart/form-data",
      //      "data": form
      //    };
          // $.ajax(settings11).done(function (msg) {
          //   msg = JSON.parse(msg);
          //          console.log(msg);
          // })
    })
 })


      // $("body").on("change", ".locationClass", function(){
      //     location_key = $(this).find("option:selected").attr('key');
      //     // alert(location_key)
      //     obj = {};
      //     obj.id = location_key;
      //       var form = new FormData();
      //       form.append("file", JSON.stringify(obj));
      //       var settings11 = {
      //         "async": true,
      //         "crossDomain": true,
      //         "url": 'http://10.0.0.197:6767/Client_Data_Request',
      //         "method": "POST",
      //         "processData": false,
      //         "contentType": false,
      //         "mimeType": "multipart/form-data",
      //         "data": form
      //       };
      //       $.ajax(settings11).done(function (msg) {
      //         msg = JSON.parse(msg);
      //         console.log(msg);
      //         for( key in msg){
      //             console.log(msg[key], key);
      //             $(".clientClass").append('<option key='+key+' value='+msg[key]+' class="getClass get_client-'+count+'">'+msg[key]+'</option>')
      //             count++
      //         }
      //     })
      //       })
      //
      //
      //   $("body").on("change", ".clientClass", function(){
      //     $(".clientleadClass").empty();
      //     client_key = $(this).find("option:selected").attr('key');
      //     client_name = $(this).find("option:selected").val();
      //       console.log(client_name);
      //       obj = {};
      //       obj.id = client_key;
      //       obj.client_name = client_name;
      //       console.log(obj);
      //         var form = new FormData();
      //         form.append("file", JSON.stringify(obj));
      //         var settings11 = {
      //           "async": true,
      //           "crossDomain": true,
      //           "url": 'http://10.0.0.197:6767/Planner_Profile_Client_Lead',
      //           "method": "POST",
      //           "processData": false,
      //           "contentType": false,
      //           "mimeType": "multipart/form-data",
      //           "data": form
      //         };
      //       $.ajax(settings11).done(function (msg) {
      //         msg = JSON.parse(msg);
      //         console.log(msg);
      //         for(key in msg){
      //             // console.log(msg[key], key);
      //             // msg[key] = msg[key].replace(/,/g , '');
      //             // console.log(msg[key]);
      //             clientName = key;
      //             console.log(msg[key]);
      //             var msg_ = msg[key];
      //             for (var i = 0; i < msg_.length; i++) {
      //
      //               $(".clientleadClass").append('<option key='+clientName+' value='+msg_[i]+' class="getClass get_clientlead-'+count+'">'+clientName+'---'+msg_[i]+'</option>')
      //             }
      //
      //             count++
      //         }
      //     })
      //       })
      //   $("body").on("click", ".createbtn", function(){
      //     client_key = $(".locationClass").find("option:selected").attr('key');
      //     location_key = $(".clientClass").find("option:selected").attr('key');
      //     webuserid = 1;
      //     createdbyid = 1;
      //     obj = {};
      //     obj.client_key = client_key;
      //     obj.location_key = location_key;
      //     obj.webuserid = webuserid;
      //     obj.createdbyid = createdbyid;
      //     console.log(obj);
      //     var form = new FormData();
      //     form.append("file", JSON.stringify(obj));
      //     var settings11 = {
      //       "async": true,
      //       "crossDomain": true,
      //       "url": 'http://10.0.0.197:6767/Create_Profile',
      //       "method": "POST",
      //       "processData": false,
      //       "contentType": false,
      //       "mimeType": "multipart/form-data",
      //       "data": form
      //     };
      //     $.ajax(settings11).done(function (msg) {
      //       msg = JSON.parse(msg);
      //       console.log(msg);
      //
      //     })
      //   })


// })
