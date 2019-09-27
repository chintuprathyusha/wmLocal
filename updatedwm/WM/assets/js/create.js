


$(document).ready(function () {
    createPlan();
     var count = 0;
    var base_tg,
    client,
    brand,
    campign_name,
    campign_id,
    primary_tg,
    campign_markets
    function createPlan() {
        msg = {
            "client": {
                "google":["brand1","brand2"],
                "apple":["brand1"],
                "wipro":["brand1","brand2"]
            },

            "campign_name": "",
            "campign_id": "",
            "primary_tg": [
                "abc",
                "xyz",
                "123"
            ],
            "base_tg": [
                "abc",
                "xyz",
                "123"
            ],
            "campign_markets":  [
                "abc",
                "xyz",
                "123"
            ],
            "end_week": ""
        }
        console.log(msg.base_tg);
        base_tg = msg.base_tg;
        client = msg.client;
        brand = msg.brand;
        campign_name = msg.campign_name;
        campign_id = msg.campign_id;
        primary_tg = msg.primary_tg;
        campign_markets = msg.campign_markets;

        $.each(client ,function(client,i){
        $('.client').append('<option value='+client+'>'+client+'</option>')
        })

        var $dropdown = $('.client');
        console.log($dropdown);
        $dropdown.on('change', function() {
         $('.brand').empty();
           var a=client[$dropdown.val()];
           $.each(a,function(j){
             console.log(a[j]);
           $('.brand').append('<option value='+a[j]+'>'+a[j]+'</option>')
         })
        });

        // for (var i = 0; i < base_tg.length; i++) {
        //     $(".base_tg").append('<option value='+base_tg[i]+' class="get_base_tg-'+count+'">'+base_tg[i]+'</option>');
        //      count++
        // }
        // for (var i = 0; i < campign_markets.length; i++) {
        //     $(".campign_markets").append('<option value='+campign_markets[i]+' class="get_campign_markets-'+count+'">'+campign_markets[i]+'</option>');
        //      count++
        // }
        // for (var i = 0; i < primary_tg.length; i++) {
        //     $(".primary_tg").append('<option value='+primary_tg[i]+' class="get_primary_tg-'+count+'">'+primary_tg[i]+'</option>');
        //      count++
        // }
        // for (var i = 0; i < campign_id.length; i++) {
        //     $(".campign_id").append('<option value='+campign_id[i]+' class="get_campign_id-'+count+'">'+campign_id[i]+'</option>');
        //      count++
        // }
        // for (var i = 0; i < end_week.length; i++) {
        //     $(".end_week").append('<option value='+end_week[i]+' class="get_end_week-'+count+'">'+end_week[i]+'</option>');
        //      count++
        // }
    }

    $("body").on("click", ".create_plan", function(){
        // $(this).parent(".new_plan").find()
        var camp_markets = $(".campign_markets").val();
        var campign_id = $(".campign_id").val();
        var primary_tg = $("primary_tg").val();
        var base_tg = $(".base_tg").val();
        var campign_name = $(".campign_name").val();
        var brand = $(".brand").val();
        var client = $(".client").val();
        console.log(camp_markets, campign_id, primary_tg,base_tg,campign_name,brand,client);
    })







$dropdown.trigger('change');
})
