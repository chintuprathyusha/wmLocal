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

        //   return 'http://192.168.0.22:6767/'
        // return 'http://192.168.0.116:6767/'
        return 'https://cin-appsvplan-indtvauto-api-dev-03.azurewebsites.net/'
 }
 function url1() {

        //  return 'http://192.168.0.22:6767/'
        // return 'http://192.168.0.116:6767/'
        // 192.168.0.116
        return 'https://cin-appsvplan-indtvauto-api-dev-03.azurewebsites.net/'
 }
 function url2() {

        //  return 'http://192.168.0.116:6767/'
        // return 'http://192.168.0.116:6767/'
        // return 'http://192.168.0.22:6767/'
        return 'https://cin-appsvplan-indtvauto-api-dev-03.azurewebsites.net/'
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
