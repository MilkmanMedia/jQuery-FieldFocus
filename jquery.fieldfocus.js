/**
 * Project: jQuery FieldFocus
 * Description: Small plugin for handling defaulttexts in inputfields
 * Author: Daniel Köntös :: MilkmanMedia - Your WebApp Innovator - www.MilkmanMedia.de
 * License: MIT, GPL
 * 
 * Params: 
 * @defaultText: default value in inputfield (if set to false the value of "value" attribute is used)
 * @classActive: defines class that is used when field is focussed
 * @classPassive: defines class that is used when field is not focussed
 * 
 * usage:
 *  
 * $('input[type="text"]').fieldfocus(); //inits FieldFocus on all textinputs
 *  
 * or
 *
 * $('input[type="text"], #my-input-field').fieldfocus({
 *   defaultText: 'hello world!',
 *   classActive: 'custom-active-class'
 * }); // inits FieldFocus on all textinputs AND the Element with the ID 'my-input-field'; add the custom default value 'hello world!' and the     custom classActive 'custom-active-class'
 */

(function($){
  $.fieldfocus = {
    defaults: {
      defaultText: false,
      classActive: 'ff-active',
      classPassive: 'ff-passive'
    }
  };
  $.fn.extend({
    fieldfocus: function(data){
      $(this).each(function(){
        var ff = $.fieldfocus;
        var ffO = $(this);
        var config = $.extend({}, ff.defaults, data);

        ffO.addClass(config.classPassive);

        (!config.defaultText)?
          config.defaultText=ffO.val():
          ffO.val(config.defaultText);

        ffO.focusin(function(){
          ($(this).val() == config.defaultText)?
            $(this).val(''):
            '';
          ffO.removeClass(config.classPassive);
          ffO.addClass(config.classActive);
        }).focusout(function(){
          ($(this).val() == '' || $(this).val() == null || $(this).val() == ' ')?
            $(this).addClass(config.classPassive).removeClass(config.classActive).val(config.defaultText):
            '';
        });
      });
    }
  });
})(jQuery);
