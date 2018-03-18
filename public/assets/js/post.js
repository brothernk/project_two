$(document).ready(function() {

  var bodyInput = $("#body");

  $("#joke-form").on("submit", function handleFormSubmit(event) {
    event.preventDefault();

    // Wont submit the post if entry is blank
    if (!$(bodyInput).val().trim()) {
      return;
    }

    var newJoke = {
      entry: $(bodyInput).val().trim()
    };

    submitPost(newJoke);

  });

  function submitPost(Post) {
    $.post("/api/posts/", Post, function() {
      window.location.href = "/index";
    });
  }

});