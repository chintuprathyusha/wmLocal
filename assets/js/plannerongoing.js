$(document).ready(function(){

    $('.texttodisplay').hide();


    $("body").on("click", "#bb_upload", function(){
        //debugger
        var file = $(".excel_bb")[0].files[0];
        alert(file);
        console.log(file);
    })

    var msg ={"Campaign_ids": [{"Id": 2, "Name": "India"}, {"Id": 3, "Name": "India - Urban"}, {"Id": 4, "Name": "HSM"}, {"Id": 5, "Name": "HSM - Urban"}, {"Id": 6, "Name": "HSM Excl East - Urban"}, {"Id": 8, "Name": "Mum/Del/Pune/Che/Hyd/Ahm/Blr/Kol"}, {"Id": 9, "Name": "Metros"}, {"Id": 10, "Name": "AP / Telangana"}, {"Id": 11, "Name": "AP / Telangana - Urban"}, {"Id": 12, "Name": "AP / Telangana - Rural"}, {"Id": 13, "Name": "Karnataka - Urban"}, {"Id": 14, "Name": "Karnataka - Urban"}, {"Id": 15, "Name": "Kerala - Urban"}, {"Id": 16, "Name": "Mah / Goa - Urban"}, {"Id": 17, "Name": "Pun/Cha - Urban"}, {"Id": 18, "Name": "TN - Rural"}]}
    // console.log(msg.Campaign_ids);

    var cp = msg.Campaign_ids;
    console.log(cp);
    $.each(cp, function(key, val){

        // console.log(key);
        // console.log(val);
        $("#campaign_market_id").append('<option>'+val.Name+'</option>');
    })
    var array_list, s;
    $("body").on("change", "#campaign_market_id", function(){
        array_list = $(this).val();
        console.log(array_list);
    })
    $("body").on("click", "#submit_campaign", function(){
        //debugger
        var s = array_list;
        $("#campaign_market_id").addClass('hide');

        $('#campaign_market_text').append('<p>'+s+'</p>')
    })





    $("body").on("click", ".cprp_submit", function(){
        //debugger
        var name_new = []
        var select_path = $('.cprp_r').val()
        var cprp = $('.cprp_val').val();
        var reach = $('.reach_val').val();
        var camp_dur =  $('.campaign').val();
        var name_ = $('.subdivname_0').val();
        var path_ = $('.subdivpath_0').val();

        name_new = $('.subdivname_'+counting).val();
        path_new = $('.subdivpath_'+counting).val();
        // console.log(x);
    })
    $("body").on("click", ".next_btn", function(){
        window.location='barc.php';
    })





})
