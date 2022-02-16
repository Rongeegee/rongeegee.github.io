

  /*-------------------------------------------------------------------------------
    PRE LOADER
  -------------------------------------------------------------------------------*/

  $(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
  });



  /* HTML document is loaded. DOM is ready. 
  -------------------------------------------*/

  $(document).ready(function() {


  /*-------------------------------------------------------------------------------
    Navigation - Hide mobile menu after clicking on a link
  -------------------------------------------------------------------------------*/

    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });


    $(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });



  /*-------------------------------------------------------------------------------
    jQuery Parallax
  -------------------------------------------------------------------------------*/

    function initParallax() {
    $('#home').parallax("100%", 0.1);
    $('#about').parallax("100%", 0.3);
    $('#service').parallax("100%", 0.2);
    $('#experience').parallax("100%", 0.3);
    $('#education').parallax("100%", 0.1);
    $('#resume').parallax("100%", 0.3);
    $('#contact').parallax("100%", 0.1);
    $('footer').parallax("100%", 0.2);

  }
  initParallax();



  /*-------------------------------------------------------------------------------
    smoothScroll js
  -------------------------------------------------------------------------------*/
  
    $(function() {
        $('.custom-navbar a, #home a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
        });
    });
  


  /*-------------------------------------------------------------------------------
    wow js - Animation js
  -------------------------------------------------------------------------------*/

  new WOW({ mobile: false }).init();


  /*-------------------------------------------------------------------------------
    contact form submisson js
  -------------------------------------------------------------------------------*/
  $("#contact-form").submit(function(event) {
    event.preventDefault();
    const url = "https://chino-amigo.herokuapp.com/email"
    let name = $(this).find("#fullname").val().trim();
    let email = $(this).find("#email").val().trim();
    let message = $(this).find("#message").val().trim();
    const data = {
      "email": email,
      "message": message,
      "name": name
    };
    makeApiCall(url,"POST", 'application/json; charset=utf-8', data, 
    function(){
      alert("Thank you, email sent!");
    });  
  });

    /*-------------------------------------------------------------------------------
    collect visitor information
    -------------------------------------------------------------------------------*/
    $.getJSON("https://ipinfo.io", function(data) {
      let ipinfo = data;
      let visitor_data = {
        "visitor_data": data
      };
      const URL = "https://chino-amigo.herokuapp.com/insertVisitor";
      makeApiCall(URL,"POST", 'application/json; charset=utf-8', visitor_data) 
    });
  });

  