$('#year').text(new Date().getFullYear());

$("#main-nav a").on("click", function (e) {
    // check if there hash
    if (this.hash !== "") {
      //prevent default
      e.preventDefault();
      // store hash
      const hash = this.hash;
      // adding animation
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        600,
        function () {
          // adding animation on window
          window.location.hash = hash;
        }
      );
    }
  });