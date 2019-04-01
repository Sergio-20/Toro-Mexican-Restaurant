  $(document).ready( () => {

    let iconClicked = false;

    let pageWidth = $(window).width();

    /*Animations only triggered if the device is not a smartphone.*/
    if( pageWidth >= 768 )
    {
      $("#item-meta, .fa-phone-volume").show("slide", { direction: "left" }, 1000);
      $("#menu, .fa-caret-square-up").show("slide", { direction: "right" }, 1000);
    }

    /*Caret Displays On Certain Width*/

    /**Animates input buttons to enlarge or shrink based on whether they are in focus.**/
    if(pageWidth >= 1024)
    {

      $("main").hide();
      $("main").fadeIn("slow");

      $("input").focusin( () => {
          $("input:focus").animate( { height: "8%" }, 400 );
      });

      $("input").focusout( () => {
          $("input").animate( { height: "4%" }, 400 );
      });

    }

    /*Phone-icon turns into a speech bubble and phone number is displayed, along with a close-window icon.*/
    $("#phone-icon").on("click", () => {

      //PCs and Laptops
      if( !iconClicked && pageWidth >= 1200 )
      {
        iconClicked = true;
        $("#phone-icon").removeClass("fa-phone-volume");
        $("#phone-icon").addClass("fa-comment");
        $("#phone-icon").animate({ fontSize: "6em" }, 500);
        $("#phone-number, .fa-window-close").fadeIn();
      }

      else if( iconClicked && pageWidth >= 1200 )
      {
        iconClicked = false;
        $("#phone-icon").removeClass("fa-comment");
        $("#phone-icon").addClass("fa-phone-volume");
        $("#phone-icon").animate({ fontSize: "3em" }, 500);
        $("#phone-number, .fa-window-close").fadeOut();
      }

    });

    /*Privacy Policy Box Pop-Up*/
    $(".privacy-policy, .lorem-ipsum").on("click", () => {
      if(pageWidth >= 768)
      {
        $(".fa-phone-volume, .fa-comment, .fa-window-close, #item-meta").toggle("slow");
        $(".lorem-ipsum").toggle("slow");
      }
      else
      {
        $(".fa-phone-volume, .fa-comment, .fa-window-close").toggle("slow");
        $(".lorem-ipsum").toggle("slow");
      }

    });

  });
