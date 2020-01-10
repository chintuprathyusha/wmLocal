$( document ).ready(function() {
    filess = []
    $.ajax({
            url: "TGBL",
            success: function(data){
                console.log(data);
                count = 0
               $(data).find("td > a").each(function(){
                  if(($(this).attr("href"))){
                        var url = $(this).attr("href");

                        files__ = filess.push(url);
                        console.log(filess);
                        var filename = url.substring(url.lastIndexOf('/')+1);
                        var cdnpath = url.substring(0,url.lastIndexOf('/')+1);
                        var decoded = decodeURIComponent(filename);
                        var decoded__ = decodeURIComponent(filename);
                        var string1= decoded__;
                        var result = string1.substring(string1.indexOf('.') + 1);
                        if (result ==  "pdf") {
                            $('.appendhere').append('<tr><td>'+count+'</td><td style="width: 446px;" >'+decoded+' <img style="width:20px;height:20px;" src="assets/images/pdf.png"/</td><td><img  class="downloadbtn" aa="TGBL/'+decoded+'" src="assets/images/WhiteIcons/FilesDownload.png" style="width:27px;"><td></tr>');
                        }
                        else if (result ==  "xlsx"){
                            $('.appendhere').append('<tr><td>'+count+'</td><td  style="width: 446px;">'+decoded+' <img style="width:20px;height:20px;" src="assets/images/excel.png"/</td><td><img class="downloadbtn" aa="TGBL/'+decoded+'" src="assets/images/WhiteIcons/FilesDownload.png" style="width:27px;"><td></tr>');
                        }
                  }
                  count++;
               });

            }
        });

        $("body").on("click", ".downloadbtn", function(){
            var url = $(this).attr("aa");
            console.log(url)
            var filename =  url.replace("TGBL/", '');
            var xhr = new XMLHttpRequest()
                xhr.open("GET", url)
                xhr.responseType = 'blob'
                xhr.onload = function() {
                  window.saveAs(xhr.response, filename);
                }
                xhr.send()

        })

    })
