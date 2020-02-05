function errorAlert(msg, page) {
     $.alert({
         title: 'Error',
         content: msg,
         animation: 'scale',
         closeAnimation: 'scale',
         opacity: 0.5,
         buttons: {
             okay: {
                 text: 'Okay',
                 btnClass: 'btn-primary',
                 action: function () {
                     window.location.href = page
                 }
             }
         }
     });
}