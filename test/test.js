var Nightmare = require("nightmare");
var expect = require("chai").expect;

describe("SpicyBurnz", function () {

  this.timeout(30000);

  //THIS TEST IS WORKING
  //need deployed page url to actually site is up and running
  //test to see if title of page matches what it should be
  it("should have the title of the page expected", function (done) {
    //want to make sure user can load show jokes page
    Nightmare({ show: true })
      .goto("https://spicyburnz.herokuapp.com/index")

      // evaluate if title of page matches what it should be
      .evaluate(function () {
        return document.title;
      })
      // Assess the title is as expected
      .then(function (title) {
        expect(title).to.equal("SpicyBurnz");
        done();
      })
      .catch(function (error) {
        console.error("Instructions visible failed:", error);
      });
  });

  //THIS TEST IS WORKING
  //test that modal pops up 
  //might need to test if aria-hidden="true" becomes aria-hidden="false" after clicking add joke
  //<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">

  //right now testing if h4 tag is what i think it is using:
  //<h4 class="modal-title" id="exampleModalLongTitle" style="font-weight:bold">MAKE US LAUGH</h4>
  it("should pop up modal if add joke button pressed", function (done) {

    //want to make sure user can load show jokes page
    Nightmare({ show: true })

      .goto("https://spicyburnz.herokuapp.com/index")
      // want to click add a joke
      .click("#show-jokes")
      // .wait("#links a")

      // evaluate if instructions text is correct
      .evaluate(function () {
        // Assert the that the text of h5 tag is what we think it should be
        return document.querySelector("#instructions").textContent;
      })
      .then(function (textContent) {
        expect(textContent).to.equal("\n        If you just want to judge randos on the internet go ahead - rate some sick burnz. You literally just pick spicy or icy. That's it. Go forth and judge. Or, if you actually think you're funny, prove it...\n      ");
        done();
      })
      .catch(function (error) {
        console.error("Instructions visible failed:", error);
      });
  });



  //THIS TEST IS NOT WORKING!!!!!!!
  //test to see if new joke added
  //need to see how many joke divs there are before adding a joke
  //then click to add a new joke then submit 
  //check number of joke divs is one more than original amount
  it("it should allow you to submit a joke and verify it is added to index page", function (done) {
    //var joke = document.querySelector("p").textContent;
    new Nightmare({ show: true })
      //will need deployed url
      .goto("https://spicyburnz.herokuapp.com/index")
      //click show jokes button
      .click("#add-button")
      // Enter joke=====this part is not working, why
      .type("#body", "What do you call an alligator in a vest? An Investigator!")
      // Enter category.
      .click("#category", "Puns")
      // Click the login button
      .click("#submit-button")
      // Evaluate the following selector
      .evaluate(function () {
        // Assert the that the joke is in joke list
        //return document.querySelector("a[href='/index']");
        return document.querySelector("p").textContent;
      })
      .then(function (textContent) {
        expect(textContent).to.include("What do you call an alligator in a vest? An Investigator!");
        done();
      })
      .catch(function (error) {
        console.error("Submit failed:", error);
      });
  });

  it("it should submit a joke and verify it is added to index page", function (done) {
    new Nightmare({ show: true })
      //will need deployed url
      .goto("https://spicyburnz.herokuapp.com/index")
      //click show jokes button
      .click("#add-button")
      // Enter joke.
      .type("#body", "Knock knock, whose there? It's me, your boss, open the door so I make you get some work done!")
      // Enter category.
      .type("#category", "Work")
      // Click the login button
      .click("#submit-button")


      // Evaluate the following selector
      .evaluate(function () {
        // Assert the that the joke is in joke list
        return document.querySelector("a[href='/index']");
      })
      .then(function (joke) {
        expect(joke).to.include("Knock knock, whose there? It's me boss, open the door so I can get some work done!");
        done();
      })
      .catch(function (error) {
        console.error("Submit failed:", error);
      });
  });
});