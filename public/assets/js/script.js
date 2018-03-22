$(document).ready(function() {

  //Click Events
  $("#flame").click(function(){
        $("#joke-list").show();
        $(".instructions").hide();
        $("#flame").hide();
        $(".links").hide();
        $(".logo").animate({height:"100px"});
  });

  //Create container for all of the items
  let itemContainer = $(" ");

  //Holds items
  let items;

  //Code for getting a specific category will go here
  let url = window.location.search;
  let categoryId;

  console.log("made it here");

  $(document).on("click", ".spicy-vote", spicyVote); 
  $(document).on("click", ".icy-vote", icyVote); 

  function spicyVote() {

    // revisit once page no longer reloads
    if ($(this).parent().attr("data-guessed") === "true") {

      return;

    } else {
        
      var count = $(this).data('spicy');
      var thisId = $(this).data('id');
      var updatePost = {
        spicy: ++count,
        id: thisId
      }
      updateScore(updatePost);        
    }

  $(this).parent().attr("data-guessed", "true");

  }


  function icyVote() {
    var count = $(this).data('icy');
    var thisId = $(this).data('id');
    var updatePost = {
      icy: ++count,
      id: thisId
    }
    updateScore(updatePost);
  }

  function updateScore(post) {
    $.ajax({
      method: "PUT",
      url: "/api/posts",
      data: post
    })
    .then(function() {
      location.reload();
    });
  }
});
