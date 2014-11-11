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

//  Phone Mask 4
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

//  Phone Mask 5
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

//  Phone Mask 6
$(function() {
  
  if($('#user_phone6').exists()){
    
    $('#user_phone6').each(function(){
      $(this).mask("(99) 999-99-99");
    });
    
  }
  
  if($('.phone_form6').exists()){
    
    var form = $('.phone_form6'),
      btn = form.find('.btn_submit6');
    
    form.find('.rfield6').addClass('empty_field6');
  
    setInterval(function(){
    
      if($('#user_phone6').exists()){
        var pmc = $('#user_phone6');
        if ( (pmc.val().indexOf("_") != -1) || pmc.val() == '' ) {
          pmc.addClass('empty_field6');
        } else {
            pmc.removeClass('empty_field6');
        }
      }
      
      var sizeEmpty = form.find('.empty_field6').size();
      
      if(sizeEmpty > 0){
        if(btn.hasClass('disabled6')){
          return false
        } else {
          btn.addClass('disabled6')
        }
      } else {
        btn.removeClass('disabled6')
      }
      
    },200);

    btn.click(function(){
      if($(this).hasClass('disabled6')){
        return false
      } else {
        form.submit();
      }
    });
    
  }

});

//  Phone Mask c1
$(function() {
  
  if($('#user_phone_c1').exists()){
    
    $('#user_phone_c1').each(function(){
      $(this).mask("(99) 999-99-99");
    });
    
  }
  
  if($('.phone_form_c1').exists()){
    
    var form = $('.phone_form_c1'),
      btn = form.find('.btn_submit_c1');
    
    form.find('.rfield_c1').addClass('empty_field_c1');
  
    setInterval(function(){
    
      if($('#user_phone_c1').exists()){
        var pmc = $('#user_phone_c1');
        if ( (pmc.val().indexOf("_") != -1) || pmc.val() == '' ) {
          pmc.addClass('empty_field_c1');
        } else {
            pmc.removeClass('empty_field_c1');
        }
      }
      
      var sizeEmpty = form.find('.empty_field_c1').size();
      
      if(sizeEmpty > 0){
        if(btn.hasClass('disabled_c1')){
          return false
        } else {
          btn.addClass('disabled_c1')
        }
      } else {
        btn.removeClass('disabled_c1')
      }
      
    },200);

    btn.click(function(){
      if($(this).hasClass('disabled_c1')){
        return false
      } else {
        form.submit();
      }
    });
    
  }

});

//  Phone Mask c2
$(function() {
  
  if($('#user_phone_c2').exists()){
    
    $('#user_phone_c2').each(function(){
      $(this).mask("(99) 999-99-99");
    });
    
  }
  
  if($('.phone_form_c2').exists()){
    
    var form = $('.phone_form_c2'),
      btn = form.find('.btn_submit_c2');
    
    form.find('.rfield_c2').addClass('empty_field_c2');
  
    setInterval(function(){
    
      if($('#user_phone_c2').exists()){
        var pmc = $('#user_phone_c2');
        if ( (pmc.val().indexOf("_") != -1) || pmc.val() == '' ) {
          pmc.addClass('empty_field_c2');
        } else {
            pmc.removeClass('empty_field_c2');
        }
      }
      
      var sizeEmpty = form.find('.empty_field_c2').size();
      
      if(sizeEmpty > 0){
        if(btn.hasClass('disabled_c2')){
          return false
        } else {
          btn.addClass('disabled_c2')
        }
      } else {
        btn.removeClass('disabled_c2')
      }
      
    },200);

    btn.click(function(){
      if($(this).hasClass('disabled_c2')){
        return false
      } else {
        form.submit();
      }
    });
    
  }

});

//  Phone Mask c3
$(function() {
  
  if($('#user_phone_c3').exists()){
    
    $('#user_phone_c3').each(function(){
      $(this).mask("(99) 999-99-99");
    });
    
  }
  
  if($('.phone_form_c3').exists()){
    
    var form = $('.phone_form_c3'),
      btn = form.find('.btn_submit_c3');
    
    form.find('.rfield_c3').addClass('empty_field_c3');
  
    setInterval(function(){
    
      if($('#user_phone_c3').exists()){
        var pmc = $('#user_phone_c3');
        if ( (pmc.val().indexOf("_") != -1) || pmc.val() == '' ) {
          pmc.addClass('empty_field_c3');
        } else {
            pmc.removeClass('empty_field_c3');
        }
      }
      
      var sizeEmpty = form.find('.empty_field_c3').size();
      
      if(sizeEmpty > 0){
        if(btn.hasClass('disabled_c3')){
          return false
        } else {
          btn.addClass('disabled_c3')
        }
      } else {
        btn.removeClass('disabled_c3')
      }
      
    },200);

    btn.click(function(){
      if($(this).hasClass('disabled_c3')){
        return false
      } else {
        form.submit();
      }
    });
    
  }

});

