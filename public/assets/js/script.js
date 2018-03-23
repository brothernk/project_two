//this is for the index page where jokes are voted for
$(document).ready(function() {

  //Click Events
  $("#flame").click(function(){
    $("#joke-list").show();
    $("#instructions").hide();
    $("#flame").hide();
    $(".links").hide();
    $("#logo-main").animate({height:"100px"});
  });

  //Scroll Events
  // window.sr = ScrollReveal();
  //   sr.reveal("#joke-list");

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
    if ($(this).parent().attr("data-guessed") === "true") {
      return;
    } else {

      var count = $(this).data('icy');
      var thisId = $(this).data('id');
      var updatePost = {
        icy: ++count,
        id: thisId
      }
      updateScore(updatePost);
    }
    $(this).parent().attr("data-guessed", "true");
  }

  function updateScore(post) {

   // update database with new score
   $.ajax({
    method: "PUT",
    url: "/api/posts",
    data: post
  })
   .then(function() {

      // update page with new vote count
      $.get("/api/posts/" + post.id, function(data) {
        if (data) {
          $('[data-row-id="'+post.id+'"]').find('.spicy-vote').find('.value').html(data.spicy);
          $('[data-row-id="'+post.id+'"]').find('.icy-vote').find('.value').html(data.icy);
        }
      });

    });
 }

});
