var authContext = new AuthenticationContext({
    clientId: 'd3cc7c04-0c90-44d5-b40b-7f10a5cce951',
    postLogoutRedirectUri: window.location
});

$.urlParam = function(name){
   var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
   if (results==null) {
       return null;
   }
   return decodeURI(results[1]) || 0;
}

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
 };



  $.ajax({
              url: "configfile.json",
              method: "GET",
              dataType: 'json',
              async : false,
              success: function(data){
                     msg =  data;
                     console.log(data);
                    console.log(msg.data[0].sessionTimeOut);
                    sessionTimeOutvalue = msg.data[0].sessionTimeOut
                    pythonurl = msg.data[0].pythonurl
                    cliendid = msg.data[0].clientId
                    console.log(sessionTimeOutvalue);
                    console.log(pythonurl);
                    console.log(cliendid);
                    console.log(typeof pythonurl);
               },
               error:function() {
                   alert("Error")
               }
          });







 var aws_url = url();
 var aws_url1 = url1();
 var aws_url2 = url2();

 function url() {

        // return 'http://192.168.0.128:6767/'
            return pythonurl
         // return 'https://cin-appsvplan-indtvauto-api-stg.azurewebsites.net/'

 }
 function url1() {
         // return 'http://192.168.0.164:6767/'
         // return pythonurl
         // return 'http://192.168.0.128:6767/'
 }
 function url2() {
         // return 'http://192.168.0.164:6767/'
           return pythonurl
           // return 'http://192.168.0.128:6767/'
 }


 function error_notify(msg) {
  // $(".live_notifications").append('<div class="notify alert alert-danger"><span><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></span><span>'+msg+'</span></div>');
  // setTimeout(function () {
  //   $(".notify").fadeTo(500, 0).slideUp(500, function(){
  //       $(this).remove();
  //   });
  // }, 5000);
  toastr.error(msg)
}
function success_notify(msg) {
  // $(".live_notifications").append('<div class="notify alert alert-success"><span><i class="fa fa-check-circle" aria-hidden="true"></i></span><span>'+msg+'</span></div>');
  // setTimeout(function () {
  //   $(".notify").fadeTo(500, 0).slideUp(500, function(){
  //       $(this).remove();
  //   });
  // }, 5000);
  toastr.success(msg)
}

// generateDateTime()
function generateDateTime() {
    hours_list = ["12", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"]
    datetime = new Date()
    date = datetime.getDate().toString().length > 1 ? datetime.getDate() : '0'+datetime.getDate()
    month = (datetime.getMonth()+1).toString().length > 1 ? datetime.getMonth()+1 : '0'+(datetime.getMonth()+1)
    year = datetime.getFullYear().toString().length > 1 ? datetime.getFullYear() : '0'+datetime.getFullYear()

    hour = hours_list[datetime.getHours()]
    ampm = datetime.getHours() > 11 ? 'PM' : 'AM'


    minutes = datetime.getMinutes().toString().length > 1 ? datetime.getMinutes() : '0'+datetime.getMinutes()
    seconds = datetime.getSeconds().toString().length > 1 ? datetime.getSeconds() : '0'+datetime.getSeconds()

    // return month + '/' + date + '/' + year + ', ' + hour +':' + minutes + ':' + seconds + ' ' + ampm
    console.log($.type(month + '/' + date + '/' + year + ', ' + hour +':' + minutes + ':' + seconds + ' ' + ampm));
    return month + '/' + date + '/' + year + ', ' + hour +':' + minutes + ':' + seconds + ' ' + ampm


}
