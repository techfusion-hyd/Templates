!function(a,b,c,d){"use strict";Foundation.libs.forms={name:"forms",version:"4.3.1",cache:{},settings:{disable_class:"no-custom",last_combo:null},init:function(b,c,d){return"object"==typeof c&&a.extend(!0,this.settings,c),"string"!=typeof c?(this.settings.init||this.events(),this.assemble(),this.settings.init):this[c].call(this,d)},assemble:function(){a('form.custom input[type="radio"]',a(this.scope)).not('[data-customforms="disabled"]').not("."+this.settings.disable_class).each(this.append_custom_markup),a('form.custom input[type="checkbox"]',a(this.scope)).not('[data-customforms="disabled"]').not("."+this.settings.disable_class).each(this.append_custom_markup),a("form.custom select",a(this.scope)).not('[data-customforms="disabled"]').not("."+this.settings.disable_class).not("[multiple=multiple]").each(this.append_custom_select)},events:function(){var d=this;a(this.scope).on("click.fndtn.forms","form.custom span.custom.checkbox",function(b){b.preventDefault(),b.stopPropagation(),d.toggle_checkbox(a(this))}).on("click.fndtn.forms","form.custom span.custom.radio",function(b){b.preventDefault(),b.stopPropagation(),d.toggle_radio(a(this))}).on("change.fndtn.forms","form.custom select",function(b,c){a(this).is('[data-customforms="disabled"]')||d.refresh_custom_select(a(this),c)}).on("click.fndtn.forms","form.custom label",function(b){if(a(b.target).is("label")){var c,e,f=a("#"+d.escape(a(this).attr("for"))).not('[data-customforms="disabled"]');0!==f.length&&("checkbox"===f.attr("type")?(b.preventDefault(),c=a(this).find("span.custom.checkbox"),0===c.length&&(c=f.add(this).siblings("span.custom.checkbox").first()),d.toggle_checkbox(c)):"radio"===f.attr("type")&&(b.preventDefault(),e=a(this).find("span.custom.radio"),0===e.length&&(e=f.add(this).siblings("span.custom.radio").first()),d.toggle_radio(e)))}}).on("mousedown.fndtn.forms","form.custom div.custom.dropdown",function(){return!1}).on("click.fndtn.forms","form.custom div.custom.dropdown a.current, form.custom div.custom.dropdown a.selector",function(b){var c=a(this),f=c.closest("div.custom.dropdown"),g=e(f,"select");return f.hasClass("open")||a(d.scope).trigger("click"),b.preventDefault(),!1===g.is(":disabled")?(f.toggleClass("open"),f.hasClass("open")?a(d.scope).on("click.fndtn.forms.customdropdown",function(){f.removeClass("open"),a(d.scope).off(".fndtn.forms.customdropdown")}):a(d.scope).on(".fndtn.forms.customdropdown"),!1):void 0}).on("click.fndtn.forms touchend.fndtn.forms","form.custom div.custom.dropdown li",function(b){var d=a(this),f=d.closest("div.custom.dropdown"),g=e(f,"select"),h=0;if(b.preventDefault(),b.stopPropagation(),!a(this).hasClass("disabled")){a("div.dropdown").not(f).removeClass("open");var i=d.closest("ul").find("li.selected");if(i.removeClass("selected"),d.addClass("selected"),f.removeClass("open").find("a.current").text(d.text()),d.closest("ul").find("li").each(function(a){d[0]===this&&(h=a)}),g[0].selectedIndex=h,g.data("prevalue",i.html()),"undefined"!=typeof c.createEvent){var j=c.createEvent("HTMLEvents");j.initEvent("change",!0,!0),g[0].dispatchEvent(j)}else g[0].fireEvent("onchange")}}),a(b).on("keydown",function(b){var d=(c.activeElement,Foundation.libs.forms),e=a(".custom.dropdown.open");if(e.length>0){if(b.preventDefault(),13===b.which&&e.find("li.selected").trigger("click"),27===b.which&&e.removeClass("open"),b.which>=65&&b.which<=90){var f=d.go_to(e,b.which),g=e.find("li.selected");f&&(g.removeClass("selected"),d.scrollTo(f.addClass("selected"),300))}if(38===b.which){var g=e.find("li.selected"),h=g.prev(":not(.disabled)");h.length>0&&(h.parent()[0].scrollTop=h.parent().scrollTop()-d.outerHeight(h),g.removeClass("selected"),h.addClass("selected"))}else if(40===b.which){var g=e.find("li.selected"),f=g.next(":not(.disabled)");f.length>0&&(f.parent()[0].scrollTop=f.parent().scrollTop()+d.outerHeight(f),g.removeClass("selected"),f.addClass("selected"))}}}),this.settings.init=!0},go_to:function(a,b){var c=a.find("li"),d=c.length;if(d>0)for(var e=0;d>e;e++){var f=c.eq(e).text().charAt(0).toLowerCase();if(f===String.fromCharCode(b).toLowerCase())return c.eq(e)}},scrollTo:function(a,b){if(!(0>b)){var c=a.parent(),d=this.outerHeight(a),e=d*a.index()-c.scrollTop(),f=10*(e/b);this.scrollToTimerCache=setTimeout(function(){isNaN(parseInt(f,10))||(c[0].scrollTop=c.scrollTop()+f,this.scrollTo(a,b-10))}.bind(this),10)}},append_custom_markup:function(b,c){var d=a(c),e=d.attr("type"),f=d.next("span.custom."+e);d.parent().hasClass("switch")||d.addClass("hidden-field"),0===f.length&&(f=a('<span class="custom '+e+'"></span>').insertAfter(d)),f.toggleClass("checked",d.is(":checked")),f.toggleClass("disabled",d.is(":disabled"))},append_custom_select:function(b,c){var d,e=Foundation.libs.forms,f=a(c),g=f.next("div.custom.dropdown"),h=g.find("ul"),i=(g.find(".current"),g.find(".selector")),j=f.find("option"),k=j.filter(":selected"),l=f.attr("class")?f.attr("class").split(" "):[],m=0,n="",o=!1;if(0===g.length){var p=f.hasClass("small")?"small":f.hasClass("medium")?"medium":f.hasClass("large")?"large":f.hasClass("expand")?"expand":"";g=a('<div class="'+["custom","dropdown",p].concat(l).filter(function(a,b,c){return""===a?!1:c.indexOf(a)===b}).join(" ")+'"><a href="#" class="selector"></a><ul /></div>'),i=g.find(".selector"),h=g.find("ul"),n=j.map(function(){var b=a(this).attr("class")?a(this).attr("class"):"";return"<li class='"+b+"'>"+a(this).html()+"</li>"}).get().join(""),h.append(n),o=g.prepend('<a href="#" class="current">'+k.html()+"</a>").find(".current"),f.after(g).addClass("hidden-field")}else n=j.map(function(){return"<li>"+a(this).html()+"</li>"}).get().join(""),h.html("").append(n);if(e.assign_id(f,g),g.toggleClass("disabled",f.is(":disabled")),d=h.find("li"),e.cache[g.data("id")]=d.length,j.each(function(b){this.selected&&(d.eq(b).addClass("selected"),o&&o.html(a(this).html())),a(this).is(":disabled")&&d.eq(b).addClass("disabled")}),!g.is(".small, .medium, .large, .expand")){g.addClass("open");var e=Foundation.libs.forms;e.hidden_fix.adjust(h),m=e.outerWidth(d)>m?e.outerWidth(d):m,Foundation.libs.forms.hidden_fix.reset(),g.removeClass("open")}},assign_id:function(a,b){var c=[+new Date,Foundation.random_str(5)].join("-");a.attr("data-id",c),b.attr("data-id",c)},refresh_custom_select:function(b,c){var d=this,e=0,f=b.next(),g=b.find("option"),h=f.find("li");(h.length!==this.cache[f.data("id")]||c)&&(f.find("ul").html(""),g.each(function(){var b=a("<li>"+a(this).html()+"</li>");f.find("ul").append(b)}),g.each(function(b){this.selected&&(f.find("li").eq(b).addClass("selected"),f.find(".current").html(a(this).html())),a(this).is(":disabled")&&f.find("li").eq(b).addClass("disabled")}),f.removeAttr("style").find("ul").removeAttr("style"),f.find("li").each(function(){f.addClass("open"),d.outerWidth(a(this))>e&&(e=d.outerWidth(a(this))),f.removeClass("open")}),h=f.find("li"),this.cache[f.data("id")]=h.length)},toggle_checkbox:function(a){var b=a.prev(),c=b[0];!1===b.is(":disabled")&&(c.checked=c.checked?!1:!0,a.toggleClass("checked"),b.trigger("change"))},toggle_radio:function(a){var b=a.prev(),c=b.closest("form.custom"),d=b[0];!1===b.is(":disabled")&&(c.find('input[type="radio"][name="'+this.escape(b.attr("name"))+'"]').next().not(a).removeClass("checked"),a.hasClass("checked")||a.toggleClass("checked"),d.checked=a.hasClass("checked"),b.trigger("change"))},escape:function(a){return a?a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"):""},hidden_fix:{tmp:[],hidden:null,adjust:function(b){var c=this;c.hidden=b.parents(),c.hidden=c.hidden.add(b).filter(":hidden"),c.hidden.each(function(){var b=a(this);c.tmp.push(b.attr("style")),b.css({visibility:"hidden",display:"block"})})},reset:function(){var b=this;b.hidden.each(function(c){var e=a(this),f=b.tmp[c];f===d?e.removeAttr("style"):e.attr("style",f)}),b.tmp=[],b.hidden=null}},off:function(){a(this.scope).off(".fndtn.forms")},reflow:function(){}};var e=function(b,c){for(var b=b.prev();b.length;){if(b.is(c))return b;b=b.prev()}return a()}}(Foundation.zj,this,this.document);