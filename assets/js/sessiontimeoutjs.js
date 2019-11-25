//
// var session_TimeOut = 900; //seconds
// var _idleSecondsTimer = null;
// var secountsCounter = 0;
//
// document.onclick = function () {
//  secountsCounter = 0;
// };
//
// document.onmousemove = function () {
//   secountsCounter = 0;
// };
//
// document.onkeypress = function () {
//   secountsCounter = 0;
// };
//
// var data = window.setInterval(checkSessionTime, 1000);
// var currentdate = new Date().toLocaleString();
// var sessionidddd = sessionStorage.getItem("sessionidd");
// var sessionTimeOutvalue;
// var procductonurll;
//
//
//  $.ajax({
//             url: "configfile.json",
//             method: "GET",
//             dataType: 'json',
//             async : false,
//             success: function(data){
//                    msg =  data;
//                    console.log(data);
//                   sessionTimeOutvalue;
//                   procductonurll;
//                   console.log(msg.data[0].sessionTimeOut);
//                   sessionTimeOutvalue = msg.data[0].sessionTimeOut
//                   procductonurll = msg.data[0].productionurl
//                   cliendid = msg.data[0].clientId
//                   console.log(sessionTimeOutvalue);
//                   console.log(procductonurll);
//                   console.log(cliendid);
//                   console.log(typeof procductonurll);
//              },
//              error:function() {
//                  alert("Error")
//              }
//         });
//
//
// function checkSessionTime() {
//   secountsCounter++
//   // console.log("kkllkllk");
//   // console.log(sessionTimeOutvalue)
//   if(secountsCounter==sessionTimeOutvalue){
//     obj = {}
//     obj.sessionid = sessionidddd
//     obj.loggedoutdatetime = currentdate
//     obj.issessiontimedout = "true"
//     // console.log(obj);
//     var form = new FormData();
//     form.append("file", JSON.stringify(obj));
//     var settings11 = {
//       "async": true,
//       "crossDomain": true,
//       "url": aws_url+'logout_button',
//       "method": "POST",
//       "processData": false,
//       "contentType": false,
//       "mimeType": "multipart/form-data",
//       "data": form
//     };
//     $.ajax(settings11).done(function (msg) {
//       msg = JSON.parse(msg);
//       console.log(msg);
//             if (msg == "logoutdone") {
//             authContext.logOut();
//         }
//   })
//   }
//   if (secountsCounter >= session_TimeOut) {
//     window.clearInterval(secountsCounter);
//     var dat = new Date();
//   window.location.href = "index.php";
//
//   secountsCounter = 0;
//   }
// }
