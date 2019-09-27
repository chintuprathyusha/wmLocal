$(document).ready(function () {
  var startdate;
  var enddate;
    $("body").on("click", ".gobtn", function(){
      userid = 2;
      startdate =   $('.startdateclass').val();
      enddate =   $('.enddateclass').val();
      objj = {}
      objj.startdate = startdate
      objj.enddate =  enddate
      objj.userid =  userid
      console.log(objj);
        var form = new FormData();
        form.append("file", JSON.stringify(objj));
        var settings11 = {
          "async": true,
          "crossDomain": true,
          "url": ' http://10.0.0.197:6767/Dashboard_Table_One',
          "method": "POST",
          "processData": false,
          "contentType": false,
          "mimeType": "multipart/form-data",
          "data": form
        };

        $.ajax(settings11).done(function (msg) {
          msg = JSON.parse(msg);
          console.log(msg);
          // planid = msg[Id];
          // console.log(planid);
          $.each(msg ,function(key,v){
             console.log(key , v);
             if (key == 'Incompleted') {
                ap = ''
                for (var i = 0; i < v.length; i++) {
                    ap += '<tr>'
                     ap += '<td  style="text-align:center;">'+v[i]['CampaignId']+'</td>'
                     ap += '<td  style="text-align:center;">'+v[i]['CampaignName']+'</td>'
                     ap += '<td  style="text-align:center;">'+v[i]['ClientName']+'</td>'
                     ap += '<td  style="text-align:center;">'+v[i]['BrandName']+'</td>'
                     ap += '<td  style="text-align:center;">'+v[i]['CST_StartWeek']+'</td>'
                      ap += '<td> <button plainid='+v[i]['Id']+' style="color:white;background:green;" class="form-control completebtn">Complete</button> </td>'
                    ap += '</tr>'
                }
               $(".displayincompletedplans").html(ap);

             }
             else {
               ap = ''

               for (var i = 0; i < v.length; i++) {
                   ap += '<tr>'
                    ap += '<td  style="text-align:center;">'+v[i]['CampaignId']+'</td>'
                    ap += '<td  style="text-align:center;">'+v[i]['CampaignName']+'</td>'
                    ap += '<td  style="text-align:center;">'+v[i]['ClientName']+'</td>'
                    ap += '<td  style="text-align:center;">'+v[i]['BrandName']+'</td>'
                    ap += '<td  style="text-align:center;">'+v[i]['CST_StartWeek']+'</td>'
                    ap += '<td  style="text-align:center;">'+v[i]['CST_EndWeek']+'</td>'
                   ap += '</tr>'
               }
              $(".displaycompletedplans").html(ap);
             }
          })
        })
    })

    $("body").on("click", ".completebtn", function(){
        var plainidd = $(this).attr('plainid');
        alert(plainidd)
      Id = plainidd
      userid = 1
      startdate =   $('.startdateclass').val();
      enddate =   $('.enddateclass').val();
      objj = {}
      objj.startdate = startdate
      objj.enddate =  enddate
      objj.userid =  userid
      objj.Id =  Id
      console.log(objj);
        var form = new FormData();
        form.append("file", JSON.stringify(objj));
        var settings11 = {
          "async": true,
          "crossDomain": true,
          "url": ' http://10.0.0.197:6767/Dashboard_Complete_Button',
          "method": "POST",
          "processData": false,
          "contentType": false,
          "mimeType": "multipart/form-data",
          "data": form
        };
        $.ajax(settings11).done(function (msg) {
          msg = JSON.parse(msg);
          console.log(msg);
          $.each(msg ,function(key,v){
             console.log(key , v);
             if (key == 'Incompleted') {
                ap = ''
                for (var i = 0; i < v.length; i++) {
                    ap += '<tr>'
                     ap += '<td  style="text-align:center;">'+v[i]['CampaignId']+'</td>'
                     ap += '<td  style="text-align:center;">'+v[i]['CampaignName']+'</td>'
                     ap += '<td  style="text-align:center;">'+v[i]['ClientName']+'</td>'
                     ap += '<td  style="text-align:center;">'+v[i]['BrandName']+'</td>'
                     ap += '<td  style="text-align:center;">'+v[i]['CST_StartWeek']+'</td>'
                      ap += '<td> <button plainid='+v[i]['Id']+' style="color:white;background:green;" class="form-control completebtn">Complete</button> </td>'
                    ap += '</tr>'
                }
               $(".displayincompletedplans").html(ap);

             }
             else {
               ap = ''

               for (var i = 0; i < v.length; i++) {
                   ap += '<tr>'
                    ap += '<td  style="text-align:center;">'+v[i]['CampaignId']+'</td>'
                    ap += '<td  style="text-align:center;">'+v[i]['CampaignName']+'</td>'
                    ap += '<td  style="text-align:center;">'+v[i]['ClientName']+'</td>'
                    ap += '<td  style="text-align:center;">'+v[i]['BrandName']+'</td>'
                    ap += '<td  style="text-align:center;">'+v[i]['CST_StartWeek']+'</td>'
                    ap += '<td  style="text-align:center;">'+v[i]['CST_EndWeek']+'</td>'
                   ap += '</tr>'
               }
              $(".displaycompletedplans").html(ap);
             }
          })
        })

     })

})
