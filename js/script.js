(function( $ ){
	
//// ---> Проверка на существование элемента на странице
jQuery.fn.exists = function() {
   return jQuery(this).length;
}

//	Phone Mask
$(function() {
  
  if($('#user_phone').exists()){
    
    $('#user_phone').each(function(){
      $(this).mask("(99) 999-99-99");
    });
    
  }
  
  if($('.phone_form').exists()){
    
    var form = $('.phone_form'),
      btn = form.find('.btn_submit');
    
    form.find('.rfield').addClass('empty_field');
  
    setInterval(function(){
    
      if($('#user_phone').exists()){
        var pmc = $('#user_phone');
        if ( (pmc.val().indexOf("_") != -1) || pmc.val() == '' ) {
          pmc.addClass('empty_field');
        } else {
            pmc.removeClass('empty_field');
        }
      }
      
      var sizeEmpty = form.find('.empty_field').size();
      
      if(sizeEmpty > 0){
        if(btn.hasClass('disabled')){
          return false
        } else {
          btn.addClass('disabled')
        }
      } else {
        btn.removeClass('disabled')
      }
      
    },200);

    btn.click(function(){
      if($(this).hasClass('disabled')){
        return false
      } else {
        form.submit();
      }
    });
    
  }

});

//  Phone Mask 2
$(function() {
  
  if($('#user_phone2').exists()){
    
    $('#user_phone2').each(function(){
      $(this).mask("(99) 999-99-99");
    });
    
  }
  
  if($('.phone_form2').exists()){
    
    var form = $('.phone_form2'),
      btn = form.find('.btn_submit2');
    
    form.find('.rfield2').addClass('empty_field2');
  
    setInterval(function(){
    
      if($('#user_phone2').exists()){
        var pmc = $('#user_phone2');
        if ( (pmc.val().indexOf("_") != -1) || pmc.val() == '' ) {
          pmc.addClass('empty_field2');
        } else {
            pmc.removeClass('empty_field2');
        }
      }
      
      var sizeEmpty = form.find('.empty_field2').size();
      
      if(sizeEmpty > 0){
        if(btn.hasClass('disabled2')){
          return false
        } else {
          btn.addClass('disabled2')
        }
      } else {
        btn.removeClass('disabled2')
      }
      
    },200);

    btn.click(function(){
      if($(this).hasClass('disabled2')){
        return false
      } else {
        form.submit();
      }
    });
    
  }

});

//  Phone Mask 3
$(function() {
  
  if($('#user_phone3').exists()){
    
    $('#user_phone3').each(function(){
      $(this).mask("(99) 999-99-99");
    });
    
  }
  
  if($('.phone_form3').exists()){
    
    var form = $('.phone_form3'),
      btn = form.find('.btn_submit3');
    
    form.find('.rfield3').addClass('empty_field3');
  
    setInterval(function(){
    
      if($('#user_phone2').exists()){
        var pmc = $('#user_phone3');
        if ( (pmc.val().indexOf("_") != -1) || pmc.val() == '' ) {
          pmc.addClass('empty_field3');
        } else {
            pmc.removeClass('empty_field3');
        }
      }
      
      var sizeEmpty = form.find('.empty_field3').size();
      
      if(sizeEmpty > 0){
        if(btn.hasClass('disabled3')){
          return false
        } else {
          btn.addClass('disabled3')
        }
      } else {
        btn.removeClass('disabled3')
      }
      
    },200);

    btn.click(function(){
      if($(this).hasClass('disabled3')){
        return false
      } else {
        form.submit();
      }
    });
    
  }

});

//  Phone Mask4
$(function() {
  
  if($('#user_phone4').exists()){
    
    $('#user_phone4').each(function(){
      $(this).mask("(99) 999-99-99");
    });
    
  }
  
  if($('.phone_form4').exists()){
    
    var form = $('.phone_form4'),
      btn = form.find('.btn_submit4');
    
    form.find('.rfield4').addClass('empty_field4');
  
    setInterval(function(){
    
      if($('#user_phone4').exists()){
        var pmc = $('#user_phone4');
        if ( (pmc.val().indexOf("_") != -1) || pmc.val() == '' ) {
          pmc.addClass('empty_field4');
        } else {
            pmc.removeClass('empty_field4');
        }
      }
      
      var sizeEmpty = form.find('.empty_field4').size();
      
      if(sizeEmpty > 0){
        if(btn.hasClass('disabled4')){
          return false
        } else {
          btn.addClass('disabled4')
        }
      } else {
        btn.removeClass('disabled4')
      }
      
    },200);

    btn.click(function(){
      if($(this).hasClass('disabled4')){
        return false
      } else {
        form.submit();
      }
    });
    
  }

});

//  Phone Mask5
$(function() {
  
  if($('#user_phone5').exists()){
    
    $('#user_phone5').each(function(){
      $(this).mask("(99) 999-99-99");
    });
    
  }
  
  if($('.phone_form5').exists()){
    
    var form = $('.phone_form5'),
      btn = form.find('.btn_submit5');
    
    form.find('.rfield5').addClass('empty_field5');
  
    setInterval(function(){
    
      if($('#user_phone5').exists()){
        var pmc = $('#user_phone5');
        if ( (pmc.val().indexOf("_") != -1) || pmc.val() == '' ) {
          pmc.addClass('empty_field5');
        } else {
            pmc.removeClass('empty_field5');
        }
      }
      
      var sizeEmpty = form.find('.empty_field5').size();
      
      if(sizeEmpty > 0){
        if(btn.hasClass('disabled5')){
          return false
        } else {
          btn.addClass('disabled5')
        }
      } else {
        btn.removeClass('disabled5')
      }
      
    },200);

    btn.click(function(){
      if($(this).hasClass('disabled5')){
        return false
      } else {
        form.submit();
      }
    });
    
  }

});

})( jQuery );