//this is edit page where jokes can be added
$(document).ready(function() {
  // Sets a flag for whether or not we're updating a post to be false initially
  var updating = false;

  var bodyInput = $("#body");
  var categorySelect = $("#category");
  var listOption;
  var CategoryId;

  // A function to get the categories and then render our list of categories
  //it comes to this function but cannot get the categories
  function getCategories() {
    // $.get("/api/categories", renderCategoryList);
    console.log("I got the categories");
  }

  // Function to render a list of categories
  function renderCategoryList(data) {

    var rowsToAdd = [];
    for (var i = 0; i < data.length; i++) {
      rowsToAdd.push(createCategoryRow(data[i]));
    }
    categorySelect.empty();
    console.log(rowsToAdd);
    console.log(categorySelect);
    categorySelect.append(rowsToAdd);
    //categorySelect.val(categoryId);
  }

  // Creates the category options in the dropdown
  function createCategoryRow(category) {
    var listOption = $("<option>");
    listOption.attr("value", category.id);
    listOption.text(category.name);
    return listOption;
  }

  // getCategories();

  $("#joke-form").on("submit", function handleFormSubmit(event) {
    event.preventDefault();

    // Wont submit the post if entry is blank
    if (!$(bodyInput).val().trim()) {
      return;
    }

    var newJoke = {
      entry: $(bodyInput).val().trim(),
      CategoryId: $("#category").find(":selected").attr("value")
    };

    submitPost(newJoke);
    console.log(newJoke);

  });

  function submitPost(Post) {
    $.post("/api/posts/", Post, function() {
      window.location.href = "/index";
    });
  }

});