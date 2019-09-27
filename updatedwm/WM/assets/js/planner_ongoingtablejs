$(document).ready(function () {
  onpageloadhit();
  var location_key, client_key;
  count = 0;
  function onpageloadhit() {
    sendObj = {};
      var form = new FormData();
      form.append("file", JSON.stringify(sendObj));
      var settings11 = {
        "async": true,
        "crossDomain": true,
        "url": 'http://10.0.0.197:6767/Location_Data_Request',
        "method": "POST",
        "processData": false,
        "contentType": false,
        "mimeType": "multipart/form-data",
        "data": form
      };
      $.ajax(settings11).done(function (msg) {
        msg = JSON.parse(msg);
          console.log(msg);
          for( key in msg){
              console.log(msg[key], key);
              $(".locationClass").append('<option key='+key+' value='+msg[key]+' class="getClass get_location-'+count+'">'+msg[key]+'</option>')
              count++
          }
        })
 }

      $("body").on("change", ".locationClass", function(){
          location_key = $(this).find("option:selected").attr('key');
          // alert(location_key)
          obj = {};
          obj.id = location_key;
            var form = new FormData();
            form.append("file", JSON.stringify(obj));
            var settings11 = {
              "async": true,
              "crossDomain": true,
              "url": 'http://10.0.0.197:6767/Client_Data_Request',
              "method": "POST",
              "processData": false,
              "contentType": false,
              "mimeType": "multipart/form-data",
              "data": form
            };
            $.ajax(settings11).done(function (msg) {
              msg = JSON.parse(msg);
              console.log(msg);
              for( key in msg){
                  console.log(msg[key], key);
                  $(".clientClass").append('<option key='+key+' value='+msg[key]+' class="getClass get_client-'+count+'">'+msg[key]+'</option>')
                  count++
              }
          })
            })


        $("body").on("change", ".clientClass", function(){
          $(".clientleadClass").empty();
          client_key = $(this).find("option:selected").attr('key');
          client_name = $(this).find("option:selected").val();
            console.log(client_name);
            obj = {};
            obj.id = client_key;
            obj.client_name = client_name;
            console.log(obj);
              var form = new FormData();
              form.append("file", JSON.stringify(obj));
              var settings11 = {
                "async": true,
                "crossDomain": true,
                "url": 'http://10.0.0.197:6767/Planner_Profile_Client_Lead',
                "method": "POST",
                "processData": false,
                "contentType": false,
                "mimeType": "multipart/form-data",
                "data": form
              };
            $.ajax(settings11).done(function (msg) {
              msg = JSON.parse(msg);
              console.log(msg);
              for(key in msg){
                  // console.log(msg[key], key);
                  // msg[key] = msg[key].replace(/,/g , '');
                  // console.log(msg[key]);
                  clientName = key;
                  console.log(msg[key]);
                  var msg_ = msg[key];
                  for (var i = 0; i < msg_.length; i++) {

                    $(".clientleadClass").append('<option key='+clientName+' value='+msg_[i]+' class="getClass get_clientlead-'+count+'">'+clientName+'---'+msg_[i]+'</option>')
                  }

                  count++
              }
          })
            })
        $("body").on("click", ".createbtn", function(){
          client_key = $(".locationClass").find("option:selected").attr('key');
          location_key = $(".clientClass").find("option:selected").attr('key');
          webuserid = 1;
          createdbyid = 1;
          obj = {};
          obj.client_key = client_key;
          obj.location_key = location_key;
          obj.webuserid = webuserid;
          obj.createdbyid = createdbyid;
          console.log(obj);
          var form = new FormData();
          form.append("file", JSON.stringify(obj));
          var settings11 = {
            "async": true,
            "crossDomain": true,
            "url": 'http://10.0.0.197:6767/Create_Profile',
            "method": "POST",
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
            "data": form
          };
          $.ajax(settings11).done(function (msg) {
            msg = JSON.parse(msg);
            console.log(msg);

          })
        })


})
