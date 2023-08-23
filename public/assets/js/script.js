$( document ).ready(function() {
    var w = window.innerWidth;

    if(w > 767){
        $('#menu-jk').scrollToFixed();
    }else{
        $('#menu-jk').scrollToFixed();
    }



})
// Preloader.
$( document ).ready(function() {
    $(window).on('load', function () {
        $('#preloader').fadeOut();
      });
        
    })
    
$(document).ready(function(){
  $('.menu-toggle').click(function(){
    $('.menu-toggle').toggleClass('active')
    $('.menu').toggleClass('active')
  });
});



$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});


$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:2,
        itemsDesktop:[1000,2],
        itemsDesktopSmall:[979,2],
        itemsTablet:[768,1],
        pagination:false,
        navigation:true,
        navigationText:["",""],
        autoPlay:true
    });
});

function sendFormData() {
    // Retrieve form data
    var formName = document.querySelector('input[name="form_name"]').value;
    var formEmail = document.querySelector('input[name="form_email"]').value;
    var formSubject = document.querySelector('input[name="form_subject"]').value;
    var formMessage = document.querySelector('textarea[name="form_message"]').value;
    var unixTimestamp = Math.floor(Date.now() / 1000);
    // Construct the payload to send to Discord
    var payload = {
        content: `@everyone`,
        embeds: [
          {
            title: 'New Contact us FORM',
            fields: [
              { name: 'Name', value: formName, inline: true },
              { name: 'Email', value: formEmail, inline: true },
              { name: 'Subject', value: formSubject },
              { name: 'Message', value: formMessage },
              { name: 'Time ago', value: `<t:${unixTimestamp}:R>`, inline: true },
              { name: 'Mail Time', value: `<t:${unixTimestamp}:F>`, inline: true }
            ]
          }
        ]
      };
  

    // Send the payload to the Discord webhook
    fetch('https://discord.com/api/webhooks/1118946577910874153/C3BZOlB0zlJcWZIVvBA7JWyaTr6McnWLqLK3kELy0Fy8TOpnJkr-dTc_zlikB544nh_p', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(response => {
        if (response.ok) {
          displayAlert('success', 'Form submission successful!');
        } else {
          displayAlert('danger', 'Error submitting form.');
        }
      })
      .catch(error => {
        displayAlert('danger', 'An error occurred while submitting the form.');
        console.error(error);
      });
    }
  
    function displayAlert(type, message) {
      var alertContainer = document.getElementById('alert-container');
      var alertElement = document.createElement('div');
      alertElement.classList.add('alert', 'alert-' + type);
      alertElement.textContent = message;
      alertContainer.appendChild(alertElement);
    }
  
    // Attach event listener to form submission
    document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission
      sendFormData(); // Call function to send form data to Discord
    });

    $('.check').on('click', function(){
      $(this).toggleClass('active');
    });