//  Phone Mask c4
$(function() {
  
  if($('#user_phone_c4').exists()){
    
    $('#user_phone_c4').each(function(){
      $(this).mask("(99) 999-99-99");
    });
    
  }
  
  if($('.phone_form_c4').exists()){
    
    var form = $('.phone_form_c4'),
      btn = form.find('.btn_submit_c4');
    
    form.find('.rfield_c4').addClass('empty_field_c4');
  
    setInterval(function(){
    
      if($('#user_phone_c4').exists()){
        var pmc = $('#user_phone_c4');
        if ( (pmc.val().indexOf("_") != -1) || pmc.val() == '' ) {
          pmc.addClass('empty_field_c4');
        } else {
            pmc.removeClass('empty_field_c4');
        }
      }
      
      var sizeEmpty = form.find('.empty_field_c4').size();
      
      if(sizeEmpty > 0){
        if(btn.hasClass('disabled_c4')){
          return false
        } else {
          btn.addClass('disabled_c4')
        }
      } else {
        btn.removeClass('disabled_c4')
      }
      
    },200);

    btn.click(function(){
      if($(this).hasClass('disabled_c4')){
        return false
      } else {
        form.submit();
      }
    });
    
  }

});

//  Phone Mask c5
$(function() {
  
  if($('#user_phone_c5').exists()){
    
    $('#user_phone_c5').each(function(){
      $(this).mask("(99) 999-99-99");
    });
    
  }
  
  if($('.phone_form_c5').exists()){
    
    var form = $('.phone_form_c5'),
      btn = form.find('.btn_submit_c5');
    
    form.find('.rfield_c5').addClass('empty_field_c5');
  
    setInterval(function(){
    
      if($('#user_phone_c5').exists()){
        var pmc = $('#user_phone_c5');
        if ( (pmc.val().indexOf("_") != -1) || pmc.val() == '' ) {
          pmc.addClass('empty_field_c5');
        } else {
            pmc.removeClass('empty_field_c5');
        }
      }
      
      var sizeEmpty = form.find('.empty_field_c5').size();
      
      if(sizeEmpty > 0){
        if(btn.hasClass('disabled_c5')){
          return false
        } else {
          btn.addClass('disabled_c5')
        }
      } else {
        btn.removeClass('disabled_c5')
      }
      
    },200);

    btn.click(function(){
      if($(this).hasClass('disabled_c5')){
        return false
      } else {
        form.submit();
      }
    });
    
  }

});

//  Phone Mask c6
$(function() {
  
  if($('#user_phone_c6').exists()){
    
    $('#user_phone_c6').each(function(){
      $(this).mask("(99) 999-99-99");
    });
    
  }
  
  if($('.phone_form_c6').exists()){
    
    var form = $('.phone_form_c6'),
      btn = form.find('.btn_submit_c6');
    
    form.find('.rfield_c6').addClass('empty_field_c6');
  
    setInterval(function(){
    
      if($('#user_phone_c6').exists()){
        var pmc = $('#user_phone_c6');
        if ( (pmc.val().indexOf("_") != -1) || pmc.val() == '' ) {
          pmc.addClass('empty_field_c6');
        } else {
            pmc.removeClass('empty_field_c6');
        }
      }
      
      var sizeEmpty = form.find('.empty_field_c6').size();
      
      if(sizeEmpty > 0){
        if(btn.hasClass('disabled_c6')){
          return false
        } else {
          btn.addClass('disabled_c6')
        }
      } else {
        btn.removeClass('disabled_c6')
      }
      
    },200);

    btn.click(function(){
      if($(this).hasClass('disabled_c6')){
        return false
      } else {
        form.submit();
      }
    });
    
  }

});

