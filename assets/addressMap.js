//address list event listener
$('.address-choice').on("click", switchAddress);
      
//function to switch address in map view
function switchAddress(event){
  //add active class to clicked address
  $(this).addClass("active");
  //remove active class from sibling addresses
  $(this).siblings().removeClass("active");
  //get Google place ID and address from clicked address
  let mapID = $(this).attr("data-place-id");
  let mapAddress = $(this).attr("data-address"); //for possible use elsewhere on page
  //create API query URL from clicked address
  let mapIDQueryUrl = "https://www.google.com/maps/embed/v1/place?key=AIzaSyAuJmGf0kyAYrtwxDeiQvux-P8ropMEJXo&q=place_id:" + mapID;
  //set map iframe src attribute to new map from API
  $('#location-map').attr("src", mapIDQueryUrl);
}