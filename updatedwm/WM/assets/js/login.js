$(document).ready(function () {
$("body").on("click", ".login_btn", function () {
    debugger
  username = $('.useridclass').val();
  password = $('.passwordclass').val();
  console.log(username+"...."+password);
  login(username, password)
})

function login(username, password) {
  sendObj = {};
  sendObj.username = username;
    var form = new FormData();
    form.append("file", JSON.stringify(sendObj));
    var settings11 = {
      "async": true,
      "crossDomain": true,
      "url": ' http://10.0.0.197:6767/data_uplink',
      "method": "POST",
      "processData": false,
      "contentType": false,
      "mimeType": "multipart/form-data",
      "data": form
    };
    $.ajax(settings11).done(function (msg) {
      msg = JSON.parse(msg);
        console.log(msg);
        login_array = []
        var value_msg;
        $.each(msg, function(key, value) {
          alert(value)
          value_msg = value;
          login_array.push(value_msg);
        });
        console.log(login_array);
            // if (msg[IsActive] == "1") {
              data_ = {};
              data_.userarray = login_array;
                // logging(login_array);
                console.log(data_);
                $.ajax({
                  url: 'assets/backgrounds/session_create.php',
                  method: 'POST',
                  data: data_,
                  success: function (redirect) {
                    window.location.href = redirect;
                  }
                })






              // login_obj = {};
              // login_obj.name = username;
              // login_obj.role = msg[0]['UserRole'];
              // arrs = [];
              // for (var i = 0; i < msg.length; i++) {
              //   arrs.push(msg[i]['WebPageName']);
              // }
              // $.ajax({
              //   url: 'assets/backgrounds/session_create.php',
              //   data: login_obj,
              //   method: 'POST',
              //   success: function (redirect) {
              //     window.location.href = redirect
              //   }
              // });

          })
        }




$('.login_input').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
      username = $('.useridclass').val();
      password = $('.passwordclass').val();
      login(username, password)

    }
  });

})
