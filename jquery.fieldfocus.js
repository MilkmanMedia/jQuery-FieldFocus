/**
 * Project: jQuery FieldFocus
 * Description: Small plugin for handling defaulttexts in inputfields
 * Author: Daniel Köntös :: MilkmanMedia - Your WebApp Innovator - www.MilkmanMedia.de
 * License: MIT, GPL
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
