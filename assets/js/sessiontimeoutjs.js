
var session_TimeOut = 900; //seconds
var _idleSecondsTimer = null;
var secountsCounter = 0;

document.onclick = function () {
 secountsCounter = 0;
};

document.onmousemove = function () {
  secountsCounter = 0;
};

document.onkeypress = function () {
  secountsCounter = 0;
};

var data = window.setInterval(checkSessionTime, 1000);
var currentdate = new Date().toLocaleString();
var sessionidddd = sessionStorage.getItem("sessionidd");

function checkSessionTime() {
  secountsCounter++;
  // console.log(secountsCounter);
  if(secountsCounter==20){
    obj = {}
    obj.sessionid = sessionidddd
    obj.loggedoutdatetime = currentdate
    obj.issessiontimedout = "true"
    // console.log(obj);
    var form = new FormData();
    form.append("file", JSON.stringify(obj));
    var settings11 = {
      "async": true,
      "crossDomain": true,
      "url": aws_url+'logout_button',
      "method": "POST",
      "processData": false,
      "contentType": false,
      "mimeType": "multipart/form-data",
      "data": form
    };
    $.ajax(settings11).done(function (msg) {
      msg = JSON.parse(msg);
      console.log(msg);
            if (msg == "logoutdone") {
            // window.location.href="index.php";
            authContext.logOut();
        }

  })

  }
  if (secountsCounter >= session_TimeOut) {
    window.clearInterval(secountsCounter);
    var dat = new Date();
  window.location.href = "index.php";
      // authContext.logOut();

  secountsCounter = 0;
  }
}