//  Phone Mask c7
$(function() {
  
  if($('#user_phone_c7').exists()){
    
    $('#user_phone_c7').each(function(){
      $(this).mask("(99) 999-99-99");
    });
    
  }
  
  if($('.phone_form_c7').exists()){
    
    var form = $('.phone_form_c7'),
      btn = form.find('.btn_submit_c7');
    
    form.find('.rfield_c7').addClass('empty_field_c7');
  
    setInterval(function(){
    
      if($('#user_phone_c7').exists()){
        var pmc = $('#user_phone_c7');
        if ( (pmc.val().indexOf("_") != -1) || pmc.val() == '' ) {
          pmc.addClass('empty_field_c7');
        } else {
            pmc.removeClass('empty_field_c7');
        }
      }
      
      var sizeEmpty = form.find('.empty_field_c7').size();
      
      if(sizeEmpty > 0){
        if(btn.hasClass('disabled_c7')){
          return false
        } else {
          btn.addClass('disabled_c7')
        }
      } else {
        btn.removeClass('disabled_c7')
      }
      
    },200);

    btn.click(function(){
      if($(this).hasClass('disabled_c7')){
        return false
      } else {
        form.submit();
      }
    });
    
  }

});

//  Phone Mask c8
$(function() {
  
  if($('#user_phone_c8').exists()){
    
    $('#user_phone_c8').each(function(){
      $(this).mask("(99) 999-99-99");
    });
    
  }
  
  if($('.phone_form_c8').exists()){
    
    var form = $('.phone_form_c8'),
      btn = form.find('.btn_submit_c8');
    
    form.find('.rfield_c8').addClass('empty_field_c8');
  
    setInterval(function(){
    
      if($('#user_phone_c8').exists()){
        var pmc = $('#user_phone_c8');
        if ( (pmc.val().indexOf("_") != -1) || pmc.val() == '' ) {
          pmc.addClass('empty_field_c8');
        } else {
            pmc.removeClass('empty_field_c8');
        }
      }
      
      var sizeEmpty = form.find('.empty_field_c8').size();
      
      if(sizeEmpty > 0){
        if(btn.hasClass('disabled_c8')){
          return false
        } else {
          btn.addClass('disabled_c8')
        }
      } else {
        btn.removeClass('disabled_c8')
      }
      
    },200);

    btn.click(function(){
      if($(this).hasClass('disabled_c8')){
        return false
      } else {
        form.submit();
      }
    });
    
  }

});

//  Phone Mask c9
$(function() {
  
  if($('#user_phone_c9').exists()){
    
    $('#user_phone_c9').each(function(){
      $(this).mask("(99) 999-99-99");
    });
    
  }
  
  if($('.phone_form_c9').exists()){
    
    var form = $('.phone_form_c9'),
      btn = form.find('.btn_submit_c9');
    
    form.find('.rfield_c9').addClass('empty_field_c9');
  
    setInterval(function(){
    
      if($('#user_phone_c9').exists()){
        var pmc = $('#user_phone_c9');
        if ( (pmc.val().indexOf("_") != -1) || pmc.val() == '' ) {
          pmc.addClass('empty_field_c9');
        } else {
            pmc.removeClass('empty_field_c9');
        }
      }
      
      var sizeEmpty = form.find('.empty_field_c9').size();
      
      if(sizeEmpty > 0){
        if(btn.hasClass('disabled_c9')){
          return false
        } else {
          btn.addClass('disabled_c9')
        }
      } else {
        btn.removeClass('disabled_c9')
      }
      
    },200);

    btn.click(function(){
      if($(this).hasClass('disabled_c9')){
        return false
      } else {
        form.submit();
      }
    });
    
  }

});




//  Phone Mask8
$(function() {
  
  if($('#user_phone8').exists()){
    
    $('#user_phone8').each(function(){
      $(this).mask("(99) 999-99-99");
    });
    
  }
  
  if($('.phone_form8').exists()){
    
    var form = $('.phone_form8'),
      btn = form.find('.btn_submit8');
    
    form.find('.rfield8').addClass('empty_field8');
  
    setInterval(function(){
    
      if($('#user_phone8').exists()){
        var pmc = $('#user_phone8');
        if ( (pmc.val().indexOf("_") != -1) || pmc.val() == '' ) {
          pmc.addClass('empty_field8');
        } else {
            pmc.removeClass('empty_field8');
        }
      }
      
      var sizeEmpty = form.find('.empty_field8').size();
      
      if(sizeEmpty > 0){
        if(btn.hasClass('disabled8')){
          return false
        } else {
          btn.addClass('disabled8')
        }
      } else {
        btn.removeClass('disabled8')
      }
      
    },200);

    btn.click(function(){
      if($(this).hasClass('disabled8')){
        return false
      } else {
        form.submit();
      }
    });
    
  }

});

})( jQuery );