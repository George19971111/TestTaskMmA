// Page_load
document.addEventListener('DOMContentLoaded', function(){
    // Regular_exp
    var req = /@/;
    var req1 = /[.]/;
    // Regular_exp
    // Auto_click_checked_female
    document.getElementById('Female').click();
    // Auto_click_checked_female
    // Email_value_after_domloaded
    var emailValue = document.getElementById('first_email_value').value;
    // Email_value_after_domloaded
    // Toggle_success_email_img
    var img = document.createElement('img');
    if(req.test(emailValue) && req1.test(emailValue)){
        // Img_attributes_class
       img.src = 'img/icons/galkaemail.png';
       img.alt = 'success'
       img.width ="11";
       img.height = '8';
       img.classList.add('toggler_img');
       document.getElementById('emailcontainer').appendChild(img);
          // Img_attributes_class
    };
    // Check_email_input_afterfocus
    document.getElementById('first_email_value').addEventListener('blur',function(e){
        // Have_regular_exp
        if(req.test(e.target.value) && req1.test(e.target.value)){
            img.classList.remove('toggle1');
            img.src = 'img/icons/galkaemail.png';
            img.width ="11";
            img.alt = 'success'
            img.height = '8';
            img.classList.add('toggler_img');
            document.getElementById('emailcontainer').appendChild(img);
        }
        // Have_regular_exp
        // Dont_have_regulae_exp
        else{
            img.classList.remove('toggler_img');
            img.classList.add('toggle1');
        };
         // Dont_have_regulae_exp
    });
    // Check_email_input_afterfocus
    // Toggle_success_email_img
})
