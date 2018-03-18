$(document).ready(function() {

  //Create container for all of the items
  let itemContainer = $(" ");

  //Holds items
  let items;

  //Code for getting a specific category will go here
  let url = window.location.search;
  let categoryId;

  console.log("made it here");

  $(document).on("click", ".spicy-vote", handleSpicyVote);


  function spicyVote(id) {
    console.log("This ID: " + id);
    $.ajax({
      method: "PUT",
      url: "/api/posts/" + id
    })
    .then(function() {
      //getPosts(postCategorySelect.val());
    });
  }

  function handleSpicyVote() {
    currentID = $(this).data('id');
    spicyVote(currentID);


  }


});
