$(document).ready(function() {

    // $.ajax({
    //     url: "https://api.imgur.com/3/account/lordking65/albums/",
    //     headers:{
    //     'Authorization':'Bearer 8051a70a883d8c0adbfe09c6f47b16ae2bae9781',
    //     'Authorization':'Client-ID e0dd27367eb86f7'
    //     },
    //     method: "GET",
    //     dataType: 'json'
    //     }).then(function(response) {
    //         alert(response.data[0].title);

    //     });

     $.ajax({
         url: "https://api.imgur.com/3/account/poboyz20192020/images/",
         headers:{
         'Authorization':'Bearer 4a1e34fc0069a4e384fc8cb5c7b3ae101d941f35',
       //  'Authorization':'Client-ID e0dd27367eb86f7'
         },
         method: "GET",
         dataType: 'json'
         }).then(function(response) {
             console.log(response)
    
         });


});