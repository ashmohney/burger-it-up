// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-eat").on("click", function (event) {
      var id = $(this).data("id");
      var newEat = $(this).data("neweat");

      var newEatState = {
          devoured: newEat
      };

      // Send the PUT request.
      $.ajax("./api/burgers/" + id, {
          type: "PUT",
          data: newEatState
      }).then(
          function () {
              console.log("changed eat to", newEat);
              // Reload the page to get the updated list
              location.reload();
          }
      );
  });

  // $(".create-form").on("submit", function (event) {
  //     console.log(`Attempting to create via the public/assets/js/burger.js`);
  //     event.preventDefault();

  //     var newBurger = {
  //         name: $("#bu").val().trim(),
  //     };

  //     $.ajax("/api/burgers", {
  //         type: "POST",
  //         data: newBurger
  //     }).then(
  //         function () {
  //             console.log("Added new burger");
  //             location.reload();
  //         }
  //     );
  // });

  ////////////////////////////////////////////
  $(".create-form").on("submit", function (event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();

      var newBurger = {
          name: $("#bu").val().trim(),
      };

      // Send the POST request.
      $.ajax("./api/burgers", {
          type: "POST",
          data: newBurger
      }).then(
          function () {
              console.log("Added burger");
              location.reload();
          }
      );
  });
  ///////////////////////////////////////////

  $(".delete-burger").on("click", function (event) {
      var id = $(this).data("id");

      // Send the DELETE request.
      $.ajax("./api/burgers/" + id, {
          type: "DELETE"
      }).then(
          function () {
              console.log("Ate burger", id);
              // Reload the page to get the updated list
              location.reload();
          }
      );
  });
});
  