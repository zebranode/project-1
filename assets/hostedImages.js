$(document).ready(function() {

var array = [];
var imgurResponse

function getImage(){}

    $.ajax({
        url: "https://api.imgur.com/3/account/poboyz20192020/images/",
        headers:{
        'Authorization':'Bearer 4a1e34fc0069a4e384fc8cb5c7b3ae101d941f35',
        },
        method: "GET",
        dataType: 'json'
        }).then(function(response) {
            console.log(response)
        });


getImage();

}); //end of Doucment.Ready