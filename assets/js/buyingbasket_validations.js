$('.mods_inputs').on('keypress', function () {
    var x = event.key;
    if (x == "e" || x == "." || x == "-") {
        return false;
    }

});
$('.cprp_channel_val').on('keypress', function () {
    var x = event.key;
    if (x == "e" || x == "." || x == "-") {
        return false;
    }

});

$('.frequency_channel').on('keypress', function () {
    var x = event.key;
    if (x == "e" || x == "." || x == "-") {
        return false;
    }

});
$('.campaign_days').on('keypress', function () {
    var x = event.key;
    if (x == "e" || x == "." || x == "-") {
        return false;
    }

});


$('.campaign_days_new').on('keypress', function () {
    var x = event.key;
    if (x == "e" || x == "." || x == "-") {
        return false;
    }

});

$('.cprp_val').on('keypress', function () {
    var x = event.key;
    if (x == "e" || x == "." || x == "-") {
        return false;
    }

});
$('.reach_val').on('keypress', function () {
    var x = event.key;
    if (x == "e" || x == "." || x == "-") {
        return false;
    }

});


$.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
        return null;
    }
    return decodeURI(results[1]) || 0;
}

$("#a").keyup(function () {
    var a = parseInt($('#a').val());
    var b = 100 - a;
    var b = parseInt($('#b').val(b));
})
$("#a").mousewheel(function () {
    var a = parseInt($('#a').val());
    var b = 100 - a;
    var b = parseInt($('#b').val(b));
})
$("#b").mousewheel(function () {
    var a = parseInt($('#b').val());
    var b = 100 - a;
    var b = parseInt($('#a').val(b));
})
$("#b").keyup(function () {
    var a = parseInt($('#b').val());
    var b = 100 - a;
    var b = parseInt($('#a').val(b));
})
var t = false
$('.input').focus(function () {
    var $this = $(this)
    t = setInterval(
        function () {
            if (($this.val() < 0 || $this.val() > 100) && $this.val().length != 0) {
                if ($this.val() < 0) {
                    $this.val(0)
                }

                if ($this.val() > 100) {
                    $this.val(100)
                }
            }
        }, )
})
var t = false
$('.campaign').focus(function () {
    var $this = $(this)
    t = setInterval(
        function () {
            if (($this.val() < 0 || $this.val() > 100) && $this.val().length != 0) {
                if ($this.val() < 0) {
                    $this.val(0)
                }

                if ($this.val() > 365) {
                    $this.val(365)
                }
            }
        }, )
})