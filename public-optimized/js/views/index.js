define(["require","jquery","underscore","backbone","handlebars","views/base","text!templates/index.html"],function(e){"use strict";var t=e("jquery"),n=(e("underscore"),e("backbone"),e("handlebars"),e("views/base")),o=e("text!templates/index.html");return n.extend({isReady:!1,events:{"click #bTestSoapRest":"onBtnTestSoapRestClick","click #bTest":"onBtnTestClick","click #objectTypeGroup input":"onObjectTypeGroupClick"},initialize:function(){console.log("initialize"),n.prototype.initialize.call(this),this.templates.primary=o,this.setupCollections(),this.on("error",function(e){this.onShowError(e)},this),this.on("ready",function(){this.render()},this),this.trigger("ready")},render:function(){return console.log("render"),this.hasRendered=!0,this.empty(),this.$el.html(this.templates.primary),this.trigger("render"),this.createControls(),this},show:function(){return console.log("show"),this.hasRendered===!1&&this.fetchCollections(),window.onresize=this.onResize,this.onResize(),this.$el.show(),this.trigger("show"),this},onResize:function(){var e=this.getWorkAreaHeight();t("#resultArea").height(e)},getWorkAreaHeight:function(){var e=0;return t(".api").each(function(){e+=t(this).outerHeight()}),e},setupCollections:function(){},fetchCollections:function(){},createControls:function(){this.bindControls()},bindControls:function(){console.log("bindControls")},onShowError:function(e){t("#alertMsg").text(e),t("#alertModal").fadeIn("slow")},testGet:function(e){t.ajax({url:e,type:"GET",dataType:"json"}).done(function(e){console.log("done"),t("#dataResults").val(JSON.stringify(e,null,"	"))}).fail(function(e){console.log("fail"),t("#dataResults").val(e.responseText)})},onBtnTestSoapRestClick:function(){t("#dataResults").val("");var e=t("#soaprestGroup input:radio:checked").val();this.testGet("test-"+e)},onBtnTestClick:function(){t("#dataResults").val("");var e=t("#dataTypeGroup input:radio:checked").val(),n=t("#objectTypeGroup input:radio:checked").val();e||alert("Please select a method (ie. Create, Retrieve...)"),n||alert("Please select an object."),this.testGet("test-"+n+"-"+e)},onObjectTypeGroupClick:function(){var e=t("#objectTypeGroup input:radio:checked"),n=e.data("method"),o={c:"post",r:"get",u:"patch",d:"delete",s:"send"};for(var i in o)this.enableOperation(o[i],-1!==t.inArray(i,n))},enableOperation:function(e,n){var o=t('#dataTypeGroup :input:radio[value="'+e+'"]');o.attr("disabled",!n);var i=n?"#000":"#ccc";o.parent().css("color",i)}})});