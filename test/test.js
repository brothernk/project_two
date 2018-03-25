var Nightmare = require("nightmare");
var expect = require("chai").expect;

describe("SpicyBurnz", function() {
  // The default tests in mocha is 2 seconds.
  // Extending it to 30 seconds to have time to load the pages
  //never should be more than a couple of seconds, if you have to do longer then you have an issue with your website
  
//need deployed page url to actually test
  this.timeout(30000);
  it("should send user to the edit page to add a joke", function(done) {
    // ID for the login button.

    //want to make sure user can load page
    Nightmare({ show: true })
      .goto("http://localhost:3000/index")
      // want to click add a joke
      .click("a[href='/edit']")
      // Evaluate the title
      //there is no title on this page!!!!!!!!!!!!!!!!!!!!!and I need it to be "Add a Joke"
      .evaluate(function() {
        return document.title;
      })
      // Asset the title is as expected
      .then(function(title) {
        expect(title).to.equal("Add a Joke");
        done();
      });
  });

  it("it should allow you to submit a joke", function(done) {
    new Nightmare({ show: true })
    //will need deployed url
      .goto("http://localhost:3000/edit")
      // Enter joke.
      .type("#body", "Knock knock, whose there? It's me boss, open the door so I can get some work done!")
      // Enter category.
      .type("#category", "Work")
      // Click the login button
      .click("#submit-button")
      // Evaluate the following selector
      .evaluate(function() {
        // Assert the "index" of jokes link is found
        return document.querySelector("a[href='/index']");
      })
      .then(function(link) {
        expect(link).to.not.equal(undefined);
        done();
      });
  });

  it("should throw an error for fun", function() {
    throw new Error("Failed on purpose, just to make the Mocha output more interesting.");
  });
});
