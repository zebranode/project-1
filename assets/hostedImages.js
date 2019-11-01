$(document).ready(function() {

var menuItemArray = ["#Shrimp-Po-Boy",
"#Oyster-Po-Boy",
"#Big-Mos-Favorite",
"#Surf-and-Turf-Bowl",
"#Gumbo-Mumbo-Po-Boy",
"#Ny-Burger-Fries",
"#Soho",
"#Yankee",
"#Ms-Rachel-Hot",
"#Chicken-Platter",
"#Oyster-Platter",
"#Catfish-Platter",
"#OG-Orlean-Muffuletta",
"#NYC-Muffuletta",
"#Seaside-Muffuletta",
];


var imgurResponse

    $.ajax({
        url: "https://api.imgur.com/3/account/poboyz20192020/images/",
        headers:{
        'Authorization':'Bearer 4a1e34fc0069a4e384fc8cb5c7b3ae101d941f35',
        },
        method: "GET",
        dataType: 'json'
        }).then(function(response) {

            for(mii=0; mii < menuItemArray.length; mii++){

                var menuItem = $(menuItemArray[mii]).attr("data-item");
                for(ri=0; ri < response.data.length; ri++){
                    
                    if(menuItem == response.data[ri].name){

                        $(menuItemArray[mii]).attr("src", response.data[ri].link)
                    }
                }
            }
        
        });
    
    console.log("imgurResponse: " + imgurResponse)
    //for (i=0; i < imgurResponse.length; i++){

    //}


}); //end of Doucment.Ready