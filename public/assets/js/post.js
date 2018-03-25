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
    //console.log("I got the categories");
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
    $.post("/api/posts/", Post, function(newItem) {

      var template = Handlebars.compile('<div class="row" data-row-id="{{this.id}}" data-guessed="false" id="individual-joke">'+
      '  <div class="col-2 spicy-vote" data-id="{{this.id}}" data-spicy="{{this.spicy}}">'+
      '    <button class="btn btn-danger" id="spicy-button">'+
      '      <i class="fas fa-fire"></i> Spicy '+
      '      <div class="value"></div>'+
      '    </button>'+
      '  </div>'+
      ''+
      '  <div class="col-8 mb-3">'+
      '    <p>{{this.entry}}</p>'+
      '    <div class="a2a_kit a2a_kit_size_32 a2a_default_style">'+
      '      <a class="a2a_dd" href="https://www.addtoany.com/share"></a>'+
      '      <a class="a2a_button_facebook"></a>'+
      '      <a class="a2a_button_twitter"></a>'+
      '      <a class="a2a_button_google_plus"></a>'+
      '      <a class="a2a_button_facebook_messenger"></a>'+
      '    </div>'+
      '    <script async src="https://static.addtoany.com/menu/page.js"></script>'+
      '  </div>'+
      ''+
      '  <div class="col-2 icy-vote" data-id="{{this.id}}" data-icy="{{this.icy}}">'+
      '    <button class="btn btn-info">'+
      '      <i class="far fa-snowflake"></i> Icy '+
      '      <div class="value"></div>'+
      '    </button>'+
      '  </div>'+
      '  '+
      '</div>');

      // add new joke to our page
      $("#joke-list").append(template(newItem));
      // clear the modal form
      $("#joke-form").trigger('reset');
      // simulate close button
      $(".close")[0].click();
      // "navigate" to the correct page
      $("#index-page").hide();
      $("#joke-list").show();
      $("#logo-main").animate({height:"100px"});

    });
  }
});