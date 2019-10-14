var authContext = new AuthenticationContext({
    clientId: '39fb1160-df4a-4ece-bb64-67eb14426482',
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

 var aws_url = url();
 var aws_url1 = url1();
 var aws_url2 = url2();

 function url() {

        //  return 'http://192.168.0.101:6767/'
         // return 'http://192.168.1.2:6767/'
        return 'https://cin-appsvplan-indtvauto-api-dev-02.azurewebsites.net/'
 }
 function url1() {

        // return 'http://192.168.0.101:6767/'
        // return 'http://192.168.0.116:6767/'
        // 192.168.0.116
        return 'https://cin-appsvplan-indtvauto-api-dev-02.azurewebsites.net/'
        // return 'http://192.168.1.2:6767/'
 }
 function url2() {

        //  return 'http://192.168.0.116:6767/'
        // return 'http://192.168.0.116:6767/'
        // return 'http://192.168.0.22:6767/'
        return 'https://cin-appsvplan-indtvauto-api-dev-02.azurewebsites.net/'
        // return 'http://192.168.1.2:6767/'
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

generateDateTime()
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

    return month + '/' + date + '/' + year + ', ' + hour +':' + minutes + ':' + seconds + ' ' + ampm

}
