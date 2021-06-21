$(document).ready(function(){
    //Design on click text Appear
    $('#design').click(function(){
        $('#design').slideToggle();
        $('#design-text').slideToggle();
    });
    $('#design-text').click(function(){
        $('#design').slideToggle();
        $('#design-text').slideToggle();
    });
     //Developement on click text appear
     $('#developement').click(function(){
        $('#developement').slideToggle();
        $('#developement-text').slideToggle();
    });
    $('#developement-text').click(function(){
        $('#developement').slideToggle();
        $('#developement-text').slideToggle();
    })
    //Product on click text appear
    $('#product').click(function(){
        $('#product').slideToggle();
        $('#product-text').slideToggle();
    });
    $('#product-text').click(function(){
        $('#product').slideToggle();
        $('#product-text').slideToggle();
    });
        //Submit button - should alert a message
        $('#mc-embedded-subscribe-form').submit(function(event){
            let nameInput = $('input#name').val();
            let emailInput = $('input#email').val();
            let messageInput = $('textarea#message').val();
    
            alert(" Dear " + nameInput + ',' + " Your message has been recieved" + ',' + " thank you for getting in touch.");
        });
    });
    
// Portfolio Section - Adding functionality to images using jQuery On hover overlay appear
$(document).ready(function(){
    $("#work1").mouseover(function(){
      $("#overlay").show();
    }).mouseout(function(){
      $("#overlay").hide();
    });
    $("#work2").mouseover(function(){
      $("#overlay2").show();
    }).mouseout(function(){
      $("#overlay2").hide();
    });
    $("#work3").mouseover(function(){
      $("#overlay3").show();
    }).mouseout(function(){
      $("#overlay3").hide();
    });
    $("#work4").mouseover(function(){
      $("#overlay4").show();
    }).mouseout(function(){
      $("#overlay4").hide();
    });
    $("#work5").mouseover(function(){
      $("#overlay5").show();
    }).mouseout(function(){
      $("#overlay5").hide();
    });
    $("#work6").mouseover(function(){
      $("#overlay6").show();
    }).mouseout(function(){
      $("#overlay6").hide();
    });
    $("#work7").mouseover(function(){
      $("#overlay7").show();
    }).mouseout(function(){
      $("#overlay7").hide();
    });
    $("#work8").mouseover(function(){
      $("#overlay8").show();
    }).mouseout(function(){
      $("#overlay8").hide();
    });
  });
  


