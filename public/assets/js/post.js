//Add Jokes Page
$(document).ready(function() {

  //Sets a flag for whether or not we're updating a post to be false initially
  var updating = false;

  //Cotainer to hold jokes
  var bodyInput = $("#body");
  var categorySelect = $("#category");
  var listOption;
  var CategoryId;

  //Function to get categories
  function getCategories() {
    $.get("/api/categories", renderCategoryList);
  }

  //Render list of categories
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

  //Creates dropdown category options
  function createCategoryRow(category) {
    var listOption = $("<option>");
    listOption.attr("value", category.id);
    listOption.text(category.name);
    return listOption;
  }

  getCategories();

  $("#joke-form").on("submit", function handleFormSubmit(event) {
    event.preventDefault();

    //Won't submit post if entry is blank
    if (!$(bodyInput).val().trim()) {
      return;
    }

    var newJoke = {
      entry: $(bodyInput).val().trim(),
      CategoryId: $("#category").find(":selected").attr("value")
    };

    submitPost(newJoke);
  });


  //Submit new joke
  function submitPost(Post) {
    $.post("/api/posts/", Post, function(newItem) {

      var template = Handlebars.compile('<div class="row" data-row-id="{{this.id}}" data-guessed="false" id="individual-joke">'+
      '  <div class="col-2 spicy-vote" data-id="{{this.id}}" data-spicy="{{this.spicy}}" data-text="{{this.entry}}">'+
      '    <button class="btn btn-danger" id="spicy-button">'+
      '      <i class="fas fa-fire"></i> Spicy '+
      '      <div class="value"></div>'+
      '    </button>'+
      '  </div>'+
      ''+
      '  <div class="col-8 mb-3">'+
      '    <p>{{this.entry}}</p>'+
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

      //Add new joke to bottom of page
      $("#joke-list").append(template(newItem));
      //Clear modal form
      $("#joke-form").trigger('reset');
      //Simulate close button
      $(".close")[0].click();
      //"Navigate" to correct page
      $("#index-page").hide();
      $("#joke-list").show();
      $("#logo-main").animate({height:"100px"});
    });
  }
});