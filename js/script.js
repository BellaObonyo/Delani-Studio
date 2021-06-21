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
    


